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

- 4.4
- 4.9
- 4.14
- 4.19
- 5.4
- 5.10

In addition to LTS branches, the latest stable branches are also tested.

## Android-common

The following branches from
[hikey-linaro](https://android.googlesource.com/kernel/hikey-linaro/) tree are
tested:

- android-hikey-linaro-4.4
- android-hikey-linaro-4.9
- android-hikey-linaro-4.14
- android-hikey-linaro-4.19

## mainline

Although maintaining good continuous integration on LTS branches is most
important, mainline is important to track in order to catch issues before they
hit a stable branch.

## linux-next

Likewise, linux-next is run daily in order to catch issues as soon as possible.
