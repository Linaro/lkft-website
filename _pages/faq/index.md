---
layout: page
title: FAQ
permalink: /faq/
---

## What hardware is available in the LKFT hardware pool?

See [boards](/boards/).

## How does Linaro determine which hardware to add to the LKFT hardware pool?

- Devices with upstream kernel support are more likely candidates than those
  that require a separate kernel tree. Devices that require kernel merges and
  conflict resolution whenever there’s an LTS release will not be included
  unless there’s a committed team maintaining the branch.
- Hardware that has upstream kernel support, especially on older LTS branches
  are much more likely to be supported than hardware that is only supported in
  more recent versions of the Linux kernel.
- If LKFT has a vacancy for a certain class of hardware and the proposed board
  can fill that vacancy then it will be considered (architecture, 32-bit,
  64-bit, etc).
- If the hardware can expand coverage then it will be considered over those
  boards which provide redundant coverage.
- The device must not take too long to boot after the image is supplied.
- It must be easy/feasible to image the proposed hardware in automation.
- The device must be easy to automate at scale (for instance each device must
  have a unique serial number).
- The device must be readily available for purchase.
- The device must not collapse under CPU/Memory/IO pressure in a way that can’t
  be worked around in firmware or by throttling.
- There should be an active engineering team behind the firmware on the
  proposed hardware.
- There should be a team available to address board-specific issues that are
  discovered.
- If there are hardware deficiencies with the hardware we must be able to work
  around those deficiencies which preclude automation.

## What kernel trees/branches is LKFT testing?

LKFT supports the Linux kernel branches listed at [branches](/branches/).

## What tests does Linaro execute in LKFT?

See [tests](/tests/).

## Is every test executed against every kernel or user-space?

No, certain tests only apply to certain kernel or user-spaces. For example, CTS
and VTS are only executed on Android Common Kernel trees and AOSP user-space,
but VTS contains LTP test-cases, and LKFT executes LTP on LTS kernels with OE
user-space.

## How does Linaro determine which functional-tests LKFT executes?

The selection of functional tests in LKFT is mostly practical:
- The majority of tests in the test-suite should be deterministically
  successful.
  - We cannot have test-suites which fail frequently or randomly.
- The tests shall execute with relatively quick turnaround time so we can
  report results quickly.
- The test-suite should be automatable.
  - It must have machine parsable output that is consistent in its format.
  - It needs to be able to be driven with command line parameters or
    configuration files, and not runtime integration.
- The test-suite must be able to generate clean baselines through supporting
  skiplists and/or conditional exclusion (i.e., test for architecture and skip
  tests that are only valid on another architecture)
- It must be easy to report on test-case issues and work with upstream
  maintainers for improvements.
- The LKFT lab must have the hardware capacity to execute additional tests.
- The test must validate something valuable to upstream engineers or members.
- Linaro must have the the time in their development schedule to integrate
  additional test-suites.
- The test-suite must apply to the hardware and operating system that LKFT is
  interested in testing.

## Can LKFT add a new test-suite to execute against LTS, mainline, and linux-next kernels?

We need to assess the suitability of each test-suite for inclusion into LKFT before
adding it to the test-suites we execute. See the aforementioned selection
criteria.

## What user-space operating systems does LKFT use?

**[OE (OpenEmbedded)](http://www.openembedded.org/)** - Build framework for
embedded Linux. Selected because it efficiently creates purpose built file
systems.

**[AOSP (Android Open Source Project)](https://source.android.com/)** - Open
Source operating system that runs on mobile and media devices.

## Why doesn’t LKFT test on Debian/Ubuntu/Arch/Fedora/Gentoo/RHEL/Mandriva/etc?

These user-space operating systems are often not embedded device-focused, and
therefore have greater software dependencies. LKFT hardware is often embedded
and can’t fit these system images in storage, or support the installer methods
in automation. Linaro already provides OE images for other internal
stakeholders on the same devices and reusing the OE images provides LKFT with a
lower cost to execution.

## Why not just add functional testing to kernelCI?

We are!

When LKFT was initially launched, kernelCI did not support functional testing,
and LKFT had tight timelines and specific hardware requirements that made
inclusion in kernelCI difficult and risky.

Now days, kernelCI has been actively working on adding functional testing and
LKFT is working closely with kernelCI with the goal of creating a single place
to do upstream Linux kernel testing.

## I want my hardware in LKFT but can’t have results publicly available. Is access control of results possible?

Yes, the LKFT LAVA instance can have hidden hardware that is only accessible
via access-control. Additionally qa-reports can hide results and provide them
under access control.

## Can LKFT functional-test on a non-upstream SoC tree?

Yes, at Linaro’s discretion, but the SoC tree needs to be maintained and merged
in a timely manner after upstream LTS updates.

## I’m not a member, but can LKFT include my hardware?

Linaro can determine what is tested in LKFT on a case-by-case basis. If
proposed hardware meets a need for cross-referencing failures or provides
additional data that existing hardware does not, we might elect to include
non-member hardware.

## What is LKFT Remote Labs?

LKFT Remote Labs is an LKFT bolt-on facility that extends the capability of
Linux kernel functional testing to Linaro member SoCs in a way that can
accommodate privacy/confidentiality concerns of members as well as address
device complexity concerns of Linaro engineers. Member engineering teams can
implement private SoC tree hosting, private builds, and private
device-automation within their own secure remote labs and then share their
results in the LKFT dashboard, either under access control (privately) or
publicly. For more information on LKFT Remote Labs please contact
[lkft@linaro.org](mailto:lkft@linaro.org).

## I’m a member. Will Linaro take my hardware into LKFT?

Linaro can only take hardware into LKFT that matches coincides with LKFT
objectives. If your member hardware doesn’t match the immediate LKFT
objectives, perhaps the LKFT Remote Labs capability will work for your
hardware.
