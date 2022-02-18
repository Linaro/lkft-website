// Stores the projects
$.when($.getJSON("/assets/json/tests.json")).done(function (json) {
  var project_urls = json["tests"]["branches"];
  // Stores the builds data collected
  var all_projects_data = [],
    current_progress_val = 0,
    i,
    projects = [],
    builds = [],
    project_progress_chunk = 100 / project_urls.length,
    current_total_progress = 0,
    build_data = [];

  function aggregateResults(project, buildData, build_statuses) {
    console.log("Project: ", project);
    console.log("Build data:", buildData);
    console.log("Build statuses:", build_statuses);
    // Get the original project details
    var original_project;
    $(project_urls).each(function (key, original_project_data) {
      if (original_project_data["project_url"] == project["url"]) {
        original_project = project_urls[key];
      }
    });
    // Setup the project_details object
    var project_details = {
      url: original_project["squad_url"],
      builds: [],
      project: project,
      name: project["slug"],
      project_url: original_project["project_url"],
    };
    // Loop over build results and collect test result details
    let newBuilds = [];
    $(buildData["results"]).each(function (results_key, build_result_data) {
      let newBuildResultData = { ...build_result_data };
      console.log("Build data:", buildData);
      // Loop over collected test result data and associate corresponding build
      found = false;
      $(build_statuses).each(function (status_key, build_status_obj) {
        if (build_status_obj["build"] === build_result_data["url"]) {
          found = true;
          var build_test_details = {
            pass: build_status_obj["tests_pass"],
            fail: build_status_obj["tests_fail"],
            skip: build_status_obj["tests_skip"],
          };
          newBuildResultData["test_data"] = build_test_details;
        }
      });
      newBuilds.push(newBuildResultData);
    });
    console.log("New builds:", newBuilds);
    project_details["builds"] = newBuilds;
    all_projects_data.push(project_details);
    console.log("Presenting data...");
    console.log("New project details");
    console.log(project_details);
    presentData(project_details);
  }
  function getTimeDelta(datetimeObj) {
    return Math.abs(Math.round((new Date() - datetimeObj) / 1000 / 60 / 60));
  }
  // Create a HTML list element for a given set of test data.
  function createProjectList(project_details) {
    console.log("Project:", project_details);
    var elements = [];
    var latest_build = project_details["builds"][0];
    // Get the time delta
    var time_diff = getTimeDelta(new Date(latest_build["created_at"]));
    var slug = "";
    if (latest_build["finished"] === true) {
      testing = "";
    } else {
      testing =
        '<img id="loader" class="img-responsive" style="width:20px;" alt="Loading Icon" src="/assets/images/building_loader.gif" /><small> testing...</small>';
    }

    var listItem =
      '<li class="list-group-item d-flex flex-column flex-md-row justify-content-md-between align-items-center ">';
    listItem +=
      "<div class='flex-even ml-1 mr-1 text-center text-md-left' style='width: 230px;'><span>" +
      project_details["project"]["slug"] +
      "</span></div>";
    listItem +=
      "<div class='flex-even ml-1 mr-1 text-center' style='width: 100px;'><span>" +
      testing +
      "</span></div>";
    listItem +=
      '<div class="flex-even text-center" style="width: 120px;"><span class="mt-1 mb-1 badge badge-large badge-pill badge-light" data-toggle="tooltip" data-placement="top" title="' +
      new Date(latest_build["created_at"]).toLocaleDateString("en-US") +
      " " +
      new Date(latest_build["created_at"]).toLocaleTimeString("en-US") +
      '">' +
      time_diff +
      ' hours ago <span class="fa fa-clock"></span></span></div>';
    listItem +=
      '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-success badge-pill" style="width: 120px;">' +
      latest_build["test_data"]["pass"] +
      "<span> passed</span></span></div>";
    listItem +=
      '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-danger badge-pill" style="width: 120px;">' +
      latest_build["test_data"]["fail"] +
      "<span> failed</span></span></div>";
    listItem +=
      '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-info badge-pill" style="width: 120px;">' +
      latest_build["test_data"]["skip"] +
      "<span> skipped</span></span></div>";

    listItem +=
      '<div class="flex-even text-center"><a href="#" data-toggle="modal" data-target="#' +
      project_details["project"]["slug"] +
      '-modal">View Builds</a></div>';
    listItem += "</li>";
    elements.push(listItem);

    return elements;
  }
  function createProjectModals(project_details) {
    var elements = [];

    var builds = project_details["builds"].sort(function (a, b) {
      return Number(b.id) - Number(a.id);
    });
    var modal =
      '<div class="modal  fade" id="' +
      project_details["project"]["slug"] +
      '-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">' +
      project_details["project"]["slug"] +
      '</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>' +
      project_details["project"]["description"] +
      '</p><ul class="list-group" id="build_list">';

    $(builds).each(function (key, build) {
      if (build["finished"] === true) {
        testing = "";
      } else {
        testing =
          '<img id="loader" class="img-responsive" style="width:20px;" alt="Loading Icon" src="/assets/images/building_loader.gif" /><small> testing...</small>';
      }
      var time_diff = getTimeDelta(new Date(build["created_at"]));
      var listItem =
        '<li class="list-group-item d-flex flex-even flex-column flex-sm-row justify-content-sm-between align-items-center ">';
      listItem +=
        '<div class="flex-even flex-grow-3 ml-1 mr-1 " style="width: 230px;">' +
        build["version"] +
        "</div>";
      listItem +=
        '<div class="flex-even ml-1 mr-1 " style="width: 100px;">' +
        testing +
        "</div>";

      listItem +=
        '<div class="flex-even text-center" style="width: 120px;"><span class="mt-1 mb-1 badge badge-pill badge-light" title="' +
        new Date(build["created_at"]).toLocaleDateString("en-US") +
        " " +
        new Date(build["created_at"]).toLocaleTimeString("en-US") +
        '">' +
        time_diff +
        ' hours ago <span class="fa fa-clock"></span></span></div>';
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-success badge-pill" style="width: 110px;">' +
        build["test_data"]["pass"] +
        "</span></div>";
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-danger badge-pill" style="width: 110px;">' +
        build["test_data"]["fail"] +
        "</span></div>";
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-info badge-pill" style="width: 110px;">' +
        build["test_data"]["skip"] +
        "</span></div>";
      listItem += "</li>";

      modal += listItem;
    });

    modal +=
      '</ul><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><a href="' +
      project_details["url"] +
      '">View all Builds</a></div></div></div></div>';
    elements.push(modal);

    return elements;
  }
  function presentData(project_details) {
    console.log("Creating project list for: " + project_details);
    console.log(project_details);
    var build_list = createProjectList(project_details);
    $("#project_list").append(build_list);
    console.log("Creating project modals list for: " + project_details);
    var modal_list = createProjectModals(project_details);
    $("#modals_container").append(modal_list);
  }
  function updateProgressBar(chunk) {
    current_total_progress += chunk * 10;
    $("#project_load_progress").attr("aria-valuenow", current_total_progress);
    $("#project_load_progress").attr(
      "style",
      "width: " + current_total_progress / 10 + "%;"
    );
  }
  const createDeferredBuildStatusRequests = async (build) => {
    return new Promise((resolve) => {
      let requests = [];
      let projectBuildStatuses = [];
      $(build["results"]).each(function (key, build_result) {
        var newStatusRequest = $.ajax({
          method: "GET",
          url: build_result["status"],
          success: function (build_status_result) {
            projectBuildStatuses.push(build_status_result);
          },
        });
        requests.push(newStatusRequest);
      });
      Promise.all(requests).then(function (results) {
        resolve(projectBuildStatuses);
      });
    });
  };
  const fetchData = async () => {
    $("#progress_list").removeClass("d-none");
    $("#progress_list").addClass("d-block");
    // Deferred Project Requests
    for (i = 0; i < project_urls.length; ++i) {
      updateProgressBar(project_progress_chunk);
      let projectData = await $.ajax({
        method: "GET",
        url: project_urls[i]["project_url"],
      });
      projects.push(projectData);
      // Deferred Build Requests
      let buildData = await $.ajax({
        method: "GET",
        url: project_urls[i]["project_url"] + "builds/?limit=10",
      });
      builds.push(buildData);
      let projectBuildStatuses = await createDeferredBuildStatusRequests(
        buildData
      );
      console.log("Request results:");
      aggregateResults(projectData, buildData, projectBuildStatuses);
    }
    localStorage.setItem(
      "all_projects_data",
      JSON.stringify(all_projects_data)
    );
    localStorage.setItem("lastFetchTime", new Date());
    $("#progress_list").addClass("d-none");
    $("#progress_list").removeClass("d-block");
  };
  // Check to see if the test_results container is present
  $(document).ready(function () {
    if ($("#refresh_btn").length > 0) {
      $("#refresh_btn").click(function () {
        $("#project_list").empty();
        $("#modals_container").empty();
        $("#project_load_progress").attr("aria-valuenow", 0);
        $("#project_load_progress").attr("style", "width: 0%");
        fetchData();
      });
    }
    if ($("#test_results").length > 0) {
      let currentBuildData = localStorage.getItem("all_projects_data");
      let lastFetchTime = localStorage.getItem("lastFetchTime");
      console.log("Current build data:", currentBuildData !== null);
      console.log("Last fetch time: ", lastFetchTime);
      // Check to see if there is currently build data save in local storage.
      if (currentBuildData !== null) {
        // Check that lastFetchTime is not null.
        if (lastFetchTime !== null) {
          // If there is build data, check to see if lastFetchTime was > 5 minutes ago.
          let pastDate = new Date(lastFetchTime);
          let dateDiff = new Date(new Date().getTime() - 300000);
          console.log("Past date: ", pastDate);
          console.log("Date diff: ", dateDiff);
          if (pastDate < dateDiff) {
            fetchData();
          } else {
            let allProjectsData = JSON.parse(currentBuildData);
            for (let i = 0; i < allProjectsData.length; i++) {
              presentData(allProjectsData[i]);
            }
            localStorage.setItem(
              "all_projects_data",
              JSON.stringify(all_projects_data)
            );
            localStorage.setItem("lastFetchTime", new Date());
            $("#progress_list").addClass("d-none");
            $("#progress_list").removeClass("d-block");
          }
        } else {
          fetchData();
        }
      } else {
        fetchData();
      }
    }
  });
});
