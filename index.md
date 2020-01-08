---
layout: page
description: >
    Linaro's Linux Kernel Functional Testing (LKFT) project validates Linux
    stable kernels on arm, arm64, and x86_64 consumer hardware.
keywords:  Linux testing, Arm, Linux building, dragonboard, x15, juno, hikey, aarch64, arm32
header:
    sections:
      - format: title
        title_content:
            size: h1
            text: Linux Kernel Functional Testing
            class: display-3 font-weight-bold text-left
      - format: text
        text_content:
            text: >
                The mission of LKFT is to improve the quality of the Linux
                kernel by performing functional testing on Arm hardware. Our
                focus is on LTS, stable, and upstream development branches. If
                you have any requests, feedback, or suggestions for how we can
                better serve you, please reach out to us at lkft@linaro.org or
                on freenode at #linaro-lkft.
---
## Test Results
<div id="modals_container"></div>
<div class="row" id="test_results">
<div class="col-12">
<ul class="list-group mt-3 mb-4" id="project_list">
<li class="list-group-item d-flex flex-column justify-content-sm-around align-items-center ">
 <div class="d-block w-100">
<div class="progress">
<div id="project_load_progress" class="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
</div>
</div>
</div>
</li>
</ul>
</div>
</div>

## LKFT 2.0 Build Status
Our second generation build and continuous integration uses <a
href="https://gitlab.com/Linaro/lkft/kernel-runs/pipelines">GitLab
pipelines</a> and <a href="https://gitlab.com/Linaro/tuxbuild">TuxBuild</a>.
<table class="table table-responsive table-boards">
<thead><tr>
{% for branch in site.data.builds.gitlab-builds %}
    <th>{{branch.branch}}</th>
{% endfor %}
</tr></thead>
<tbody>
{% for branch in site.data.builds.gitlab-builds %}
    <td>
<a href="https://gitlab.com/Linaro/lkft/kernel-runs/pipelines/{{branch.gitlab-branch}}/latest"><img src="https://gitlab.com/Linaro/lkft/kernel-runs/badges/{{branch.gitlab-branch}}/pipeline.svg"></a>
    </td>
{% endfor %}
</tbody>
</table>


## LKFT Build Status
The LKFT build uses OpenEmbedded to build a userspace image, along with the
kernel, for each board and branch combination under test.
<table class="table table-responsive table-boards">
<thead><tr>
<th>Board</th>
{% for branch in site.data.builds.branches %}
    <th>{{branch}}</th>
{% endfor %}
</tr></thead>
<tbody>
{% for board in site.data.builds.boards %}
    <tr>
        <td>
            <strong>{{board.name}}</strong>
            <br />
            {{board.architecture}}
        </td>
        {% for branch in site.data.builds.branches %}
            <td>
                {% if board.branches contains branch %}
                    {% if board.branches[branch] contains "jenkins_build_url" and
                          board.branches[branch] contains "jenkins_badge_url" %}
                        <a href="{{board.branches[branch].jenkins_build_url}}">
                            <img src="{{board.branches[branch].jenkins_badge_url}}"
                            alt="Jenkins Build Badge" />
                        </a>
                    {% endif %}
                {% else %}
                    Not supported
                {% endif %}
            </td>
        {% endfor %}
    </tr>
{% endfor %}
</tbody>
</table>


{% if site.data.settings.clang_enabled %}
## Kernel Build Status (using Clang)
In an effort to support building the Linux kernel using <a
href="https://clang.llvm.org/">Clang</a>, the following table provides the
current status of a kernel build on several branches, Clang distributions, and
architectures.
<table class="table-responsive table-boards">
<thead>
  <tr>
    <th>Branch</th>
    {% for toolchain in site.data.clang-builds.toolchains %}
      {% for architecture in site.data.clang-builds.architectures %}
        <th>{{toolchain}} - {{architecture}}</th>
      {% endfor %}
    {% endfor %}
  </tr>
</thead>
<tbody>
{% for branch in site.data.clang-builds.branches %}
  <tr>
    <td>
      <strong>{{branch.name}}</strong>
    </td>
    {% for toolchain in site.data.clang-builds.toolchains %}
      {% for architecture in site.data.clang-builds.architectures %}
        <td>
          <a href="{{branch[toolchain][architecture].jenkins_build_url}}">
            <img src="{{branch[toolchain][architecture].jenkins_badge_url}}"
            alt="Jenkins Build Badge" />
          </a>
        </td>
      {% endfor %}
    {% endfor %}
  </tr>
{% endfor %}
</tbody>
</table>
{% endif %}
