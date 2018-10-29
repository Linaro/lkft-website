---
layout: container-breadcrumb
title: Contribution Log Deux
permalink: /logs/contriblog2/
---

# Linux Kernel Functional Testing (LKFT) Contrib Log

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

    Format:
        - <date>: <person> <verb> to <destination> re: <bug>

    Where:
        date: date the action occurred
        person: email address of person taking an action
        verb: description of action taken. May be "reported", "sent patch",
              followed by a *very brief* description of the context. This
              should link to a mailing list post. If it's a mailing list
              that lore supports, please use a lore link.
        re: Link to bug reference
-->

- 2018-10-29: Arnd Bergmann [reported problem in LTP
  bind03](https://lore.kernel.org/lkml/20180831111436.GA23780@dell5510/T/#m170eaa199fc14995b2bae1aae150f5c758ebbb18)
  re: [bug 4042](https://bugs.linaro.org/show_bug.cgi?id=4042)
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
