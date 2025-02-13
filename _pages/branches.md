---
layout: flow
title: Branches
permalink: /branches/
jumbotron:
  title: Branches
  title-class: display-3 font-weight-bold text-left
  description: >
    LKFT tests the following branches. The canonical source for
    Linux kernel branch information is at
    [kernel.org](https://www.kernel.org/category/releases.html).
---

## Longterm and Stable

The following longterm stable (LTS) branches are tested:

- 5.4
- 5.10
- 5.15
- 6.1
- 6.6
- 6.12

In addition to LTS branches, the latest stable branches are also tested.

## Common Android Kernel

The same version kernels as above are tested with Android builds as well,
but they are tested with specific branches related to various Android versions.
The following branches from
[Common Android Kernel](https://android.googlesource.com/kernel/common/) tree are
tested:

- android11-5.4
- android11-5.4-lts
- android12-5.4
- android12-5.4-lts
- android12-5.10
- android12-5.10-lts
- android13-5.10
- android13-5.15
- android14-5.15
- android14-5.15-lts
- android14-6.1
- android14-6.1-lts
- android15-6.6
- android16-6.12

## mainline

Although maintaining good continuous integration on LTS branches is most
important, mainline is important to track in order to catch issues before they
hit a stable branch.

## linux-next

Likewise, linux-next is run daily in order to catch issues as soon as possible.
