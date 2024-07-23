---
layout: flow
permalink: /
js-package: home
title: Linaro’s Linux Kernel Functional Test framework
description: >
  Linaro's Linux Kernel Functional Testing (LKFT) project validates Linux
  stable kernels on arm, arm64, and x86_64 consumer hardware.
keywords: Linux testing, Arm, Linux building, dragonboard, x15, juno, hikey, aarch64, arm32, tuxsuite, tuxtest, tuxmake
jumbotron:
  title: Linux Kernel Functional Testing
  title-class: display-3 font-weight-bold text-left
  class: h-auto
  description: >
    The mission of LKFT is to improve the quality of the Linux kernel by performing functional testing on Arm hardware. 
    We focus on LTS, stable, and upstream development branches with the Arm ecosystem as our first-class citizen. 
    We also improve the quality of the Android Common kernel and its branches. If you have any requests,
    feedback, or suggestions for how we can better serve you, please contact us at lkft@linaro.org.
---

## Test Results

<div id="modals_container"></div>
<div class="row" id="test_results">
    <div class="col-12">
        <ul class="list-group mt-3 mb-4" id="progress_list">
            <li class="list-group-item d-flex flex-column justify-content-sm-around align-items-center">
                <div class="d-block w-100">
                    <div class="progress">
                        <div id="project_load_progress" class="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list-group mt-3 mb-4" id="project_list"></ul>
    </div>
    <div class="col-12">
        <button id="refresh_btn" class="btn btn-primary">Refresh data</button>
    </div>
</div>
