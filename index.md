---
layout: home
---

## Test Results
<table class="table-responsive table-boards">
<thead><tr>
{% for branch in site.data.tests.tests.branches %}
    <th>{{branch.name}}</th>
{% endfor %}
</tr></thead>
<tbody>
<tr>
{% for branch in site.data.tests.tests.branches %}
    <td>
    <a href="{{branch.squad_url}}">
        <img src="squad_favicon.png" alt="Squad Logo" />
    </a>
    </td>
{% endfor %}
</tr>
</tbody>
</table>


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
                    N/A
                {% endif %}
            </td>
        {% endfor %}
    </tr>
{% endfor %}
</tbody>
</table>

