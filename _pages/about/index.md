---
layout: page
title: About LKFT
permalink: /about/
#description: >
#    The mission of LKFT is to perform functional regression testing on select Linux
#    kernel branches in real time (as they’re updated) and report any regressions as
#    quickly as possible. This is performed by executing a variety of
#    functional-tests on a selection of user-space operating systems.
header:
    sections:
      - format: title
        title_content:
            size: h1
            text: About LKFT
            class: display-3 font-weight-bold text-left
flow:
    - row: main_content_row
    - row: container_row
      sections:
        - format: feature_block
          feature_block_content:
            type: slider
            position: right
            slider_content:
                lightbox_enabled: true
                seconds_per_slide: 5
                nav: true
                dots: false
                xs_items: 1
                sm_items: 1
                md_items: 1
                lg_items: 1
                items:
                    - image: /assets/images/lava_lab_image1.jpg
                      alt: The Lava Lab Image 1
                      title: Lava Lab Image 1
                    - image: /assets/images/lava_lab_image2.jpg
                      alt: The Lava Lab Image 2
                      title: Lava Lab Image 2
                    - image: /assets/images/lava_lab_image3.jpg
                      alt: The Lava Lab Image 3
                      title: Lava Lab Image 3
                    - image: /assets/images/lava_lab_image4.jpg
                      alt: The Lava Lab Image 4
                      title: Lava Lab Image 4
                    - image: /assets/images/lava_lab_image5.jpg
                      alt: The Lava Lab Image 5
                      title: Lava Lab Image 5
            title: The LAVA Lab
            text: >
                LAVA is an automated validation architecture primarily aimed at
                testing deployments of systems based around the Linux kernel on
                ARM devices, specifically ARMv7 and later. The current range of
                boards (device types) supported by this LAVA instance can be
                seen on the scheduler status page which includes details of how
                many boards of each type are available for tests and currently
                running jobs.
            buttons:
                - title: View LKFT's LAVA Lab
                  url: https://lkft.validation.linaro.org/scheduler/
                  #icon: icon-github-circled
                  class: btn-primary
---

LKFT is Linaro’s Linux Kernel Functional Test framework.

The mission of LKFT is to perform functional regression testing on select Linux
kernel branches in real time and report any regressions as quickly as possible.
This is performed by executing a variety of functional-tests on a selection of
user-space operating systems.

The goals of LKFT are to shorten derivative Linux kernel release intervals,
increase the confidence of upstream Linux kernel engineers in the quality of
their releases, and increase the confidence of downstream adopters of those
Linux kernel trees. Ultimately the goal is that LKFT will encourage downstream
hardware vendors to more frequently update the Linux kernel that runs on their
devices in order that consumers might benefit from bug and security updates.

As part of Linaro’s mission to improve the Arm architecture eco-system, the
LKFT team reports discovered regressions to Linaro kernel developers, Linaro
members, and upstream Linux kernel engineers.

It is important to the Arm eco-system that Linaro also fix as many failures as
are found. The LKFT team invests time into identifying, reporting, and fixing
upstream kernel regressions, identifying kernel regressions in select
member-hardware SoC (system-on-a-chip) trees, fixing test-suites by
contributing to upstream testing projects, fixing kernel configurations,
improving full OS stack integration (firmware, kernel, userspace), and
improving Arm device automation integration.

## Selected Talks

<iframe width="560" height="315" src="https://www.youtube.com/embed/R3H9fPhPf54" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VnlPmQ1I6hA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LMs7vCGv8as" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/WMItXP1TzOY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tc92uw3m-SI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xZz50o9QaUQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FAuHKTeZhDk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

[linaro-organization]: https://linaro.org
