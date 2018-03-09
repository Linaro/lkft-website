---
layout: container-breadcrumb
title: Changelog
permalink: /changelog/
---

# Linux Kernel Functional Testing (LKFT) Changelog

This log is a high level overview of changes in the LKFT environment and
infrastructure.

## 2018

### Week 10
- Kselftest skipfile is now using a [single YAML file](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/kselftest/skipfile-lkft.yaml)

### Week 9
- [qa-reports](https://qa-reports.linaro.org/) upgraded to squad 0.39
- QEMU x86_64 added to lkft
- DragonBoard 410c added to lkft

### Week 8
- [qa-reports](https://qa-reports.linaro.org/) upgraded to squad 0.38.
  - https://github.com/Linaro/squad/blob/master/CHANGELOG.md#038

### Week 7
- LTP upgraded to 20180118
- QEMU jobs in staging for arm64 and x86-64

### Week 6
- kselftest version that is run against all stable branches updated from 4.14 to 4.15.

### Week 5
- [qa-reports](https://qa-reports.linaro.org/) updated to include full and
  per-test logs
- LTP skipfile now using a [single YAML file](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/ltp/skipfile-lkft.yaml)
- 4.15 is now building and testing
- Android projects moved to /lkft-android/

### Week 4
- No updates.

### Week 3
- Juno boards changed to use SSD drives over SATA, rather than USB thumbdrives
  for temporary storage when running LTP. This should reduce false failures on
  I/O related tests.

### Week 2
- [LKFT LAVA](https://lkft.validation.linaro.org/) upgraded to Debian Stretch
  and LAVA 2018.01.

### Week 1
- x86 environments now running LTP on local disk instead of NFS. All
  NFS-related skips have been re-enabled.
- b2260 board added to staging environment.

