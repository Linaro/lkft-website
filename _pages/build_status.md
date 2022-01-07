---
layout: flow
title: Build Status
description: >
  Build status information.
permalink: /build-status/
jumbotron:
  title: Build Status
  title-class: display-3 font-weight-bold text-left
---

## LKFT 2.0 Build Status

Our second generation build and continuous integration uses GitLab pipelines
and <a href="https://gitlab.com/Linaro/tuxbuild">TuxBuild</a>.

<table class="table table-responsive table-boards">
<thead><tr>
{% for branch in site.data.builds.gitlab-builds %}
    <th>{{branch.branch}}</th>
{% endfor %}
</tr></thead>
<tbody>
{% for branch in site.data.builds.gitlab-builds %}
    <td>
<a href="{{branch.gitlab-pipeline-url}}"><img src="{{branch.gitlab-badge-url}}"></a>
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
