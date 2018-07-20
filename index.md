---
layout: home
---

## Test Results
<div class="container">
<div class="row">
{% for branch in site.data.tests.tests.branches %}
<div class="col-6 col-md-4">
    <a href="{{branch.squad_url}}">
        <img src="{{branch.squad_url}}badge" alt="Squad Logo" />
    </a>
</div>
{% endfor %}
</div>
</div>

## Build Status
<table class="table-responsive table-boards">
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
## Clang Build Status
In an effort to support building the Linux kernel using <a
href="https://clang.llvm.org/">clang</a>, the following table provides the
current status of a kernel build on several branches, clang distributions, and
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
