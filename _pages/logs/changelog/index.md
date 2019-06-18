---
layout: page
title: Changelog
permalink: /logs/changelog/
---

# Linux Kernel Functional Testing (LKFT) Changelog

This log is a high level overview of changes in the LKFT environment and
infrastructure.

## 2019

- 2019-04-18: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.63](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2019-04-18: Archived branches moved back into
  [qa-reports/lkft](https://qa-reports.linaro.org/lkft/)
- 2019-04-09: [kvm-unit-tests](https://www.linux-kvm.org/page/KVM-unit-tests)
  added
- 2019-04-08: [S I/O Benchmark Suite](https://github.com/Algodev-github/S)
  enabled for x86_64
- 2019-03-26: Added Video4Linux
  ([v4l2-compliance](https://linuxtv.org/wiki/index.php/V4L_Test_Suite))
  testing using a virtual driver (VIVI)
- 2019-03-26: Added basic perf testing
- 2019-03-19: OpenEmbedded build moved from Rocko to Sumo
- 2019-03-04: Added v5.0 stable branch
- 2019-02-27: LTP "commands" tests added to LKFT
- 2019-02-22: LTP "dio" tests added to LKFT
- 2019-02-20: Now [sending kselftest
  reports](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2019-February/003456.html)
  for -next to kselftest ML
- 2019-01-28: LTP upgraded to 20190115
- 2019-01-24: LTP "mm" tests added to LKFT (75 tests)
- 2019-01-23: Upgraded kselftest that is run against all stable kernels to
  4.20.
- 2019-01-11: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.60](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2019-01-09: Changed arm32 qemu jobs to use KVM, hosted on a
  [SynQuacer](https://www.96boards.org/product/developerbox/)
- 2019-01-07: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.59](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2019-01-03: Added v4.20 stable branch
- 2019-01-02: Moved LKFT OpenEmbedded build to its own meta layer
  [meta-lkft](https://github.com/linaro/meta-lkft)

## 2018
- 2018-12-18: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.58](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-12-13: Added LTP cpuhotplug tests
- 2018-12-12: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.56](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-12-11: Changed arm64 qemu jobs to use KVM, hosted on a
  [SynQuacer](https://www.96boards.org/product/developerbox/)
- 2018-12-04: Dropped 4.18 per [upstream
  announcement](https://lore.kernel.org/lkml/20181121103111.GA9112@kroah.com/)
- 2018-12-03: Upgrade gcc from Linaro's gcc version 7.1.1 20170707 (Linaro GCC
  7.1-2017.08) to upstream's gcc version 7.3.0, for retpoline support.
- 2018-11-29: Added
  [spectre-meltdown-checker](https://github.com/speed47/spectre-meltdown-checker)
  to LKFT, to provide mitigation status to complement our test results from LTP
  CVE.
- 2018-11-26: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.55](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-11-19: LTP upgraded to [20180926
  release](https://github.com/linux-test-project/ltp/releases).
- 2018-11-05: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.54](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-10-30: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.53](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-10-22: Added 4.19 kernel branch, and upgraded that kselftest that is run
  against all stable kernels to 4.19.
- 2018-10-04: "Fixes" are now listed in all email reports
- 2018-10-02: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.51](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-09-06: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.50](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-09-03: Added i386 support and [announced on
  -stable](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-September/058310.html)
- 2018-09-04: Dropped 4.17 per [upstream
  announcement](https://lwn.net/Articles/763430/)
- 2018-08-14: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.49](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-08-14: Added 4.18, and upgraded the kselftest that is run against all
  stable kernels to 4.18
- 2018-08-14: Added build for 'intel-corei7-64'.
- 2018-08-01: Added fast 'sanity' test for all trees in LKFT. These can be seen
  at [qa-reports.l.o/lkft](https://qa-reports.linaro.org/lkft/), and provide a
  reliable and quick check for each tree. These run in addition to the full set
  of tests for each push to each tree.
- 2018-08-01: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.48](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-07-24: Added Linux build status using Clang to lkft.linaro.org homepage
- 2018-07-19: OpenEmbedded build moved from Morty to Rocko
- 2018-07-16: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.47](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-07-06: [LTP Open
  Posix](https://github.com/linux-test-project/ltp/tree/master/testcases/open_posix_testsuite)
  tests added to LKFT on all branches
- 2018-07-05: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.46](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-07-04: Dropped 4.16 per [upstream
  announcement](https://lwn.net/Articles/758269/)
- 2018-06-13: Upgrade kselftest version that's run against all stable kernels
  to 4.17
- 2018-06-11: Add 4.17 kernel branch
- 2018-06-01: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.45](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-05-30: LTP upgraded to [20180515
  release](https://github.com/linux-test-project/ltp/releases).
- 2018-05-25: [LTP CVE
  tests](https://github.com/linux-test-project/ltp/blob/master/runtest/cve)
  added to LKFT.
- 2018-05-16: QEMU upgraded to 2.12.0, solving performance issues seen on arm64
  and especially arm32.
- 2018-05-14: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.44](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-05-07: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.43](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-04-27: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.42](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-04-25: Dropped 4.15 per [upstream
  announcement](https://lwn.net/Articles/752061/)
- 2018-04-23: [qa-reports](https://qa-reports.linaro.org/) migrated to
  high-availability architecture
- 2018-04-20: Dropped non-RC stable trees from LKFT. The RC branches already
  receive every release, so tracking the stable branch separately was
  duplicative.
- 2018-04-19: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.41](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-04-18: Enabled QEMU arm64 and QEMU arm32 environments
- 2018-04-18: kselftest version that is run against all stable branches updated
  from 4.15 to 4.16.
- 2018-04-06: Enabled 4.16 stable branch
- 2018-03-16: Added additional kselftest runs using vsyscall modes 'native' and
  'none' (the default is mode 'emulate').
- 2018-03-16: [qa-reports](https://qa-reports.linaro.org/) upgraded to [SQUAD
  0.40](https://github.com/Linaro/squad/blob/master/CHANGELOG.md)
- 2018-03-09: Kselftest skipfile is now using a [single YAML
  file](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/kselftest/skipfile-lkft.yaml)
- 2018-03-02: [qa-reports](https://qa-reports.linaro.org/) upgraded to SQUAD
  0.39
- 2018-03-02: QEMU x86_64 added to lkft
- 2018-03-02: DragonBoard 410c added to lkft
- 2018-02-23: [qa-reports](https://qa-reports.linaro.org/) upgraded to SQUAD
  0.38. See https://github.com/Linaro/squad/blob/master/CHANGELOG.md#038
- 2018-02-16: LTP upgraded to 20180118
- 2018-02-16: QEMU jobs in staging for arm64 and x86-64
- 2018-02-09: kselftest version that is run against all stable branches updated
  from 4.14 to 4.15.
- 2018-02-02: [qa-reports](https://qa-reports.linaro.org/) updated to include
  full and per-test logs
- 2018-02-02: LTP skipfile now using a [single YAML
  file](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/ltp/skipfile-lkft.yaml)
- 2018-02-02: 4.15 is now building and testing
- 2018-02-02: Android projects moved to /lkft-android/
- 2018-01-19: Juno boards changed to use SSD drives over SATA, rather than USB
  thumbdrives for temporary storage when running LTP. This should reduce false
  failures on I/O related tests.
- 2018-01-12: [LKFT LAVA](https://lkft.validation.linaro.org/) upgraded to
  Debian Stretch and LAVA 2018.01.
- 2018-01-05: x86 environments now running LTP on local disk instead of NFS.
  All NFS-related skips have been re-enabled.
- 2018-01-05: b2260 board added to staging environment.

