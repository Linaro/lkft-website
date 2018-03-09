---
layout: home
---

<table class="table-responsive table-boards">
<thead><tr>
<th>Board</th>
{% for branch in site.data.boards.branches %}
    <th>{{branch}}</th>
{% endfor %}
</tr></thead>
<tbody>
{% for board in site.data.boards.boards %}
    <tr>
        <td>
            <strong>{{board.name}}</strong>
            <br />
            {{board.architecture}}
        </td>
        {% for branch in site.data.boards.branches %}
            <td>
                {% if board.branches contains branch %}
                    {% if board.branches[branch] contains "jenkins_build_url" and 
                          board.branches[branch] contains "jenkins_badge_url" %}
                        <a href="{{board.branches[branch].jenkins_build_url}}">
                            <img src="{{board.branches[branch].jenkins_badge_url}}"
                            alt="Jenkins Build Badge" />
                        </a>
                        <br />
                    {% endif %}
                    <a href="{{board.branches[branch].squad_url}}">
                        <img src="squad_favicon.png" alt="Squad Logo" />
                    </a>
                {% else %}
                    N/A
                {% endif %}
            </td>
        {% endfor %}
    </tr>
{% endfor %}
</tbody>
</table>
