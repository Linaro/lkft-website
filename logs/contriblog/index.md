---
layout: container-breadcrumb
title: Contribution Log
permalink: /logs/contriblog/
---

# Linux Kernel Functional Testing (LKFT) Contribution Log

This log is a high level overview of all contributions LKFT has propitiated to the
Linux Kernel project and to the testing suites projects.

## 2018
<!---

    Concept:
        This is designed to be a human curated and human readable log of the
        contributions that the KV team and the LKFT project make upstream.

        Human judgement is expected in terms of which events are listed and
        which may be excluded. Some events occur too regularly, or are too
        minor to list here.

    General Format:
        - <date>: <person> <verb> to <destination> re: <bug>

    Where:
        date: date the action occurred
        person: email address of person taking an action
        verb: description of action taken. May be "reported", "sent patch",
              followed by a *very brief* description of the context. This
              should link to a mailing list post. If it's a mailing list
              that lore supports, please use a lore link.
        re: Link to bug reference, if available
-->

### December

- 2018-12-12: Bug [4043 - LTP: 4.4: mlock203.c:63: FAIL: Locking one memory
  again increased VmLck](https://bugs.linaro.org/show_bug.cgi?id=4043) closed
  as resolved:fixed
- 2018-12-11: Anders Roxell and Arnd Bergmann sent patches
  [1](https://lore.kernel.org/lkml/20181211103733.22284-1-anders.roxell@linaro.org)
  [2](https://lore.kernel.org/lkml/20181211103616.22137-1-anders.roxell@linaro.org)
  [3](https://lore.kernel.org/lkml/20181211133453.2835077-1-arnd@arndb.de) to
  fix allmodconfig
- 2018-12-11: Bug [3953 - LTP: open posix mmap_11-4 :
  ...](https://bugs.linaro.org/show_bug.cgi?id=3953) closed as resolved:fixed
- 2018-12-10: Rafael Tinoco [sent a
  patch](https://lore.kernel.org/lkml/20181210142105.6750-1-rafael.tinoco@linaro.org)
  to fix mm/zmalloc for 32-bit PAE re: [bug
  3765](https://bugs.linaro.org/show_bug.cgi?id=3765)
- 2018-12-10: Bug [4053 - Hikey - Mainline v4.14 - Unbalanced enable for IRQ 44
  DMESG WARNING](https://bugs.linaro.org/show_bug.cgi?id=4053) closed as
  resolved:fixed
- 2018-12-10: Bug [3782 - arm32: kselftest proc selftests:
  proc-self-map-files-002 failed](https://bugs.linaro.org/show_bug.cgi?id=3782)
  closed as resolved:fixed
- 2018-12-10: Bug [3908 - kselftest: proc-self-map-files-001 failed on all
  devices](https://bugs.linaro.org/show_bug.cgi?id=3908) closed as
  resolved:fixed
- 2018-12-05: Anders Roxell sent patches
  [1](https://lore.kernel.org/lkml/20181204194044.9506-1-anders.roxell@linaro.org)
  [2](https://lore.kernel.org/lkml/20181206143011.23719-1-anders.roxell@linaro.org)
  to fix allmodconfig
- 2018-12-04: Naresh Kamboju [reported a build failure on
  -next](https://lore.kernel.org/lkml/CA+G9fYsvJkW5_hruVYzLX3g9_5scj9nnL240rOMQ+DSz70dqqQ@mail.gmail.com),
  and Anders Roxell [sent a patch to fix
  it](https://github.com/linaro/lkft-website)
- 2018-12-04: Rafael Tinoco [reported a
  panic](https://lore.kernel.org/lkml/716b46ef-03da-9656-92fd-3823f31f5ce6@linaro.org)
  on 4.19 related to TCP tail loss probe re: [bug
  4127](https://bugs.linaro.org/show_bug.cgi?id=4127), resulting in a [patch to
  tcp](https://www.spinics.net/lists/netdev/msg538027.html)
- 2018-12-03: Rafael Tinoco [sent a backport
  request](https://lore.kernel.org/lkml/20181203133107.4002-1-rafael.tinoco@linaro.org)
  for a hikey unbalanced IRQ problem re: [bug
  4053](https://bugs.linaro.org/show_bug.cgi?id=4053)

### November

- 2018-11-30: Anders Roxell sent patches
  [1](https://lore.kernel.org/lkml/20181128081239.18317-1-anders.roxell@linaro.org)
  [2](https://lore.kernel.org/lkml/20181128081334.18408-1-anders.roxell@linaro.org)
  [3](https://lore.kernel.org/lkml/20181130145622.26334-1-anders.roxell@linaro.org)
  [4](https://lore.kernel.org/lkml/20181130150859.27366-1-anders.roxell@linaro.org)
  [5](https://lore.kernel.org/lkml/20181130150935.27493-1-anders.roxell@linaro.org)
  [6](https://lore.kernel.org/lkml/20181130160508.28230-1-anders.roxell@linaro.org)
  to fix allmodconfig
- 2018-11-29: Rafel Tinoco [reported a
  problem](https://lore.kernel.org/lkml/a304b6f1-11db-543b-2cb3-372f34dc7697@linaro.org)
  with kselftest timers rtctest re: [bug
  3402](https://bugs.linaro.org/show_bug.cgi?id=3402)
- 2018-11-27: Naresh Kamboju [sent a kselftest
  patch](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2018-November/002853.html)
  to add a config frag for FTRACE re: [bug
  3920](https://bugs.linaro.org/show_bug.cgi?id=3920)
- 2018-11-26: Rafael Tinoco [sent a patch to fix thread_info->syscall on
  arm](https://lore.kernel.org/lkml/20181126225335.10477-1-rafael.tinoco@linaro.org/)
  re: [bug 3783](https://bugs.linaro.org/show_bug.cgi?id=3783)
- 2018-11-26: Dan Rue [sent a kselftest patch
  set](https://lore.kernel.org/lkml/20181127031218.24419-1-dan.rue@linaro.org/)
  to fix fw_Firmware.sh re: [bug
  3503](https://bugs.linaro.org/show_bug.cgi?id=3503)
- 2018-11-21: Naresh Kamboju [reported kselftest get_cgroup_id_user
  issue](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2018-November/002831.html)
  re: [bug 3920](https://bugs.linaro.org/show_bug.cgi?id=3920)
- 2018-11-21: Naresh Kamboju [reported a libbpf
  problem](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2018-November/002832.html)
  in kselftest bpf tests
- 2018-11-20: Naresh Kamboju [reported a problem with kselftest
  udpgro.sh](https://www.spinics.net/lists/netdev/msg534015.html) re: [bug
  4078](https://bugs.linaro.org/show_bug.cgi?id=4078)
- 2018-11-14: Mark Brown sent an [RFC PATCH to improve
  kselftest/fsgsbase](https://lore.kernel.org/lkml/20181114195043.8021-1-broonie@kernel.org/)
  re: [bug 3596](https://bugs.linaro.org/show_bug.cgi?id=3596)
- 2018-11-14: Rafael Tinoco reported [NFS DEBUG_LOCKS_WARN_ON has been
  fixed](https://lore.kernel.org/lkml/c351b04b-e83e-d090-a6b2-b8b08a688872@linaro.org/)
  re: [bug 3731](https://bugs.linaro.org/show_bug.cgi?id=3731#c15)
- 2018-11-13: Naresh Kamboju [reported an issue in bpf, resulting in
  patch](https://www.spinics.net/lists/netdev/msg533569.html) re: [bug
  4009](https://bugs.linaro.org/show_bug.cgi?id=4009)
- 2018-11-13: Thierry Escande patched [an issue in
  test_printf](https://lore.kernel.org/lkml/20180613171840.29827-1-thierry.escande@linaro.org/)
  re: [bug 3775](https://bugs.linaro.org/show_bug.cgi?id=3775)
- 2018-11-09: Rafael Tinoco sent patch [selftests: membarrier: re-organize
  test](https://lore.kernel.org/lkml/20181109154911.24464-1-rafael.tinoco@linaro.org/)
- 2018-11-09: Rafael Tinoco sent patch [proc: fix and merge proc-self-map-file
  tests](https://lore.kernel.org/lkml/20181109113036.21512-1-rafael.tinoco@linaro.org/)
  re: [bug 3782](https://bugs.linaro.org/show_bug.cgi?id=3782)
- 2018-11-09: Rafael Tinoco sent LTP patch [syscalls/bind03: fix ret code
  behavior for v4.4
  backport](http://lists.linux.it/pipermail/ltp/2018-November/009894.html) re:
  [bug 4042](https://bugs.linaro.org/show_bug.cgi?id=4042)
- 2018-11-08: Rafael Tinoco [requested a backport for
  mlock](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-November/069243.html)
  re: [bug 4043](https://bugs.linaro.org/show_bug.cgi?id=4043)
- 2018-11-07: Rafael Tinoco [reported a regression on next found by
  fsync01](https://www.spinics.net/lists/linux-next/msg45114.html) re: [bug
  4056](https://bugs.linaro.org/show_bug.cgi?id=4056)
- 2018-11-02: Anders Roxell sent patch [scripts/kconfig/merge_config: don't
  redefine 'y' to
  'm'](https://lore.kernel.org/lkml/20181102114119.23859-1-anders.roxell@linaro.org/)

### October

- 2018-10-30: Anders Roxell sent patch [arm64: kprobe: make page to RO mode
  when allocate
  it](https://lore.kernel.org/lkml/20181030113850.31150-1-anders.roxell@linaro.org/)
- 2018-10-30: Anders Roxell [patched two problems related to
  CONFIG_DEBUG_TEST_DRIVER_REMOVE](https://lore.kernel.org/lkml/20181030113545.30999-1-anders.roxell@linaro.org/)
- 2018-10-29: Arnd Bergmann [reported problem in LTP
  bind03](https://lore.kernel.org/lkml/20180831111436.GA23780@dell5510/T/#m170eaa199fc14995b2bae1aae150f5c758ebbb18)
  re: [bug 4042](https://bugs.linaro.org/show_bug.cgi?id=4042)
- 2018-10-25: John Stultz sent patch [wlcore: Fixup "Add support for optional
  wakeirq"](https://lore.kernel.org/lkml/1540490241-32021-1-git-send-email-john.stultz@linaro.org/)
  re: [bug 3960](https://bugs.linaro.org/show_bug.cgi?id=3960)
- 2018-10-25: Naresh Kamboju [reported kselftest test_verifier
  failure](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2018-October/002541.html)
  re: [bug 4038](https://bugs.linaro.org/show_bug.cgi?id=4038)
- 2018-10-25: Naresh Kamboju [reported ltp syscall keyctl05
  failure](http://lists.linux.it/pipermail/ltp/2018-October/009571.html). As a
  result, Jan Stancek [patched
  ltp](http://lists.linux.it/pipermail/ltp/2018-October/009752.html)
- 2018-10-24: Rafael Tinoco [sent a patch to fix zram on
  arm32](https://lore.kernel.org/lkml/20181025012745.20884-1-rafael.tinoco@linaro.org/)
  re: [bug 3765](https://bugs.linaro.org/show_bug.cgi?id=3765)
- 2018-10-18: Rafael Tinoco [reported arm kvm inconsistent lock state
  warnings](https://www.spinics.net/lists/netdev/msg529635.html) re: [bug
  4027](https://bugs.linaro.org/show_bug.cgi?id=4027)
- 2018-10-18: Rafael Tinoco [reported kselftest proc-self-syscall
  failure](http://lists.infradead.org/pipermail/linux-arm-kernel/2018-October/607895.html)
  re: [bug 3783](https://bugs.linaro.org/show_bug.cgi?id=3783)
- 2018-10-15: Anders Roxell [sent a patch to fix mm
  warning](https://lore.kernel.org/lkml/20181015111600.5479-1-anders.roxell@linaro.org/)
- 2018-10-08: Naresh Kamboju [reported kselftest test_kmod.sh
  hang](https://lists.linaro.org/pipermail/linux-kselftest-mirror/2018-October/002378.html)
  resulting in a [patch by Willem de
  Bruijn](http://patchwork.ozlabs.org/patch/942590/) re: [bug
  3925](https://bugs.linaro.org/show_bug.cgi?id=3925)
