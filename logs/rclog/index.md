---
layout: container-breadcrumb
title: Stable Release Candidate Log
permalink: /logs/rclog/
---

Log of status and events while doing stable tree release candidate testing in
Linaro's Linux Kernel Functional Test (LKFT) project.


<!--
    How to use this file

    Each RC's results are reported and aggregated here. As our goal is to
    deliver results in less than 48 hours, we add a specifically formatted
    comment to each block which is then parsed by ./getsla.py to aggregate SLA
    counts.

    The 4 supported SLA values are:
      - >48h (missed sla)
      - <48h (less than 48h, but more than 24)
      - <24h (less than 24h, but more than 8)
      - <8h

    The second value is the number of releases that met the given SLA.

    Then, to get current SLA metrics, run ./getsla.py from the same directory
    as index.md.
-->

### 2018-08-03
#### 4.9.117, 4.14.60, 4.17.12
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-07-27
#### 4.4.145, 4.9.116, 4.14.59, 4.17.11
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-23
#### 4.4.144, 4.9.115, 4.14.58, 4.17.10
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-20
#### 4.4.143, 4.9.114, 4.14.57, 4.17.9
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-18
#### 4.4.142
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2018-07-17
#### 4.17.8
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-07-16
#### 4.4.141, 4.9.113, 4.14.56, 4.17.7
<!-- sla <24 1 -->
<!-- sla <48 3 -->
- Reported regression in creat and open syscalls in 4.17.7 within 24h
  - Regression in behavior was intentional, due to backport of
    [0fa3ecd87848](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0fa3ecd87848)
