---
layout: container-breadcrumb
title: Stable Release Candidate Log
permalink: /logs/rclog/
---

Log of status and events while doing stable tree release candidate testing in
Linaro's Linux Kernel Functional Test (LKFT) project.

### 2018-05-18
#### 4.9.101, 4.14.42, 4.16.10
- Reported no regressions in <24h

### 2018-05-14
#### 4.4.132, 4.9.100, 4.14.41, 4.16.9
- Reported no regressions in <24h

### 2018-05-08
#### 4.9.99, 4.14.40, 4.16.8
- Reported no regressions in <24h


### 2018-04-30
#### 4.4.131, 4.9.98, 4.14.39, 4.16.7
- Reported no regressions in <24h


### 2018-04-27
#### 4.4.130, 4.9.97, 4.14.38, 4.16.6
- Reported no regressions in <8h


### 2018-04-25
#### 4.14.37
- Reported no regressions in <24h

#### 4.16.5
- Reported no 4.16.5 regressions in <24h
- Noted regression in 4.16.4 on db410c


### 2018-04-22
- Rare Sunday morning push (first this year), complicated by Monday qa-reports
  scheduled outage.

#### 4.4.129
- Reported no regressions in <24h

#### 4.9.96
- Reported arm64 boot regression in <24h
- Manual bisection results reported in <48h
- Reported no regressions in <48h on RC3

#### 4.14.36
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3

#### 4.16.4
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3


