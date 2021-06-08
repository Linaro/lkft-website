---
layout: flow
title: "LKFT 101: An Introduction"
permalink: /lkft-101/
description: An introduction to LKFT
jumbotron:
    title: "LKFT 101: An Introduction"
    title-class: display-3 font-weight-bold text-left
    description: >
        The [Linux Kernel Functional Test (LKFT) project](https://lkft.linaro.org/) is
        comprised of a diverse and distributed set of composable tools and projects
        that come together to make a cohesive Linux kernel testing service.
---

## LKFT Git Repositories

- [gitlab.com/linaro/lkft/kernel-trigger](https://gitlab.com/Linaro/lkft/kernel-trigger)
  - kernel-trigger monitors upstream kernel repositories for changes, which
    then triggers builds in
    [kernel-runs](https://gitlab.com/Linaro/lkft/kernel-runs).
<br />
<br />
- [gitlab.com/linaro/lkft/kernel-runs](https://gitlab.com/Linaro/lkft/kernel-runs)
  - kernel-runs is where the [LKFT
    pipelines](https://gitlab.com/Linaro/lkft/kernel-runs/pipelines) live. This
    repository is maintained automatically by
    [kernel-trigger](https://gitlab.com/Linaro/lkft/kernel-trigger).
<br />
<br />
- [gitlab.com/linaro/lkft/ci-scripts](https://gitlab.com/Linaro/lkft/ci-scripts)
  - ci-scripts provides the implementation for the LKFT build and LAVA job
    generation pipelines.
<br />
<br />
- [github.com/linaro/lkft-tools](https://github.com/Linaro/lkft-tools)
  - The lkft-tools repository contains various scripts, utilities, and
    documentation that LKFT maintainers use regularly for report generation,
    maintenance tasks, etc.
<br />
<br />
- [github.com/linaro/lkft-website](https://github.com/Linaro/lkft-website)
  - The lkft-website repo is the source code behind
    [lkft.linaro.org](https://lkft.linaro.org/). When changes are merged to the
    master branch of lkft-website, they are automatically deployed to
    lkft.linaro.org.
<br />
<br />
- [github.com/linaro/test-definitions](https://github.com/Linaro/test-definitions/)
  - test-definitions contains wrappers for each of the test suites that LKFT
    runs. It is used with LAVA, but does not require LAVA to use. Adding a test
    to test-definitions is the first step in adding it to LKFT.
<br />
<br />
- [github.com/linaro/lava-test-plans](https://github.com/Linaro/lava-test-plans)
  - lava-test-plans contains the LAVA job templates used by LKFT and others.
<br />
<br />
- [github.com/linaro/kir](https://github.com/Linaro/kir)
  - The Kernel Image Repacking (KIR) project is used to construct root
    filesystems during a LAVA job's runtime, so that it does not need to be
    constructed by a separate build process. This allows us to pass any kernel
    to any LKFT job, with no intermediary build step.
<br />
<br />
- [github.com/linaro/qa-reports-known-issues](https://github.com/Linaro/qa-reports-known-issues/)
  - qa-reports-known-issues manages 'known issues' in qa-reports. Known issues
    are tests that we expect to fail always or intermittently, so that they do
    not pollute our results. Changes that are merged to this repository are
    automatically applied to [qa-reports](https://qa-reports.linaro.org/).
<br />
<br />
- [gitlab.com/linaro/tuxbuild](https://gitlab.com/Linaro/tuxbuild)
  - TuxBuild is the command-line client for Linaro's Linux kernel build service
    that LKFT uses to build its kernels.
<br />
<br />
- [git.linaro.org/ci/jobs/configs](https://git.linaro.org/ci/job/configs.git)
  - Shared repository containing LKFT 1.0 build and LAVA job generation
    implementation. In LKFT 2.0, this has been split up into its individual
    components (see: lava-test-plans, kir, kernel-trigger, ci-scripts repos).
<br />
<br />
- [github.com/linaro/squad](https://github.com/Linaro/squad/)
  - LKFT is a user of SQUAD, which is hosted at
    [qa-reports.linaro.org](https://qa-reports.linaro.org/lkft/).
<br />
<br />
- [lavasoftware.org](https://www.lavasoftware.org/)
  - LKFT relies heavily on the Linaro Automated Validation Architecture (LAVA)
    to automate kernel testing on hardware.

## LKFT Services

- [qa-reports.linaro.org](https://qa-reports.linaro.org/)
  - qa-reports hosts LKFT's test results, and provides a UI, an API, and basic
    report generation. LKFT primarily uses the following groups:
    - [/lkft](https://qa-reports.linaro.org/lkft/) hosts production results.
    - [/android-lkft](https://qa-reports.linaro.org/android-lkft/) hosts
      production results for Android trees and kernels.
    - [/staging-lkft](https://qa-reports.linaro.org/staging-lkft/) contains
      results used while staging changes in LKFT.
<br />
<br />
- [lkft.validation.linaro.org](https://lkft.validation.linaro.org/)
  - LKFT's production LAVA service.
<br />
<br />
- [lavalab.nxp.com](https://lavalab.nxp.com/)
  - NXP's lab, which participates in LKFT.
<br />
<br />
- [lkft-staging.validation.linaro.org](https://lkft-staging.validation.linaro.org/)
  - The LKFT lab's staging instance.
<br />
<br />
- [tuxbuild](https://gitlab.com/Linaro/tuxbuild)
  - TuxBuild is a Linaro service which LKFT uses to build its kernels.
<br />
<br />
- [gitlab.com](https://gitlab.com/)
  - GitLab provides the basic continuous integration and continuous deployment
    (CI/CD) orchestration that is used by LKFT.
