// Stores the projects
$.when($.getJSON("/assets/json/tests.json")).done(function(json) {
  var project_urls = json["tests"]["branches"];
  // Stores the builds data collected
  var build_data = [],
    current_progress_val = 0,
    i,
    projects = [],
    builds = [],
    build_progress_chunk = 30 / project_urls.length,
    project_progress_chunk = 30 / project_urls.length,
    status_request_chunk = 30 / (project_urls.length * 10),
    aggregate_results_chunk = 10 / project_urls.length,
    build_progress = 0,
    project_progress = 0,
    status_request_progress = 0,
    build_statuses = [],
    deferred_project_request,
    newStatusRequest,
    deferred_build_request,
    current_total_progress = 0,
    deferred_requests = [],
    deferred_status_requests = [],
    progress_division = 100 / project_urls.length,
    build_data = [];

  function aggregateResults(projects, builds, build_statuses) {
    var aggregate_results_chunk = 10 / project_urls.length;
    $(projects).each(function(key, project) {
      // Get the original project details
      var original_project;
      $(project_urls).each(function(key, original_project_data) {
        if (original_project_data["project_url"] == project["url"]) {
          original_project = project_urls[key];
        }
      });
      // Setup the project_details object
      var project_details = {
        url: original_project["squad_url"],
        builds: "",
        project: project,
        name: project["slug"],
        project_url: original_project["project_url"]
      };
      // Loop over build results and collect test result details
      $(builds).each(function(key, build) {
        $(build["results"]).each(function(results_key, build_data) {
          // Loop over collected test result data and associate corresponding build
          found = false;
          $(build_statuses).each(function(status_key, build_status_obj) {
            if (build_status_obj["build"] === build_data["url"]) {
              found = true;
              var build_test_details = {
                pass: build_status_obj["tests_pass"],
                fail: build_status_obj["tests_fail"],
                skip: build_status_obj["tests_skip"]
              };
              builds[key]["results"][results_key][
                "test_data"
              ] = build_test_details;
            }
          });
        });
        if (build["next"].indexOf(project_details["project_url"]) >= 0) {
          project_details["builds"] = build;
        }
      });
      build_data.push(project_details);
      updateProgressBar(aggregate_results_chunk);
    });
    presentData(build_data);
  }
  function getTimeDelta(datetimeObj) {
    return Math.abs(Math.round((new Date() - datetimeObj) / 1000 / 60 / 60));
  }

  // Create a HTML list element for a given set of test data.
  function createProjectList(build_data) {
    var elements = [];
    $(build_data).each(function(key, project) {
      var project_details = project["project"];
      var latest_build = project["builds"]["results"][0];
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
        '<li class="list-group-item d-flex flex-column flex-sm-row justify-content-sm-between align-items-center ">';
      listItem +=
        "<div class='flex-even ml-1 mr-1'><span>" +
        project_details["slug"] +
        "</span></div>";
      listItem +=
        "<div class='flex-even ml-1 mr-1 text-center'><span>" +
        testing +
        "</span></div>";
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-pill badge-light" data-toggle="tooltip" data-placement="top" title="' +
        new Date(latest_build["created_at"]).toLocaleDateString("en-US") +
        " " +
        new Date(latest_build["created_at"]).toLocaleTimeString("en-US") +
        '">' +
        time_diff +
        ' hours ago <span class="fa fa-clock"></span></span></div>';
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-success badge-pill">' +
        latest_build["test_data"]["pass"] +
        "<span> passed</span></span></div>";
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-danger badge-pill">' +
        latest_build["test_data"]["fail"] +
        "<span> failed</span></span></div>";
      listItem +=
        '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-large badge-info badge-pill">' +
        latest_build["test_data"]["skip"] +
        "<span> skipped</span></span></div>";

      listItem +=
        '<div class="flex-even text-center"><a href="#" data-toggle="modal" data-target="#' +
        project_details["slug"] +
        '-modal">View Builds</a></div>';
      listItem += "</li>";
      elements.push(listItem);
    });
    return elements;
  }
  function createProjectModals(build_data) {
    var elements = [];
    $(build_data).each(function(key, project) {
      console.log(project);
      var project_details = project["project"];
      var builds = project["builds"]["results"];

      var modal =
        '<div class="modal  fade" id="' +
        project_details["slug"] +
        '-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' +
        project_details["slug"] +
        '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>' +
        project_details["description"] +
        '</p><ul class="list-group" id="build_list">';

      $(builds).each(function(key, build) {
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
          '<div class="flex-even flex-grow-2 ml-1 mr-1 ">' +
          build["version"] +
          "</div>";
        listItem += '<div class="flex-even ml-1 mr-1 ">' + testing + "</div>";

        listItem +=
          '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-pill badge-light" title="' +
          new Date(build["created_at"]).toLocaleDateString("en-US") +
          " " +
          new Date(build["created_at"]).toLocaleTimeString("en-US") +
          '">' +
          time_diff +
          ' hours ago <span class="fa fa-clock"></span></span></div>';
        listItem +=
          '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-success badge-pill">' +
          build["test_data"]["pass"] +
          "</span></div>";
        listItem +=
          '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-danger badge-pill">' +
          build["test_data"]["fail"] +
          "</span></div>";
        listItem +=
          '<div class="flex-even text-center"><span class="mt-1 mb-1 badge badge-info badge-pill">' +
          build["test_data"]["skip"] +
          "</span></div>";
        listItem += "</li>";

        modal += listItem;
      });

      modal +=
        '</ul><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><a href="' +
        project["url"] +
        '">View all Builds</a></div></div></div></div>';
      elements.push(modal);
    });
    return elements;
  }
  function presentData(build_data) {
    var build_list = createProjectList(build_data);
    $("#project_list").html(build_list);
    var modal_list = createProjectModals(build_data);
    $("#modals_container").html(modal_list);
  }
  function updateProgressBar(chunk) {
    current_total_progress += chunk * 10;
    $("#project_load_progress").attr("aria-valuenow", current_total_progress);
    $("#project_load_progress").attr(
      "style",
      "width: " + current_total_progress / 10 + "%;"
    );
  }
  // Check to see if the test_results container is present
  $(document).ready(function() {
    if ($("#test_results").length > 0) {
      function createDeferredBuildStatusRequests(build) {
        $(build["results"]).each(function(key, build_result) {
          var newStatusRequest = $.ajax({
            method: "GET",
            url: build_result["status"],
            success: function(build_status_result) {
              build_statuses.push(build_status_result);
              updateProgressBar(status_request_chunk);
            }
          });
          deferred_status_requests.push(newStatusRequest);
        });
      }
      // Create ajax request objects for each project
      for (i = 0; i < project_urls.length; ++i) {
        // Deferred Project Requests
        deferred_project_request = $.ajax({
          method: "GET",
          url: project_urls[i]["project_url"],
          success: function(project) {
            projects.push(project);
            updateProgressBar(project_progress_chunk);
          }
        });
        deferred_requests.push(deferred_project_request);
        // Deferred Build Requests
        deferred_build_request = $.ajax({
          method: "GET",
          url: project_urls[i]["project_url"] + "builds/?limit=10",
          success: function(build) {
            createDeferredBuildStatusRequests(build);
            builds.push(build);
            updateProgressBar(build_progress_chunk);
          }
        });
        deferred_requests.push(deferred_build_request);
      }
      // Once all ajax requests have completed
      $.when.apply($, deferred_requests).then(function() {
        $.when.apply($, deferred_status_requests).then(function() {
          aggregateResults(projects, builds, build_statuses);
        });
      });
    }
  });
});
