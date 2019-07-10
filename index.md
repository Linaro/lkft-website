---
layout: page
description: >
    The Seriously Simple Static Starter is a lightweight and optimsied Jekyll theme. This theme allows
    you to get your feet off the ground quickly with a modern Google pagespeed 100 out-of-the-box
    website template for 2019.
keywords:  Jekyll Theme, PageSpeed 100, static website, gulpfile
header:
    # image:
    #   path: /assets/images/marketing.jpg
    #   alt: Background image alt tag
    background-color: "red"
    items:
      - content: Linux Kernel Functional Testing
        type: title
      - content: >
          LKFT is here to serve kernel developers and kernel development. We
          are open for collaboration! If you have any requests, feedback, or
          suggestions for how we can better serve you, please reach out to us
          at lkft@linaro.org or join our weekly meeting every Tuesday.
        type: para
      - content:
          - title: More info
            url: /about/
            class: btn-secondary
        type: buttons
---

## Test Results
<div class="row test_results">
{% for branch in site.data.tests.tests.branches %}
<div class="col-12 col-md-4">
    <a href="{{branch.squad_url}}">
        <img src="{{branch.squad_url}}badge" alt="Squad Logo" />
    </a>
</div>
{% endfor %}
</div>

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