### 2018-04-17
- All RC builds failed due to change in -next. Fixed via
  [https://github.com/96boards/meta-rpb/pull/166](https://github.com/96boards/meta-rpb/pull/166)

#### 4.9.95
- First response in <48h.
- A network driver issue from 4.9.94 was discovered on x15 in the network
  stack, reported at
  [https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html)

#### 4.14.35, 4.15.18, 4.16.3
- Reported no regressions in <24h


### 2018-04-11
#### 4.4.128, 4.9.94
- Reported no regressions in <24h

### 2018-04-10
#### 4.14.34, 4.15.17, 4.16.2
- Reported no regressions in <24h

### 2018-04-06
#### 4.4.127, 4.14.33, 4.16.1
- Reported no regressions in <24h

#### 4.9.93
- Reported in <24h
- db410c issue detected - [bug 3723;
  cpu-on-off-test](https://bugs.linaro.org/show_bug.cgi?id=3723)

#### 4.15.16
- Reported no regressions in <8h


### 2018-03-29
#### 4.4.126, 4.14.32
- Report no regressions in <24h
#### 4.9.92, 4.15.15
- Report no regressions in <48h


### 2018-03-27
- Initially, all branches had a build error due to /COPYING changing on -next,
  and the checksum of said file being hard coded in our OE recipe.

#### 4.4.125
- Build failure on arm64 reported in <8h
- Results in <48h

#### 4.9.91
- Results in <24h

#### 4.14.31
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h

#### 4.15.14
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h


### 2018-03-23
#### 4.4.124, 4.9.90
- Results in <8h

#### 4.14.30, 4.15.13
- Build failed on arm32
- First response in <8h
- No results for hikey or db410c due to offline devices and limited support
  availability due to Connect (arm64 was still covered by juno devices)


### 2018-03-20
#### 4.4.123
- Failed to build on arm32
- First response in <8h

#### 4.9.89
- Failed to build on arm32,arm64.. 6 patches causing build issues
- First response in <8h

#### 4.14.29
- Results in <24h

#### 4.15.12
- Results in <24h


### 2018-03-16
#### 4.4.122, 4.9.88
- Results in <24h

#### 4.14.28
- rc1: arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h

#### 4.15.11
- arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h


<!--
### SLA
Current SLA
4.4.121-4.4.109 = 13
4.9.87-4.9.74 = 13
4.14.26-4.14.11 = 15
4.15.9-4.15.1 = 9
total = 50
met SLA = 46
SLA=92%
-->


### 2018-03-13
- -rc1 contained arm64 boot breakage reported (as previously seen on next and
  mainline per
  [https://bugs.linaro.org/show_bug.cgi?id=3676](https://bugs.linaro.org/show_bug.cgi?id=3676)).
  Greg pulled the patch and released an -rc2.

#### 4.14.27, 4.15.10
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
- Results in <72h


### 2018-03-07
- Self induced snapshots.linaro.org outage during build

#### 4.14.25, 4.15.8
Results in <24h


### 2018-03-02
- git.yoctoproject.org outage caused build delays in 4.4 and 4.14
- db410c and qemu x86_64 reported for first time

#### 4.4.120, 4.9.86, 4.14.24
- Results in <24h


### 2018-02-26
- Builds took ~2h. Needed to rebuild 4.9/hikey for 'sstate_create_package'
  infrastructure failure.

#### 4.4.119, 4.9.85, 4.14.23, 4.15.7
- Results in <24h


### 2018-02-23
- All builds worked first time
- Limited availability (Friday evening push (UTC))
  - multiple pushes

#### 4.4.118, 4.14.22
- Results in <8h

#### 4.9.84, 4.15.6
- Results in <48h


### 2018-02-21
- Issue with lkft.v.l.o being slow. Squad had issues submitting jobs and
  fetching results.

#### 4.4.117, 4.14.21
- Results in <8h

#### 4.9.83
- Results in <8h
- arm64 legitimate build failure, reported, patch dropped

#### 4.15.5
- Results in <8h
- infrastructure build failure on x15 "Function failed: sstate_create_package"


### 2018-02-15
- Builds took 7 hours. 13 total failures.
  - Some hikey failures caused by breakage introduced same day
  - Others caused by long standing git-related issues in jenkins environment
    - Fixed (hopefully permanently) with 'bitbake -c cleanall edk2-hikey'

#### 4.4.116, 4.14.20
- Results in <24h

#### 4.9.82
- Results in <24h
- Noted getrusage04 intermittent failure
  [https://bugs.linaro.org/show_bug.cgi?id=3507](https://bugs.linaro.org/show_bug.cgi?id=3507)

#### 4.15.4
- Results in <24h
- Noted netns_netlink failure on x15. See
  [https://bugs.linaro.org/show_bug.cgi?id=3484](https://bugs.linaro.org/show_bug.cgi?id=3484)


### 2018-02-09
- LTP was upgraded from 20170929 to 20180118, causing a falsely reported
  regression in fanotify06.

#### 4.9.81, 4.14.19, 4.15.3
- Results in <8h


### 2018-02-05
#### 4.14.18, 4.15.2
- Results in <8h


### 2018-02-02
#### 4.4.115, 4.9.80, 4.14.17
- Results in <8h

#### 4.15.1
- Results in <24h
- This was the first 4.15 RC.
- Report showed false failures because the new branch was not yet baselined,
  and also because we were running 4.14 kselftest against 4.15.
- 4.15 build was submitted for review but not yet merged when the branch was
  released, causing last minute Friday afternoon scramble (thanks Daniel).
  Should have had it building and baselined ahead of time.


### 2018-01-29
#### 4.4.114, 4.9.79, 4.14.16
- Results in <24h


### 2018-01-22
#### 4.4.113
- Results in <24h
- Issue with 'main.sh' kselftest on hikey due to missing patch on linaro's
  hikey tree. Resolved.

#### 4.9.78, 4.14.15
- Results in <24h


### 2018-01-15
- Greg requested verifying bpf in 4.4 and 4.9 but we did not have a good way to
  do so. Tests aren’t backported. We are looking at getting bcc running on
  hikey, as a means of manual verification.

#### 4.4.112
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 5 RCs

#### 4.9.77
- Results in <24h
- 6 RCs

#### 4.14.14
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 4 RCs

### 2018-01-08
#### 4.4.111
- Results in <24h
- Release candidate republished 4 times

#### 4.9.76
- Results in <24h
- Release candidate republished 5 times

#### 4.14.13
- Results in <24h
- Release candidate republished 3 times


### 2018-01-06
#### 4.14.12
- Results in <24h.
- Build failure with x15, requiring manual intervention.


### 2018-01-05
#### 4.4.110
- Results in <24h.
- LTP poll02 failure on x15. Not reproducible. Not considered a regression.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3566))

#### 4.9.75
- Results in <24h.
- Build failure with x15, requiring manual intervention.

### 2018-01-01
#### 4.4.109, 4.9.74
- Results in <8h.

#### 4.14.11
- Results in <8h.
- kselftest ldt_gdt_64 failure on x86, due to mismatch between kselftest
  version and kernel version.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3564))
