---
layout: flow
title: Tests
permalink: /tests/
jumbotron:
    title: Tests in LKFT
    title-class: display-3 font-weight-bold text-left
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
- controllers
- crypto
- cve
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
- tracing

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

### LKFT Integration with Perf testing on Arm64

#### Build Kernel with extra debug configurations

Except the default config, we need to enable extra Linux kernel
configurations for building kernel image.  Below is some missed
configurations that we can enable with the commands:

```shell
  export ARCH=arm64
  export CROSS_COMPILE=aarch64-linux-gnu-
  cd $LINUX_SRC
  make defconfig
  ./scripts/config -e CONFIG_BPF_SYSCALL
  ./scripts/config -e CONFIG_BPF_JIT_ALWAYS_ON
  ./scripts/config -e CONFIG_TRACEPOINTS
  ./scripts/config -e CONFIG_KPROBES
  ./scripts/config -e CONFIG_UPROBES
  ./scripts/config -e CONFIG_KRETPROBES
  ./scripts/config -e CONFIG_PROC_KCORE
  ./scripts/config -e CONFIG_NOP_TRACER
  ./scripts/config -e CONFIG_TRACER_MAX_TRACE
  ./scripts/config -e CONFIG_RING_BUFFER
  ./scripts/config -e CONFIG_EVENT_TRACING
  ./scripts/config -e CONFIG_CONTEXT_SWITCH_TRACER
  ./scripts/config -e CONFIG_TRACING
  ./scripts/config -e CONFIG_GENERIC_TRACER
  ./scripts/config -e CONFIG_FTRACE
  ./scripts/config -e CONFIG_FUNCTION_TRACER
  ./scripts/config -e CONFIG_FUNCTION_GRAPH_TRACER
  ./scripts/config -e CONFIG_SCHED_TRACER
  ./scripts/config -e CONFIG_FTRACE_SYSCALLS
  ./scripts/config -e CONFIG_TRACER_SNAPSHOT
  ./scripts/config -e CONFIG_KPROBE_EVENTS
  ./scripts/config -e CONFIG_UPROBE_EVENTS
  ./scripts/config -e CONFIG_BPF_EVENTS
  ./scripts/config -e CONFIG_DYNAMIC_EVENTS
  ./scripts/config -e CONFIG_PROBE_EVENTS
  ./scripts/config -e CONFIG_DYNAMIC_FTRACE
  yes "" | make oldconfig
```

#### Installation dependency libs on target board

```shell
# apt-get install flex bison libelf-dev libaudit-dev libdw-dev libunwind* python-dev binutils-dev \
  libnuma-dev libbfd-dev libelf1 libperl-dev libslang2 libslang2-dev libunwind8 libunwind8-dev \
  binutils-multiarch-dev elfutils libiberty-dev libncurses5-dev
# apt-get install clang-7 llvm-7
```

#### The kernel source code path

The kernel source code is fatal for 'perf probe' related testings;
usually, on Arm platform the perf probe related testings fail due to
perf tool cannot find the kernel source code path.

On x86 platform, it's quite common to use the same PC to build kernel
and perf tool, and then can directly run the perf test on it.  Thus it's
smooth for x86 to allow debugging tools to find the source code path
based on vmlinux's dwarf info.

On the other hand, Arm platforms, usually, we cross compile kernel image
on our PC or laptop and then run the testing on Arm boards.  So the
issue is perf tool uses the vmlinux's dwarf info to find the source code
path but the path is PC's path but not the kernel source code path on
the target board.

To fix this issue, the simple method is to create the same path on Arm
platforms with the PC; for example, on the PC side, build the kernel
in the folder "/home/leoy/Work/opensource/linux-cs-dev"; then on Arm
board, should create the path "/home/leoy/Work/opensource/linux-cs-dev"
and mount NFS on this folder.  Thus the Arm board can use the same code
base and this allows perf tool to easily to find kernel source code.

#### Exporting perf python lib

