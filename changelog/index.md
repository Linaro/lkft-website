---
layout: container-breadcrumb
title: Changelog
permalink: /changelog/
---

# Linux Kernel Functional Testing (LKFT) Changelog

This log is a high level overview of changes in the LKFT environment and
infrastructure.

## 2018

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

