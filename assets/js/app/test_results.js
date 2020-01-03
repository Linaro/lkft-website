// Stores the builds data collected
var build_data = [];
$(document).ready(function(){
    // Get the latest builds for a given qa-reports project url
    function getLatestProjectBuilds (project) {
        var build_endpoint = project["project_url"] + "builds/?limit=10";
        var project_endpoint = project["project_url"];

        var project_details = {
                url: project["squad_url"],
                builds: "",
                project: ""
        }

        // Get project data
        $.getJSON(project_endpoint, function(project_data) {
            project_details["name"] = project_data["slug"];
            project_details["project"] = project_data;
        });
        // Get the builds data
        $.getJSON(build_endpoint, function(data) {
            project_details["builds"] = data;
            // Loop over each build
            $.each(data["results"], function(key, build) {
                var build_status_url = build["status"];
                $.getJSON(build_status_url, function(status_data) {
                    var build_test_details = {
                        pass: status_data["tests_pass"],
                        fail: status_data["tests_fail"],
                        skip: status_data["tests_skip"]
                    };
                    console.log(build_test_details);
                    data["results"][key]["test_data"] = build_test_details;
                });
                var build_metadata_url = build["metadata"];
                $.getJSON(build_metadata_url, function(metadata) {
                    data["results"][key]["metadata"] = metadata["build-url"];
                });
            });
            build_data.push(project_details);
        });
    }

    // Stores the projects
    var project_urls = [
      {
        name: "4.4",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-stable-rc-4.4-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/40/"
      },
      {
        name: "4.9",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-stable-rc-4.9-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/23/"
      },
      {
        name: "4.14",
        squad_url:
          "https://qa-reports.linaro.org/lkft/linux-stable-rc-4.14-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/58/"
      },
      {
        name: "4.19",
        squad_url:
          "https://qa-reports.linaro.org/lkft/linux-stable-rc-4.19-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/135/"
      },
      {
        name: "5.3",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-stable-rc-5.3-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/204/"
      },
      {
        name: "5.4",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-stable-rc-5.4-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/232/"
      },
      {
        name: "mainline",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-mainline-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/22/"
      },
      {
        name: "linux-next",
        squad_url: "https://qa-reports.linaro.org/lkft/linux-next-oe/",
        project_url: "https://qa-reports.linaro.org/api/projects/6/"
      }
    ];
    // Check to see if the test_results container is present
    if($("#test_results").length > 0){
        console.log("test results are to be loaded.");
        // Display branches
        $(project_urls).each(function(name, project){
            console.log(project);
            getLatestProjectBuilds(project);
        });
    }
});

function createProjectList(build_data){
    var elements = [];
    $(build_data).each(function(key, project){
        var project_details = project["project"];
        var latest_build = project["builds"]["results"][0];

        var timeNow = new Date();
        var createdAt = new Date(latest_build["created_at"]);
        var time_diff = Math.abs(Math.round((timeNow - createdAt) / 1000 / 60 / 60));
        var slug = "";
        if(latest_build['finished'] === true){
            slug = project_details["slug"];
        }
        else {
            slug = project_details["slug"] + '<img id="loader" class="img-responsive" style="width:20px;" alt="Loading Icon" src="/assets/images/loading.gif" />';
        }

        var listItem =
          '<li class="list-group-item d-flex flex-column flex-sm-row justify-content-sm-between align-items-center ">';
        listItem += "<p style='text-align:center;max-width:200px'>" + slug + "</p>";
          listItem +=
            '<a href="#" class="mt-1 mb-1 badge badge-pill badge-light" data-toggle="tooltip" data-placement="top" title="' +
            new Date(latest_build["created_at"]).toLocaleDateString("en-US") + " " + new Date(latest_build["created_at"]).toLocaleTimeString("en-US") +
            '">' +
            time_diff +
            ' hours ago <span class="fa fa-clock"></span></a>';
        listItem +=
          '<a href="#" class="mt-1 mb-1 badge badge-success badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Passed">' + latest_build["test_data"]["pass"] + '</a>';
        listItem +=
          '<a href="#" class="mt-1 mb-1 badge badge-danger badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Failed">' + latest_build["test_data"]["fail"] + '</a>';
        listItem +=
          '<a href="#" class="mt-1 mb-1 badge badge-info badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Skipped">' + latest_build["test_data"]["skip"] + '</a>';

          listItem += '<a href="" class="btn btn-primary" data-toggle="modal" data-target="#' + project_details["slug"] +'-modal">View Builds</a>';
          listItem += '</li>';
        elements.push(listItem);
    });
    return elements;
}

function createProjectModals(build_data){
    var elements = [];
    $(build_data).each(function(key, project){
        console.log("creating element");
        console.log(project);
        var project_details = project["project"];
        var builds = project["builds"]["results"];

        var modal =
          '<div class="modal  fade" id="' +
          project_details["slug"] +
          '-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' +
          project_details["slug"] +
          '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>' +project_details['description'] + '</p><ul class="list-group" id="build_list">';


        $(builds).each(function(key, build){
          var timeNow = new Date();
          var createdAt = new Date(build["created_at"]);
          var time_diff = Math.abs(
            Math.round((timeNow - createdAt) / 1000 / 60 / 60)
          );
          var listItem =
            '<li class="list-group-item d-flex flex-column flex-sm-row justify-content-sm-between align-items-center ">';
          listItem += project_details["slug"];

          listItem +=
            '<a href="#" class="mt-1 mb-1 badge badge-pill badge-light" data-toggle="tooltip" data-placement="top" title="' +
            new Date(build["created_at"]).toLocaleDateString("en-US") +
            " " +
            new Date(build["created_at"]).toLocaleTimeString("en-US") +
            '">' +
            time_diff +
            ' hours ago <span class="fa fa-clock"></span></a>';
          listItem +=
            '<a href="#" class="mt-1 mb-1 badge badge-success badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Passed">' +
            build["test_data"]["pass"] +
            "</a>";
          listItem +=
            '<a href="#" class="mt-1 mb-1 badge badge-danger badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Failed">' +
            build["test_data"]["fail"] +
            "</a>";
          listItem +=
            '<a href="#" class="mt-1 mb-1 badge badge-info badge-pill" data-toggle="tooltip" data-placement="top" title="Tests Skipped">' +
            build["test_data"]["skip"] +
            "</a>";

          listItem +=
            '<a href="" class="btn btn-primary" data-toggle="modal" data-target="#' +
            project_details["slug"] +
            '-modal">View</a>';
          listItem += "</li>";

            modal += listItem;
        });




        modal += '</ul><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><a href="'+ project["url"] +'" class="btn btn-primary">View all Builds</a></div></div></div></div>';
        elements.push(modal);
    });
    return elements;
}


// Display data once Ajax requests have halted
$(document).ajaxStop(function() {
    console.log(build_data);
    var build_list = createProjectList(build_data);
    $("#project_list").html(build_list);
    var project_modals = createProjectModals(build_data);
    $("#modals_container").html(project_modals);
        // Instantiate tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