Perf provides python's .so, which needs to tell python the right path to
export 'perf' class.  This can be finished with below command:

```shell
export PYTHONPATH=/home/leoy/Work/opensource/linux-cs-dev/tools/perf/python/
```

#### Perf config file

We need to configure clang related options thus allows perf tool to have
knowledge for clang and llvm:

```shell
# cd $LINUX_SRC
# ./tools/perf/perf config llvm.clang-path=clang-7
# ./tools/perf/perf config llvm.kbuild-dir=/home/leoy/Work/opensource/linux-cs-dev/
# ./tools/perf/perf config llvm.clang-opt="-g"
```

#### Testing result

```shell
# cd $LINUX_SRC
# ./tools/perf/perf test
```

| Test ID | Test Case                                              | DB410c   | Juno     | Comment                        |
|:--------|:-------------------------------------------------------|:---------|:---------|:-------------------------------|
| 1       | vmlinux symtab matches kallsyms                        | Ok       | Ok       | vmlinux must be placed in the current folder. |
| 2       | Detect openat syscall event                            | Ok       | Ok       |                                |
| 3       | Detect openat syscall event on all cpus                | Ok       | Ok       |                                |
| 4       | Read samples using the mmap interface                  | Ok       | Ok       |                                |
| 5       | Test data source output                                | Ok       | Ok       |                                |
| 6       | Parse event definition strings                         | Ok       | Ok       |                                |
| 7       | Simple expression parser                               | Ok       | Ok       |                                |
| 8       | PERF_RECORD_* events & perf_sample fields              | Ok       | Ok       |                                |
| 9       | Parse perf pmu format                                  | Ok       | Ok       |                                |
| 10      | DSO data read                                          | Ok       | Ok       |                                |
| 11      | DSO data cache                                         | Ok       | Ok       |                                |
| 12      | DSO data reopen                                        | Ok       | Ok       |                                |
| 13      | Roundtrip evsel->name                                  | Ok       | Ok       |                                |
| 14      | Parse sched tracepoints fields                         | Ok       | Ok       |                                |
| 15      | syscalls:sys_enter_openat event fields                 | Ok       | Ok       |                                |
| 16      | Setup struct perf_event_attr                           | Ok       | Ok       |                                |
| 17      | Match and link multiple hists                          | Ok       | Ok       |                                |
| 18      | 'import perf' in python                                | Ok       | Ok       |                                |
| 19      | Breakpoint overflow signal handler                     | Disabled | Disabled | The signal handler doesn't work well with breakpoint on Arm/Arm64. |
| 20      | Breakpoint overflow sampling                           | Disabled | Disabled | The signal handler doesn't work well with breakpoint on Arm/Arm64. |
| 21      | Breakpoint accounting                                  | Ok       | Ok       |                                |
| 22.1    | Read Only Watchpoint                                   | Ok       | Ok       |                                |
| 22.2    | Write Only Watchpoint                                  | Ok       | Ok       |                                |
| 22.3    | Read / Write Watchpoint                                | Ok       | Ok       |                                |
| 22.4    | Modify Watchpoint                                      | Ok       | Ok       |                                |
| 23      | Number of exit events of a simple workload             | Ok       | FAILED   | Any big.LITTLE system cannot migrate events between different CPU variants, thus this case will fail on big.LITTLE system. This case can pass on SMP platform (e.g. DB410c). |
| 24      | Software clock events period values                    | Ok       | Ok       |                                |
| 25      | Object code reading                                    | Ok       | Ok       |                                |
| 26      | Sample parsing                                         | Ok       | Ok       |                                |
| 27      | Use a dummy software event to keep tracking            | Ok       | Ok       |                                |
| 28      | Parse with no sample_id_all bit set                    | Ok       | Ok       |                                |
| 29      | Filter hist entries                                    | Ok       | Ok       |                                |
| 30      | Lookup mmap thread                                     | Ok       | Ok       |                                |
| 31      | Share thread mg                                        | Ok       | Ok       |                                |
| 32      | Sort output of hist entries                            | Ok       | Ok       |                                |
| 33      | Cumulate child hist entries                            | Ok       | Ok       |                                |
| 34      | Track with sched_switch                                | Ok       | Ok       |                                |
| 35      | Filter fds with revents mask in a fdarray              | Ok       | Ok       |                                |
| 36      | Add fd to a fdarray, making it autogrow                | Ok       | Ok       |                                |
| 37      | kmod_path__parse                                       | Ok       | Ok       |                                |
| 38      | Thread map                                             | Ok       | Ok       |                                |
| 39.1    | Basic BPF llvm compile                                 | Ok       | Ok       |                                |
| 39.2    | kbuild searching                                       | Ok       | Ok       |                                |
| 39.3    | Compile source for BPF prologue generation             | Ok       | Ok       |                                |
| 39.4    | Compile source for BPF relocation                      | Ok       | Ok       |                                |
| 40      | Session topology                                       | Ok       | Ok       |                                |
| 41.1    | Basic BPF filtering                                    | Ok       | Ok       |                                |
| 41.2    | BPF pinning                                            | Ok       | Ok       |                                |
| 41.3    | BPF prologue generation                                | Ok       | Ok       |                                |
| 41.4    | BPF relocation checker                                 | Ok       | Ok       |                                |
| 42      | Synthesize thread map                                  | Ok       | Ok       |                                |
| 43      | Remove thread map                                      | Ok       | Ok       |                                |
| 44      | Synthesize cpu map                                     | Ok       | Ok       |                                |
| 45      | Synthesize stat config                                 | Ok       | Ok       |                                |
| 46      | Synthesize stat                                        | Ok       | Ok       |                                |
| 47      | Synthesize stat round                                  | Ok       | Ok       |                                |
| 48      | Synthesize attr update                                 | Ok       | Ok       |                                |
| 49      | Event times                                            | Ok       | Ok       |                                |
| 50      | Read backward ring buffer                              | Ok       | Ok       |                                |
| 51      | Print cpu map                                          | Ok       | Ok       |                                |
| 52      | Probe SDT events                                       | Ok       | Ok       |                                |
| 53      | is_printable_array                                     | Ok       | Ok       |                                |
| 54      | Print bitmap                                           | Ok       | Ok       |                                |
| 55      | perf hooks                                             | Ok       | Ok       |                                |
| 56      | builtin clang support                                  | Skip     | Skip     |                                |
| 57      | unit_number__scnprintf                                 | Ok       | Ok       |                                |
| 58      | mem2node                                               | Ok       | Ok       |                                |
| 59      | time utils                                             | Ok       | Ok       |                                |
| 60      | map_groups__merge_in                                   | Ok       | Ok       |                                |
| 61      | DWARF unwind                                           | Ok       | Ok       |                                |
| 62      | probe libc's inet_pton & backtrace it with ping        | Skip   | Skip     |                                |
| 63      | Check open filename arg using perf trace + vfs_getname | Ok       | Ok       | If fail, the failure is caused by cannot find kernel source code. |
| 64      | Zstd perf.data compression/decompression               | Skip     | Skip     |                                |
| 65      | Add vfs_getname probe to get syscall args filenames    | Ok       | Ok       | If fail, the failure is caused by cannot find kernel source code. |
| 66      | Use vfs_getname probe to get syscall args filenames    | Ok       | Ok       | If fail, the failure is caused by cannot find kernel source code. |


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

## KUnit
Separate test runs of
[KUnit](https://www.kernel.org/doc/html/latest/dev-tools/kunit/index.html) are
enabled for Qemu on x86 (64/32 bits) and arm (64/32 bits).


# Future Test Suites

We are continuously evaluating test suites for use in LKFT. We are guided by
feedback from kernel engineers and the community at large. If you would like to
see a particular test or test suite added to LKFT, please [contact us](mailto:
lkft@linaro.org).
