---
layout: container-breadcrumb
title: Contribution Log
permalink: /logs/contriblog/
---

# Linux Kernel Functional Testing (LKFT) Contrib Log

This log is a high level overview of all contributions LKFT has propitiated to the
Linux Kernel project and to the testing suites projects.

## 2018

### Kernel Bugs

- #### Mainline and/or Next

  - \* [BUG #3731](https://bugs.linaro.org/show_bug.cgi?id=3731) - (fs/nfs/unlink) NFS unlink semaphore async release sync issue
  - \* [BUG #3765](https://bugs.linaro.org/show_bug.cgi?id=3765) - (drivers/block/zram) zsmaloc issue using HIGHMEM on arm32
  - \^ [BUG #3903](https://bugs.linaro.org/show_bug.cgi?id=3903) - (drivers/mfd/hi655x-pmic) MFD PMIC hi655x register area bigger than it should

- #### Stable

  - \+ [BUG #3762](https://bugs.linaro.org/show_bug.cgi?id=3762) - (drivers/net/ethernet/micrel) fix crash: KSZ9031 missing probe callback
  - \+ [BUG #3907](https://bugs.linaro.org/show_bug.cgi?id=3907) - (include/linux/fs) LTP vma03 test detected missing MAX_LFS_FILESIZE fix

### Testsuite: LTP

### Testsuite: Kselftests

* \+ [BUG #3769](https://bugs.linaro.org/show_bug.cgi?id=3769) - (gpio/gpio-mockup-chardev) broken test using errrno on success

### Kernel Regressions (Won't Fix)

* \- [BUG #3303](https://bugs.linaro.org/show_bug.cgi?id=3303) - (fs/notify/fanotify) LTP fanotify07 test broken on 4.4 and 4.9 (backport made)
* \- [BUG #3881](https://bugs.linaro.org/show_bug.cgi?id=3881) - (fs/overlayfs) LTP inotify08 tests broken on 4.4, 4.9 and 4.14
* \- [BUG #3931](https://bugs.linaro.org/show_bug.cgi?id=3931) - (fs/notify/inotify) LTP inotify07 test broken on 4.4 and 4.9

```
* on-going work
! fix merge requested
^ fix pulled by maintainer
+ fixed
- won't fix
``` 