to fix CVE-2018-13405.  [LTP patch
proposed](http://lists.linux.it/pipermail/ltp/2018-July/008724.html).
- All remaining branches subsequently reported in <48h

### 2018-07-10
#### 4.4.140, 4.9.112, 4.14.55, 4.17.6
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-06
#### 4.14.54, 4.17.5
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-07-01
#### 4.4.139, 4.9.111, 4.14.53, 4.17.4
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-06-24
#### 4.14.52, 4.16.18, 4.17.3
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Noted Kselftest test case mov_ss_trap_64 is causing kernel panic on
  qemu-system-x86_64 and PASS on real x86_64 hardware. [Bug
  3916](https://bugs.linaro.org/show_bug.cgi?id=3916). This is due to
  the version of the host kernel on the host running QEMU jobs.
- Last 4.16

#### 4.9.110
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-06-18
#### 4.14.51, 4.16.17
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-06-14
#### 4.4.138
<!-- sla <24 1 -->
- Reported no regressions in <24h
- Noted that MAX_LFS_FILESIZE regression introduced in 4.4.137 has been fixed

#### 4.9.109, 4.14.50, 4.16.16, 4.17.2
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-06-12
#### 4.4.137
<!-- sla <48 1 -->
- Reported in <48h
- Regression in MAX_LFS_FILESIZE macro detected by ltp/cve-2011-2496
  - Fixed with backport of 0cc3b0ec23ce ("Clarify (and fix) MAX_LFS_FILESIZE
    macros") in 4.4.138

#### 4.9.108
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-06-09
#### 4.14.49, 4.16.15
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.17.1
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2018-06-05
#### 4.4.136, 4.9.107
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-06-04
#### 4.9.106, 4.14.48, 4.16.14
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-30
#### 4.9.105, 4.14.46, 4.14.47
- Quick releases that did not go through the normal RC process
- [4.9.105 announcement](https://lwn.net/Articles/756056/)
- [4.14.46 announcement](https://lwn.net/Articles/755966/)
- [4.14.47 announcement](https://lwn.net/Articles/756055/)

### 2018-05-28
#### 4.4.134, 4.9.104, 4.14.45, 4.16.13
<!-- sla <24 4 -->
- Reported no regressions in <24h
- There was a regression noted in ltp/cve-2017-5669, which was expected. See
  [the issue at Github](https://github.com/linux-test-project/ltp/issues/319)
  for details.

### 2018-05-24
#### 4.4.133, 4.9.103, 4.14.44, 4.16.12
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-05-21
#### 4.9.102, 4.14.43, 4.16.11
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-18
#### 4.9.101, 4.14.42, 4.16.10
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-14
#### 4.4.132, 4.9.100, 4.14.41, 4.16.9
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-05-08
#### 4.9.99, 4.14.40, 4.16.8
<!-- sla <24 3 -->
- Reported no regressions in <24h


### 2018-04-30
#### 4.4.131, 4.9.98, 4.14.39, 4.16.7
<!-- sla <24 4 -->
- Reported no regressions in <24h


### 2018-04-27
#### 4.4.130, 4.9.97, 4.14.38, 4.16.6
<!-- sla <8 4 -->
- Reported no regressions in <8h


### 2018-04-25
#### 4.14.37
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.16.5
<!-- sla <24 1 -->
- Reported no 4.16.5 regressions in <24h
- Noted regression in 4.16.4 on db410c


### 2018-04-22
- Rare Sunday morning push (first this year), complicated by Monday qa-reports
  scheduled outage.

#### 4.4.129
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.9.96
<!-- sla <24 1 -->
- Reported arm64 boot regression in <24h
- Manual bisection results reported in <48h
- Reported no regressions in <48h on RC3

#### 4.14.36
<!-- sla <48 1 -->
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3

#### 4.16.4
<!-- sla <48 1 -->
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3


### 2018-04-17
- All RC builds failed due to change in -next. Fixed via
  [https://github.com/96boards/meta-rpb/pull/166](https://github.com/96boards/meta-rpb/pull/166)

#### 4.9.95
<!-- sla <48 1 -->
- First response in <48h.
- A network driver issue from 4.9.94 was discovered on x15 in the network
  stack, reported at
  [https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html)

#### 4.14.35, 4.15.18, 4.16.3
<!-- sla <24 3 -->
- Reported no regressions in <24h


### 2018-04-11
#### 4.4.128, 4.9.94
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-04-10
#### 4.14.34, 4.15.17, 4.16.2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-04-06
#### 4.4.127, 4.14.33, 4.16.1
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.9.93
<!-- sla <24 1 -->
- Reported in <24h
- db410c issue detected - [bug 3723;
  cpu-on-off-test](https://bugs.linaro.org/show_bug.cgi?id=3723)

#### 4.15.16
<!-- sla <8 1 -->
- Reported no regressions in <8h


### 2018-03-29
#### 4.4.126, 4.14.32
<!-- sla <24 2 -->
- Report no regressions in <24h
#### 4.9.92, 4.15.15
<!-- sla <48 2 -->
- Report no regressions in <48h


### 2018-03-27
- Initially, all branches had a build error due to /COPYING changing on -next,
  and the checksum of said file being hard coded in our OE recipe.

#### 4.4.125
<!-- sla <48 1 -->
- Build failure on arm64 reported in <8h
- Results in <48h

#### 4.9.91
<!-- sla <24 1 -->
- Results in <24h

#### 4.14.31
<!-- sla <48 1 -->
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h

#### 4.15.14
<!-- sla <48 1 -->
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h


### 2018-03-23
#### 4.4.124, 4.9.90
<!-- sla <8 2 -->
- Results in <8h

#### 4.14.30, 4.15.13
<!-- sla <8 2 -->
- Build failed on arm32
- First response in <8h
- No results for hikey or db410c due to offline devices and limited support
  availability due to Connect (arm64 was still covered by juno devices)


### 2018-03-20
#### 4.4.123
<!-- sla <8 1 -->
- Failed to build on arm32
- First response in <8h

#### 4.9.89
<!-- sla <8 1 -->
- Failed to build on arm32,arm64.. 6 patches causing build issues
- First response in <8h

#### 4.14.29
<!-- sla <24 1 -->
- Results in <24h

#### 4.15.12
<!-- sla <24 1 -->
- Results in <24h


### 2018-03-16
#### 4.4.122, 4.9.88
<!-- sla <24 2 -->
- Results in <24h

#### 4.14.28
<!-- sla <8 1 -->
- rc1: arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h

#### 4.15.11
<!-- sla <8 1 -->
- arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h


### 2018-03-13
- -rc1 contained arm64 boot breakage reported (as previously seen on next and
  mainline per
  [https://bugs.linaro.org/show_bug.cgi?id=3676](https://bugs.linaro.org/show_bug.cgi?id=3676)).
  Greg pulled the patch and released an -rc2.

#### 4.14.27, 4.15.10
<!-- sla <48 2 -->
- Results in <48h


### 2018-03-10
- Results longer than 48h due to weekend availability. RC was pushed at Sat Mar
  10 00:18:21 UTC 2018.
- Many infrastructure failures were mentioned with regard to the reported boot
  failures that we experience on db410c.
- Some incorrect results were sent and then corrected, due to manual nature of
  reporting.
- 4.4 x86_64 not reported due to build infrastructure error

#### 4.4.121, 4.9.87, 4.14.26, 4.15.9
<!-- sla >48 4 -->
- Results in <72h


### 2018-03-07
- Self induced snapshots.linaro.org outage during build

#### 4.14.25, 4.15.8
<!-- sla <24 2 -->
Results in <24h


### 2018-03-02
- git.yoctoproject.org outage caused build delays in 4.4 and 4.14
- db410c and qemu x86_64 reported for first time

#### 4.4.120, 4.9.86, 4.14.24
<!-- sla <24 3 -->
- Results in <24h


### 2018-02-26
- Builds took ~2h. Needed to rebuild 4.9/hikey for 'sstate_create_package'
  infrastructure failure.

#### 4.4.119, 4.9.85, 4.14.23, 4.15.7
<!-- sla <24 4 -->
- Results in <24h


### 2018-02-23
- All builds worked first time
- Limited availability (Friday evening push (UTC))
  - multiple pushes

#### 4.4.118, 4.14.22
<!-- sla <8 2 -->
- Results in <8h

#### 4.9.84, 4.15.6
<!-- sla <48 2 -->
- Results in <48h


### 2018-02-21
- Issue with lkft.v.l.o being slow. Squad had issues submitting jobs and
  fetching results.

#### 4.4.117, 4.14.21
<!-- sla <8 2 -->
- Results in <8h

#### 4.9.83
<!-- sla <8 1 -->
- Results in <8h
- arm64 legitimate build failure, reported, patch dropped

#### 4.15.5
<!-- sla <8 1 -->
- Results in <8h
- infrastructure build failure on x15 "Function failed: sstate_create_package"


### 2018-02-15
- Builds took 7 hours. 13 total failures.
  - Some hikey failures caused by breakage introduced same day
  - Others caused by long standing git-related issues in jenkins environment
    - Fixed (hopefully permanently) with 'bitbake -c cleanall edk2-hikey'

#### 4.4.116, 4.14.20
<!-- sla <24 2 -->
- Results in <24h

#### 4.9.82
<!-- sla <24 1 -->
- Results in <24h
- Noted getrusage04 intermittent failure
  [https://bugs.linaro.org/show_bug.cgi?id=3507](https://bugs.linaro.org/show_bug.cgi?id=3507)

#### 4.15.4
<!-- sla <24 1 -->
- Results in <24h
- Noted netns_netlink failure on x15. See
  [https://bugs.linaro.org/show_bug.cgi?id=3484](https://bugs.linaro.org/show_bug.cgi?id=3484)


### 2018-02-09
- LTP was upgraded from 20170929 to 20180118, causing a falsely reported
  regression in fanotify06.

#### 4.9.81, 4.14.19, 4.15.3
<!-- sla <8 3 -->
- Results in <8h


### 2018-02-05
#### 4.14.18, 4.15.2
<!-- sla <8 2 -->
- Results in <8h


### 2018-02-02
#### 4.4.115, 4.9.80, 4.14.17
<!-- sla <8 3 -->
- Results in <8h

#### 4.15.1
<!-- sla <24 1 -->
- Results in <24h
- This was the first 4.15 RC.
- Report showed false failures because the new branch was not yet baselined,
  and also because we were running 4.14 kselftest against 4.15.
- 4.15 build was submitted for review but not yet merged when the branch was
  released, causing last minute Friday afternoon scramble (thanks Daniel).
  Should have had it building and baselined ahead of time.


### 2018-01-29
#### 4.4.114, 4.9.79, 4.14.16
<!-- sla <24 3 -->
- Results in <24h


### 2018-01-22
#### 4.4.113
<!-- sla <24 1 -->
- Results in <24h
- Issue with 'main.sh' kselftest on hikey due to missing patch on linaro's
  hikey tree. Resolved.

#### 4.9.78, 4.14.15
<!-- sla <24 2 -->
- Results in <24h


### 2018-01-15
- Greg requested verifying bpf in 4.4 and 4.9 but we did not have a good way to
  do so. Tests aren’t backported. We are looking at getting bcc running on
  hikey, as a means of manual verification.

#### 4.4.112
<!-- sla <24 1 -->
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 5 RCs

#### 4.9.77
<!-- sla <24 1 -->
- Results in <24h
- 6 RCs

#### 4.14.14
<!-- sla <24 1 -->
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 4 RCs

### 2018-01-08
#### 4.4.111
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 4 times

#### 4.9.76
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 5 times

#### 4.14.13
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 3 times


### 2018-01-06
#### 4.14.12
<!-- sla <24 1 -->
- Results in <24h.
- Build failure with x15, requiring manual intervention.


### 2018-01-05
#### 4.4.110
<!-- sla <24 1 -->
- Results in <24h.
- LTP poll02 failure on x15. Not reproducible. Not considered a regression.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3566))

#### 4.9.75
<!-- sla <24 1 -->
- Results in <24h.
- Build failure with x15, requiring manual intervention.

### 2018-01-01
#### 4.4.109, 4.9.74
<!-- sla <8 2 -->
- Results in <8h.

#### 4.14.11
<!-- sla <8 1 -->
- Results in <8h.
- kselftest ldt_gdt_64 failure on x86, due to mismatch between kselftest
  version and kernel version.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3564))
