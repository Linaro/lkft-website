---
layout: page
title: Tests
permalink: /tests/
---

# Strategy and Workflow

Due to the amount of data that LKFT produces, test results need to be clear and
actionable. This means there is a very low tolerance for any tests which
sometimes pass and sometimes fail. Further, any test that is expected to fail
is marked as a known issue in [qa-reports](https://qa-reports.linaro.org/lkft/)
so that results are always in a 'all green' state. This makes triaging new
regressions straightforward.

Whenever a test becomes a known issue, a bug is opened in
[bugzilla](https://bugs.linaro.org/buglist.cgi?bug_status=__open__&list_id=17922&order=Importance&product=Kernel%20Functional%20Testing&query_format=specific).
All bugzilla bugs are regularly reviewed, investigated, and reported internally
or upstream.

All regressions are triaged and reported internally and/or upstream. Typically
the test will also be added as a known issue until it is fixed.

# Running Test Suites

## Linux Test Project (LTP)

The following test sets are run in
[LTP](https://github.com/linux-test-project/ltp):

- cap_bounds
- commands
- containers
- dio
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
- mm
- nptl
- pty
- sched
- securebits
- syscalls
- timers

The version of LTP used is the most recent release, plus backports that fix
regressions, if any.

### LTP Issues

LTP issues are tracked in several places.

Bugs are tracked in bugzilla and can be seen at
[bugs.linaro.org](https://bugs.linaro.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=CONFIRMED&bug_status=IN_PROGRESS&component=Linux%20Test%20Project%20%28LTP%29&list_id=20398&product=Kernel%20Functional%20Testing&query_format=advanced&resolution=---)
(query for product 'Kernel Functional Testing' and component 'Linux Test
Project (LTP)').

A skipfile is maintained which contains a list of tests that are not suitable
to run for a variety of reasons. LKFT's LTP skipfile can be found in
[test-definitions
repository](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/ltp/skipfile-lkft.yaml).

Finally, known issues are used to annotate failures in
[qa-reports](https://qa-reports.linaro.org/lkft/), so that known failures show
up as 'xfail' (expected fail), instead of a failure. The known issues that LKFT
uses in LTP can be found at
[qa-reports-known-issues](https://github.com/Linaro/qa-reports-known-issues/blob/master/ltp-production.yaml).


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

### Kselftest Issues

Kselftest issues are tracked in several places.

Bugs are tracked in bugzilla and can be seen at
[bugs.linaro.org](https://bugs.linaro.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=CONFIRMED&bug_status=IN_PROGRESS&component=kselftest&list_id=20399&product=Kernel%20Functional%20Testing&query_format=advanced&resolution=---)
(query for product 'Kernel Functional Testing' and component 'kselftest').

A skipfile is maintained which contains a list of tests that are not suitable to run for a variety of reasons. LKFT's Kselftest skipfile can be found in [test-definitions repository](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/kselftest/skipfile-lkft.yaml).

Finally, known issues are used to annotate failures in
[qa-reports](https://qa-reports.linaro.org/lkft/), so that known failures show
up as 'xfail' (expected fail), instead of a failure. The known issues that LKFT
uses in kselftest can be found at
[qa-reports-known-issues](https://github.com/Linaro/qa-reports-known-issues/blob/master/kselftests-production.yaml).


## Libhugetlbfs

[libhugetlbfs](https://github.com/libhugetlbfs/libhugetlbfs) is run using the
latest released version.

## Perf

Linux [perf](https://perf.wiki.kernel.org/index.php/Main_Page) is built and
tested using a basic set of tests implemented at
[test-definitions](https://github.com/Linaro/test-definitions/tree/master/automated/linux/perf).

## Video4Linux (v4l2)

The [v4l2-compliance tests](https://linuxtv.org/wiki/index.php/V4L_Test_Suite)
are run using a virtual driver (VIVI)

## KVM Unit Tests

[KVM-unit-tests](https://www.linux-kvm.org/page/KVM-unit-tests) are run to
verify basic functionality of KVM.

## S Suite

[S I/O Benchmark Suite](https://github.com/Algodev-github/S) are enabled for a
subset of systems to verify I/O performance.

For the moment, this test makes it possible to execute the following
two benchmarks with the suite:
- responsiveness, by measuring start-up times of real applications
  under real background workloads;
- throughput with processes doing filesystem or raw I/O in parallel
  (figure of merit measured by many other suites too).




# Future Test Suites

We are continuously evaluating test suites for use in LKFT. We are guided by
feedback from kernel engineers and the community at large. If you would like to
see a particular test or test suite added to LKFT, please [contact us](mailto:
lkft@linaro.org).

Tests under development include [benchmarks for storage
I/O](https://github.com/algodev-github/S), [KVM unit
test](https://git.kernel.org/pub/scm/virt/kvm/kvm-unit-tests.git) and [v4l2
validation test suite](https://linuxtv.org/wiki/index.php/V4L_Test_Suite).

Other tests or test repositories that we are interested in include
[LKP](https://github.com/intel/lkp-tests),
[mmtests](https://github.com/gormanm/mmtests) and
[XFStests](http://xfs.org/index.php/Main_Page).

