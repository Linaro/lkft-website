---
layout: container-breadcrumb
title: Tests
permalink: /tests/
---

# Strategy and Workflow

Due to the amount of data that LKFT produces, test results need to be clear and
actionable. This means there is a very low tolerance for any tests which
sometimes pass and sometimes fail. Further, any test that is expected to fail
is skipped so that results are always in a 'all green' state. This makes
triaging new regressions straightforward.

This strategy has a few consequences. Skipping inconsistent tests could hide
actual problems. For this reason, whenever a test is added to a skiplist, a bug
is opened in
[bugzilla](https://bugs.linaro.org/buglist.cgi?bug_status=__open__&list_id=17922&order=Importance&product=Kernel%20Functional%20Testing&query_format=specific).
All bugzilla bugs are regularly reviewed, investigated, and reported internally
or upstream.

All regressions are triaged and reported internally and/or upstream. Typically
the test will also be added to the skiplist until it is fixed.

LKFT maintains a staging environment that runs without a skiplist, so that it
is possible to know when a regression is fixed, at which point it is then
removed from the skiplist.

# Test Suites

## Linux Test Project (LTP)

The following test sets are run in
[LTP](https://github.com/linux-test-project/ltp):

- cap_bounds
- containers
- fcntl-locktests
- filecaps
- fs_bind
- fs_perms_simple
- fsx
- fs
- hugetlb
- io
- ipc
- math
- nptl
- pty
- sched
- securebits
- syscalls
- timers

The version of LTP used is the most recent release, plus backports that fix
regressions, if any.

## Linux Kernel Selftests

Linux Kernel Selftests, or
[kselftests](https://www.kernel.org/doc/Documentation/kselftest.txt), are tests
that are included in the linux kernel tree under tools/testing/selftests/.

The version used depends on the kernel version under test:
- linux-next uses selftest included in linux-next
- mainline uses selftest included in mainline
- Latest stable uses selftest included in latest stable
- *All other LTS branches also use the version from latest stable*

Running a mismatched kselftest version does create false positives from time to
time, but it is the best balance between a supported and up to date set of
tests and an older kernel.

## Libhugetlbfs

[libhugetlbfs](https://github.com/libhugetlbfs/libhugetlbfs) is run using the
latest version in its next branch (02df38e93e as of 2018.03.09).
