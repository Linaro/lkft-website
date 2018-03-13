---
layout: container-breadcrumb
title: Branches
permalink: /branches/
---

LKFT tests the following branches. The canonical source for Linux kernel branch
information is [kernel.org](https://www.kernel.org/) and
[kernel.org/category/releases.html](https://www.kernel.org/category/releases.html).

## Longterm

The following longterm supported (LTS) branches are tested:
- 4.4
- 4.9
- 4.14

## Android-common

The following branches from [hikey-linaro](https://android.googlesource.com/kernel/hikey-linaro/) tree are tested:
- android-hikey-linaro-4.4
- android-hikey-linaro-4.9
- android-hikey-linaro-4.14

## Stable

In addition to LTS branches, the latest stable branch is also tested.
- 4.15

## mainline

Although maintaining good continuous integration on LTS branches is most
important, mainline is important to track in order to catch issues before they
hit a stable branch.

## linux-next

Likewise, linux-next is run daily in order to catch issues as soon as possible.
