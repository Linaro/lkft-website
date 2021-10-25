---
layout: flow
title: Stable Release Candidate Log
description: >
    Log of status and events while doing stable tree release candidate testing in
    Linaro's Linux Kernel Functional Test (LKFT) project.
permalink: /logs/rclog/
jumbotron:
    title: Stable Release Candidate Log
    title-class: display-3 font-weight-bold text-left
    description: >
      Log of status and events while doing stable tree release candidate testing in
      Linaro's Linux Kernel Functional Test (LKFT) project.
---
<!--
    How to use this file

    Each RC's results are reported and aggregated here. As our goal is to
    deliver results in less than 48 hours, we add a specifically formatted
    comment to each block which is then parsed by ./getsla.py to aggregate SLA
    counts.

    The 4 supported SLA values are:
      - >48h (missed sla)
      - <48h (less than 48h, but more than 24)
      - <24h (less than 24h, but more than 8)
      - <8h

    The second value is the number of releases that met the given SLA.

    Then, to get current SLA metrics, run ./getsla.py from the same directory
    as index.md.

    Likewise, stable regressions are counted using "regressions 3",
    where "3" is the number of regressions reported. We count one regression
    per branch - so if a regression from a single patch is found to break 5
    branches, that would count as 5 regressions.

-->

## 2021

### 2021-08-24
#### 5.13.13
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.4.282, 4.9.281, 4.14.245, 4.19.205, 5.4.143, 5.10.61
<!-- sla <48 6 -->
- Reported no regressions in <48h

### 2021-08-16
#### 5.4.142-rc2, 5.10.60-rc2, 5.13.12-rc2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-08-13
#### 4.4.281, 4.9.280, 4.14.244, 4.19.204, 5.4.141, 5.10.59, 5.13.11
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-08-10
#### 4.19.203, 5.4.140, 5.10.58, 5.13.10
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-08-08
#### 4.4.280
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2021-08-06
#### 4.4.279, 4.9.279, 4.14.243, 4.19.202, 5.4.139, 5.10.57, 5.13.9
<!-- sla <48 7 -->
- Reported no regressions in <48h

### 2021-08-02
#### 4.9.278, 4.14.242, 4.19.201, 5.4.138, 5.10.56, 5.13.8
<!-- sla <24 6 -->
- Reported no regressions in <24h

#### 4.4.278
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2021-07-29
#### 4.19.200, 5.4.137, 5.10.55, 5.13.7
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-07-26
#### 4.4.277-rc1, 4.9.277-rc1, 4.14.241-rc1, 4.19.199-rc1
<!-- sla <24 4 -->
<!-- regressions 4 -->
- Reported [Perf](https://lore.kernel.org/stable/CA+G9fYvKUnzAph-kNsc45v1vF9DLK5NgYONdue4q-Zuw1S3oVQ@mail.gmail.com/) [build](https://lore.kernel.org/stable/CA+G9fYtKbCnGTMJod3PYEmcUHYLhj-WHS-rKQNCiWw7DvdVzjQ@mail.gmail.com/) [regressions](https://lore.kernel.org/stable/CA+G9fYvRc=hugyiNZVEMxx8_Cm5J+MWTLsYdSqjehJX_nsNkNA@mail.gmail.com/) on [all architectures](https://lore.kernel.org/stable/CA+G9fYuaWpyewAmYV041o9g+dFqutGEKnemCPFz6KmCH63TS9Q@mail.gmail.com/)

#### 5.10.54-rc1, 5.13.6-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported [net/core](https://lore.kernel.org/stable/19e027f2-c751-9bc6-52f4-e0c560c1a909@linaro.org/) [build regressions](https://lore.kernel.org/stable/99b34fe9-0f1f-c94f-58d5-cfb43de98d76@linaro.org/) on all architectures

#### 5.10.54-rc2, 5.13.6-rc2
<!-- sla <8 2 -->
- Reported no regressions in <8h

#### 4.19.199-rc3, 5.4.136-rc1
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.4.277-rc2, 4.9.277-rc2, 4.14.241-rc2
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2021-07-22
#### 5.10.53-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build regressions on Arm64](https://lore.kernel.org/stable/beeb7568-388f-38e4-eb1f-28b1557bc191@linaro.org/) (DTB)

#### 5.13.5-rc1
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported a [64K-pages problem with SATA](https://lore.kernel.org/stable/CA+G9fYt_9nfDcQzKm8SZtmQXzzrybutS9vD4GgUw_0o8UD1HOQ@mail.gmail.com/) on Juno

#### 5.4.135, 5.10.53-rc2
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2021-07-19
#### 4.14.240-rc1, 4.19.198-rc1, 5.4.134-rc1
<!-- sla <8 3 -->
<!-- regressions 3 -->
- Reported [arm64](https://lore.kernel.org/stable/CA+G9fYvCbZdAQbZw0+e-5ueyzRdsCog4JPQoHNK4TyxXLWpzqQ@mail.gmail.com/) [(QC) DTB](https://lore.kernel.org/stable/CA+G9fYvCbZdAQbZw0+e-5ueyzRdsCog4JPQoHNK4TyxXLWpzqQ@mail.gmail.com/) [failure](https://lore.kernel.org/stable/CA+G9fYuH=9=ssubxox8vpC2p-qMw45cH8Qta_dTs=Mae7A4W+Q@mail.gmail.com/)

#### 5.10.52-rc1, 5.12.19-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported [arm64 (TI)](https://lore.kernel.org/stable/CA+G9fYv6TQOKp1O7JnN9zfEL_A5XP=VXRc3h-=n33jjXxP3OyA@mail.gmail.com/) [DTB failure](https://lore.kernel.org/stable/CA+G9fYts0yyTCEpSQf=1AEWEJ5Y7=o=3fGE7k5rhPA5mXJCBng@mail.gmail.com/)

#### 4.19.198-rc2, 5.4.134-rc2
<!-- sla <24 1 -->
<!-- sla <8 1 -->
<!-- regressions 2 -->
- Reported [Perf build failure](https://lore.kernel.org/stable/3d770ab7-5008-cbee-98c1-101d839739cd@linaro.org/) [on all architectures](https://lore.kernel.org/stable/CA+G9fYtAN7y5Z82nO59daxD=AtYOyu2J7ECFjY2P64JR9Fqifg@mail.gmail.com/)

#### 5.10.52-rc2, 5.12.19-rc2, 5.13.4-rc2
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Last 5.12.y release

#### 4.4.276, 4.9.276, 4.14.240-rc2
<!-- sla <48 3 -->
- Reported no regressions in <48h


### 2021-07-15
#### 5.12.18-rc1, 5.13.3-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported [build
regressions](https://lore.kernel.org/stable/CAEUSe7_+8fQZ=1+jcxJVTRw0DYttGmR-aBdobZ0GWYQi3Vg97w@mail.gmail.com/)
[on
s390](https://lore.kernel.org/stable/CAEUSe7-HX=WrpXfcfnBUAjvEMGvraWv5hXwSgXqfUM4X1KarFg@mail.gmail.com/)

#### 5.4.133-rc1, 5.10.51-rc1, 5.12.18-rc2, 5.13.3-rc2
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 5.4.133-rc2, 5.10.51-rc2
<!-- sla <48 2 -->
- Reported no regressions in <48h

### 2021-07-12
#### 5.4.132-rc1, 5.10.50-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported PowerPC
[build](https://lore.kernel.org/stable/CA+G9fYu6+hex77zTHTCopRvSVpCfxPjLydEL3Ew+92poZkncSw@mail.gmail.com/)
[regressions](https://lore.kernel.org/stable/CA+G9fYtdYvUse1Osfrux6DVU_DiLAKveQqnEZ36eoG-fThJBqw@mail.gmail.com/)

#### 5.4.132-rc2, 5.10.50-rc2, 5.13.2
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 5.12.17
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2021-07-09
#### 4.4.275
<!-- sla <48 1 -->
<!-- regressions 1 -->
- Reported a [net namespace
regression](https://lore.kernel.org/stable/CA+G9fYvBmvrivr+gnBhTPsYzzMPnRHigGGRNewp6X76n1Qw=Yw@mail.gmail.com/)
on arm64

#### 5.4.131, 5.10.49, 5.12.16
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.9.275, 4.14.239, 4.19.197
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2021-07-05
#### 5.4.130, 5.10.48, 5.12.15, 5.13.1
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-06-28
#### 4.4.274, 4.9.274, 4.14.238, 4.19.196, 5.4.129, 5.10.47, 5.12.14
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-06-21
#### 5.4.128, 5.10.46, 5.12.13
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-06-16
#### 5.4.127, 5.10.45, 5.12.12
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-06-14
#### 5.10.44-rc2
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [DB845c kernel
crash](https://lore.kernel.org/stable/CA+G9fYsfvtr7NNcb0bvEZpYYotdY7Uf+wMY22iLhr0weZ8Om3g@mail.gmail.com/)

#### 5.10.44-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [DB845c kernel
crash](https://lore.kernel.org/stable/CA+G9fYuQy0c6_POrWNs51rKyuQ2O-PnY5edCDMDgyGTA-txA_A@mail.gmail.com/)

#### 4.4.273, 4.9.273-rc1, 4.9.273-rc2, 4.14.237, 4.19.195, 5.4.126, 5.12.11
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-06-08
#### 4.19.194-rc2
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.19.194-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported a [DTB problem on
Arm](https://lore.kernel.org/stable/CA+G9fYu3URCR6_ZL+KPYFEOVL4f=8TjjyFncmvoLuYrR_YR3=A@mail.gmail.com/)

#### 4.4.272, 4.9.272, 4.14.236, 5.4.125, 5.10.43, 5.12.10
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-05-31
#### 4.4.271-rc2, 4.9.271-rc2, 4.14.235-rc2
<!-- sla <8 3 -->
- Reported no regressions in <8h

#### 4.14.235-rc1, 4.19.193, 5.4.124, 5.10.42, 5.12.9
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2021-05-27
#### 5.4.123, 5.10.41, 5.12.8
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-05-24
#### 4.4.270, 4.9.270, 4.14.234, 4.19.192, 5.4.122, 5.10.40, 5.12.7
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-05-20
#### 4.4.269-rc2, 4.9.269, 4.14.233, 4.19.191, 5.4.121, 5.10.39-rc2, 5.12.6-rc2
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-05-17
#### 5.12.5-rc2
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 5.4.120, 5.10.38, 5.11.22, 5.12.5-rc1
<!-- sla <24 4 -->
- Reported no regressions in <24h
- Last 5.11.y release

### 2021-05-12
#### 5.4.119
<!-- sla <8 1 -->
<!-- regressions 2 -->
- Reported [arm64
build](https://lore.kernel.org/stable/CA+G9fYs1AH8ZNWMJ=H4TY5C6bqp--=SZfW9P=WbB85qSBDkuXw@mail.gmail.com/)
regression
- Reported [MIPS/Clang
build](https://lore.kernel.org/stable/CA+G9fYufHvM+C=39gtk5CF-r4sYYpRkQFGsmKrkdQcXj_XKFag@mail.gmail.com/)
regression

#### 5.10.37, 5.11.21, 5.12.4
<!-- sla <8 3 -->
<!-- regressions 3 -->
- Reported [MIPS/Clang
build](https://lore.kernel.org/stable/CA+G9fYufHvM+C=39gtk5CF-r4sYYpRkQFGsmKrkdQcXj_XKFag@mail.gmail.com/)
regression

### 2021-05-10
#### 5.12.3
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 5.4.118, 5.10.36, 5.11.20
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-05-05
#### 5.12.2
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.19.190, 5.4.117, 5.10.35, 5.11.19
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-04-30
#### 5.4.116, 5.10.34, 5.11.18, 5.12.1
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-04-26
#### 4.14.232, 4.19.189, 5.4.115, 5.10.33, 5.11.17
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 4.4.268, 4.9.268
<!-- sla <48 2 -->
- Reported no regressions in <48h

### 2021-04-19
#### 5.4.114, 5.10.32, 5.11.16
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-04-15
#### 4.4.267, 4.9.267, 4.14.231, 4.19.188, 5.4.113, 5.10.31, 5.11.15
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-04-12
#### 4.19.187, 5.4.112, 5.10.30, 5.11.14
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-04-09
#### 4.4.266, 4.9.266, 4.14.230, 4.19.186, 5.4.111, 5.10.29, 5.11.13
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-04-05
#### 4.4.265, 4.9.265, 4.14.229, 4.19.185, 5.4.110, 5.10.28, 5.11.12
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-03-29
#### 4.4.264, 4.9.264, 4.14.228, 4.19.184, 5.4.109, 5.10.27-rc2
<!-- sla <24 6 -->
- Reported no regressions in <24h

#### 5.11.11-rc2
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 5.10.27-rc1, 5.11.11-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported [build
regression](https://lore.kernel.org/stable/CA+G9fYs0-q+f4nT72PLn9ksHvKx=J6kJ6eyTuXa8OoocJwPmiQ@mail.gmail.com/)
on arm64

### 2021-03-22
#### 5.10.26-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build
failure](https://lore.kernel.org/stable/CA+G9fYtK9effpD=wRmiJWmiE9iphE9NVxPw=W9dxV=OTSduR4w@mail.gmail.com/)
on MIPS

#### 5.10.26-rc2
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported and bisected [kernel
crash](https://lore.kernel.org/stable/CA+G9fYsYXPkx+0sBYg-v46V6d9JhJxyXEir5PxX0byTXN+r0wg@mail.gmail.com/)
on all architectures

#### 5.10.26-rc3
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 5.11.9
<!-- sla <24 1 -->
- Reported no regressions in <8h

#### 4.19.183, 5.4.108
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.4.263, 4.9.263, 4.14.227
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2021-03-19
#### 5.10.25, 5.11.8
<!-- sla <8 2 -->
- Reported no regressions in <8h

#### 4.19.182, 5.4.107
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2021-03-15
#### 4.4.262, 4.9.262, 4.14.226, 4.19.181, 5.4.106, 5.10.24, 5.11.7
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2021-03-10
#### 4.4.261, 4.9.261, 4.14.225, 4.19.180, 5.4.105, 5.10.23-rc2, 5.11.6
<!-- sla <24 7 -->
- Reported no regressions in <24h

#### 5.10.23-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build
error](https://lore.kernel.org/stable/CA+G9fYuydf-g2FPOtP9LAX-4zY3EF64Bx0OQjbjn=a4V+0=eLA@mail.gmail.com/)
for arm64

### 2021-03-08
#### 5.4.104, 5.10.22, 5.11.5
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-03-05
#### 4.4.260, 4.14.224, 4.19.179, 5.4.103, 5.10.21
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 4.9.260, 5.11.4
<!-- sla <48 2 -->
- Reported no regressions in <48h

### 2021-03-01
#### 5.10.20-rc4, 5.11.3-rc3
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Reported [LTP pty
hangup01](https://lore.kernel.org/stable/CA+G9fYvkW+84U9e0Cjft_pq9bGnBBqCXST7Hg+gx4pKNyuGPFQ@mail.gmail.com/)
on all devices

#### 4.4.259-rc2, 4.9.259-rc3, 4.14.223-rc4, 4.19.178-rc4, 5.4.102-rc5
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 4.9.259-rc1, 4.14.223-rc1, 4.19.178-rc1, 5.4.102-rc1
<!-- sla <24 4 -->
<!-- regressions 4 -->
- Reported icmpv6 build
[failure](https://lore.kernel.org/stable/CA+G9fYsguv3qBbnHtiw9NKwb9REuQRbdji3YvQh7ETxSRbheAQ@mail.gmail.com/)

#### 4.19.178-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [kfree_sensitive build
failure](https://lore.kernel.org/stable/CA+G9fYufUB394TpDuO5-m2GEi=1LDZvsVcHmp-HyWbWV1tYjkA@mail.gmail.com/)
on arm

#### 5.10.20-rc1
<!-- regressions 1 -->
- Reported [sstep build
failure](https://lore.kernel.org/stable/CA+G9fYsv+xCtoAYXgz5jkMLDGALjXCEvy=HiSWZigA5jLtnytQ@mail.gmail.com/)
on PowerPC

#### 5.10.20-rc1, 5.11.3-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported [rcar_du_kms build
failure](https://lore.kernel.org/stable/CA+G9fYvApAT=vx_XxhbMZ=rS8ShhYkSKa0JsHC8k0dFn5xwU=Q@mail.gmail.com/)

#### 4.4.259-rc1
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2021-02-25
#### 5.4.101, 5.10.19, 5.11.2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2021-02-22
#### 4.4.258, 4.9.258, 4.14.222, 4.19.177, 5.4.100, 5.10.18
<!-- sla <24 6 -->
- Reported no regressions in <24h

#### 5.11.1
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2021-02-15
#### 5.4.99, 5.10.17
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2021-02-11
#### 4.19.176-rc2, 5.4.98, 5.10.16
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.19.176-rc1
<!-- regressions 1 -->
<!-- sla <24 1 -->
- Reported [lockdep
regression](https://lore.kernel.org/stable/CA+G9fYugE5n1qsudwP7XntBvvNcEquxQkMEskWvxJAZdZX5Fng@mail.gmail.com/)
on X15

### 2021-02-08
#### 5.10.15
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [x86_64 build
regression](https://lore.kernel.org/stable/CA+G9fYsjJ+K7w-PQ4gp=L3QO_VSaUMr6syvAS77--aFbfZVK-g@mail.gmail.com/)
under OE

#### 4.19.175, 5.4.97
- Reported no regressions in <24h

#### 4.4.257, 4.9.257, 4.14.221
- Reported no regressions in <48h

### 2021-02-05
#### 4.14.220, 4.19.174, 5.4.96, 5.10.14
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2021-02-02
#### 4.4.255, 4.9.255, 4.14.219, 4.19.173, 5.4.95, 5.10.13
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-01-29
#### 5.10.12
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.4.254, 4.9.254, 4.14.218, 4.19.172, 5.4.94, 5.10.12
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-01-25
#### 4.19.171, 5.4.93-rc3, 5.10.11-rc2
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 5.4.93-rc1, 5.10.11-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- Reported build regressions on [x86_64,
i386](https://lore.kernel.org/stable/ef5b0670-83ea-e754-033c-2f3f56a8c822@linaro.org/)
and
[RISC-V](https://lore.kernel.org/stable/dec01147-3526-59d8-d7a2-5d23d42c5671@linaro.org/)

### 2021-01-22
#### 4.4.253-rc2, 4.9.253-rc2, 4.14.217-rc2, 4.19.170, 5.4.92, 5.10.10
<!-- sla <24 6 -->
- Reported no regressions in <24h

#### 4.4.253-rc1, 4.9.253-rc1, 4.14.217-rc1
<!-- sla <8 3 -->
<!-- regressions 3 -->
- Reported [build
failure](https://lore.kernel.org/stable/CA+G9fYso4QNbRWdrQiiOiMb5RUr8VtM3AkKEGLasgN+KsPSvDw@mail.gmail.com/)
for Clang 10 on arm64

### 2021-01-18
#### 4.19.169-rc2, 5.4.91-rc2
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 5.10.9
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.19.169-rc1, 5.4.91-rc1
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Reported [build
failures](https://lore.kernel.org/stable/CA+G9fYsVb-4L65-YjNxVhGWeQySQAQVyQGudDtbmzfZq4g4vFA@mail.gmail.com/)
for MIPS

### 2021-01-15
#### 4.4.252, 4.9.252, 4.14.216, 4.19.168, 5.4.90, 5.10.8
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-01-11
#### 4.4.251, 4.9.251, 4.14.215, 4.19.167, 5.4.89, 5.10.7-rc2
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-01-07
#### 4.4.250-rc2, 4.9.250-rc2, 4.14.214, 4.19.166, 5.4.88, 5.10.6
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2021-01-04
#### 4.19.165-rc2
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.19.165-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build failure on arm
32-bits](https://lore.kernel.org/stable/CAEUSe78+F1Q9LFjpf8SQzQa6+Ak4wcPiiNcUVxEcv+KPdrYvBw@mail.gmail.com/)
in <8h

#### 5.4.87, 5.10.5
<!-- sla <24 2 -->
- Reported no regressions in <24h

## 2020

### 2020-12-28
#### 5.4.86-rc2, 5.10.4-rc2
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 5.4.86-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [Perf
build](https://lore.kernel.org/stable/CA+G9fYsAz_drXA3RJW-hZ8uAUv8AQ7X_JwmM38NSp6ERZQ8Wkg@mail.gmail.com/)
failure in <8h

#### 4.4.249, 4.9.249, 4.14.213, 4.19.164, 5.10.4-rc1
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2020-12-23
#### 5.10.3
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2020-12-19
#### 5.4.85, 5.9.16, 5.10.2
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Last 5.9.y release

### 2020-12-14
#### 5.9.15
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 5.4.84, 5.10.1
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2020-12-10
#### 5.4.83-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build
failures](https://lore.kernel.org/stable/CA+G9fYsXCcmcJTVnNUu1Pb5j5gv4CCnSqTO79Uu3tKc=aECYTg@mail.gmail.com/)
on s390

#### 4.4.248, 4.9.248, 4.14.212, 4.19.163, 5.4.83-rc2, 5.9.14
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-12-06
#### 4.14.211, 4.19.162, 5.4.82, 5.9.13
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-12-01
#### 4.4.247, 4.9.247, 4.14.210, 4.19.161, 5.4.81, 5.9.12
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-11-23
#### 4.4.246, 4.9.246, 4.14.209, 4.19.160, 5.4.80, 5.9.11
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-11-20
#### 4.4.245, 4.9.245, 4.14.208, 4.19.159, 5.4.79, 5.9.10
<!-- sla <48 6 -->
- Reported no regressions in <48h

### 2020-11-17
#### 4.4.244, 4.9.244, 4.14.207, 4.19.158, 5.4.78, 5.9.9
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-11-09
#### 4.4.242, 4.9.242, 4.14.205, 4.19.156, 5.4.76, 5.9.7
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-11-03
#### 4.14.204, 4.19.155, 5.4.75, 5.9.4
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-10-31
#### 5.4.74-rc2, 5.8.18, 5.9.3
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-10-27
#### 5.9.2
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.4.241, 4.9.241, 4.14.203, 4.19.153, 5.4.73, 5.8.17
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-10-16
#### 4.4.240, 4.9.240, 4.14.202, 4.19.152, 5.4.72, 5.8.16, 5.9.1
<!-- sla <24 7 -->
- Reported no regressions in <24h
- Last 5.8.y release

### 2020-10-12
#### 4.4.239, 4.9.239, 4.14.201, 4.19.151, 5.4.71, 5.8.15
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-10-05
#### 4.19.150, 5.4.70, 5.8.14
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-09-29
#### 4.19.149-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported a Perf [build
regression](https://lore.kernel.org/stable/CA+G9fYsMyseOo3ntS_7o4qibCHEPGr0w5AQYweXjjBTyJN0DYA@mail.gmail.com/)

#### 4.9.238-rc1
<!-- sla <48 1 -->
<!-- regressions 1 -->
- Reported Arm64 [kernel
crashes](https://lore.kernel.org/stable/CA+G9fYuBa4C-zkiywo6W1AqUGpNP1VoUg7+KkJX9Ra_LN3gKHA@mail.gmail.com/)

#### 5.4.69, 5.8.13
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.4.238, 4.14.200, 4.19.149-rc2
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2020-09-25
#### 5.8.12
<!-- sla <8 1 -->
- Reported no regressions in <8h
#### 4.19.148, 5.4.68
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2020-09-21
#### 4.4.237, 4.9.237, 4.14.199, 4.19.147, 5.4.67, 5.8.11
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-09-15
#### 5.4.66-rc1, 5.4.66-rc2
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Reported [build](https://lore.kernel.org/stable/CA+G9fYv5hvOYNdfX6F40aZPP9Vr6aEsP_-22gX2P+Q95TrfF-A@mail.gmail.com/) [failures](https://lore.kernel.org/stable/20200915201732.4474qpgnxwshanpw@nuc.therub.org/)
on arm and arm64

#### 4.19.146, 5.4.66-rc3
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 5.8.10
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2020-09-11
#### 4.4.236, 4.9.236, 4.14.198, 4.19.145, 5.4.65, 5.8.9
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-09-08
#### 4.14.197, 4.19.144, 5.4.64, 5.8.8
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-09-04
#### 5.4.63, 5.8.7
<!-- sla <48 2 -->
- Reported no regressions in <48h

### 2020-09-01
#### 5.4.62-rc1
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [Perf build
failure](https://lore.kernel.org/stable/CA+G9fYvsNkxvs7hdCB3LC9W+rP8hBa3F1fG3951S+xHfiOJwNA@mail.gmail.com/)

#### 5.8.6-rc1
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [cve-2017-17053 regression on
i386](https://lore.kernel.org/stable/CA+G9fYt+NW7w_NSmqhgQYEmWR_Yo0XDGj1skSoCSqUeLfDPu_A@mail.gmail.com/)
(previously reported upstream against linux-next and mainline)

#### 4.4.235-rc2, 5.4.62-rc2, 5.8.6-rc2
<!-- sla <24 3 -->
- XXX in <24h

#### 4.9.235, 4.14.196, 4.19.143
<!-- sla <24 3 -->
- XXX in <24h

### 2020-08-26
#### 5.7.19, 5.8.5
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2020-08-24
#### 5.8.4-rc1
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.4.234-rc2, 4.9.234-rc2, 4.14.195-rc2, 4.19.142-rc2, 5.4.61-rc2, 5.7.18-rc2, 5.8.4-rc2
<!-- sla <24 7 -->
- Reported no regressions in <24h
- Last 5.7.y release

### 2020-08-20
#### 5.4.60, 5.7.17, 5.8.3
<!-- sla <8 3 -->
<!-- regressions 3 -->
- Reported
[crypto](https://lore.kernel.org/stable/CA+G9fYt+z3Cs9Cbf8HH8o59gsUkwjuKRCZmvQQ2K5OM_ydSRHQ@mail.gmail.com/)
[and](https://lore.kernel.org/stable/CA+G9fYuCgzAOZw6iM6sLwJP9=0wrO0WcTHLCQtEHWQB9=WCuSw@mail.gmail.com/)
[cve](https://lore.kernel.org/stable/CA+G9fYtebf78TH-XpqArunHc1L6s9mHdLEbpY1EY9tSyDjp=sg@mail.gmail.com/)
problems

#### 4.4.233, 4.9.233, 4.14.194-rc2, 4.19.141
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-08-17
#### 4.19.140-rc1, 5.4.59-rc1, 5.7.16-rc1, 5.8.2-rc1
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-08-10
#### 4.19.139
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [KASAN BUG on
x86_64](https://lore.kernel.org/stable/CA+G9fYsZs6u8LH6gJ=bnc8UWrNzLZXnaq2oMY+psNCQPzyPxdQ@mail.gmail.com/)
and LTP tracing

#### 5.4.58, 5.7.15, 5.8.1
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-08-05
#### 4.14.193, 4.19.138, 5.4.57, 5.7.14-rc2
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 5.7.14-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [arm64 build regression with
GCC 7.3](https://lore.kernel.org/stable/CA+G9fYv_aX36Kq_RD5dAL_By4AFq=-ZY_qh7VhLG=HJQv5mDzg@mail.gmail.com/)
in <8h

### 2020-08-03
#### 4.14.192, 4.19.137, 5.4.56, 5.7.13-rc3
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 5.7.13-rc2
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [arm64 build
regression](https://lore.kernel.org/stable/CA+G9fYs35Eiq1QFM0MOj6Y7gC=YKaiknCPgcJpJ5NMW4Y7qnYQ@mail.gmail.com/)
in <8h

### 2020-07-30
#### 5.4.55-rc1
<!-- sla <48 1 -->
<!-- regressions 1 -->
- Reported [kernel panic on arm64 with
64K-pages](https://lore.kernel.org/stable/CA+G9fYvCPwwmF-k=Z9Z6P2KYrOMHurcORwa3RW2H1j6pq1QEDg@mail.gmail.com/)
in <48h

#### 4.4.232, 4.9.232, 4.14.191, 4.19.136, 5.7.12
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2020-07-27
#### 4.19.135-rc3
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.19.135-rc1
<!-- sla <24 3 -->
<!-- regressions 1 -->
- Reported [boot
regression](https://lore.kernel.org/stable/CA+G9fYvBRONMYwX36Hcju4JA5TwstkT2Afyuy2DB1zQcBcc1CA@mail.gmail.com/)
on x86_64 in <24h

#### 4.14.190, 5.4.54, 5.7.11
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-07-20
#### 4.9.231-rc0, 4.14.189-rc0, 4.19.134-rc0, 5.4.53-rc0
<!-- regressions 4 -->
- Reported [arm](https://lore.kernel.org/stable/CA+G9fYuPe=XkrTx+yDo556D5t4wrFRFXctPPb2+7w+v-hAHvyw@mail.gmail.com/)
[build
regressions](https://lore.kernel.org/stable/CA+G9fYs0gT__dkBE7XbRj-n5kZmfeHFj=GXhHZ+d-BSNBdtYyg@mail.gmail.com/)
before review request

#### 5.7.10-rc1
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [RISC-V build
regression](https://lore.kernel.org/stable/CA+G9fYteJs0X1Ctjbt-51Q9J2JHM--cOpYg+02jSdfnbWbwr2g@mail.gmail.com/)
in <8h

#### 5.4.53-rc1, 5.7.10-rc2
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Reported
[Perf](https://lore.kernel.org/stable/CA+G9fYt_HQbAVT8obg59CkOTpHh=gYyQdjcx8PeMdo2Ba-A+Dw@mail.gmail.com/)
[regressions](https://lore.kernel.org/stable/CA+G9fYuVJAHyXqPhhqtcdDstKrjb-TLu=d7DZTuQX3YuCsypHA@mail.gmail.com/)
in <24h

#### 4.4.231-rc1, 4.9.231-rc1, 4.14.189-rc1, 4.19.134-rc1
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2020-07-14
#### 4.19.133, 5.4.52, 5.7.9
<!-- sla <24 3 -->
<!-- regressions 1 -->
- Reported [build
regression](https://lore.kernel.org/stable/0367b2521cc678cb858c5af64c085506@kernel.org/T/#m75743896c3742c5548183080937f3f1dd3096f44)
  on 5.7 before review request
- Reported no regressions in <24h

### 2020-07-07
#### 4.4.230, 4.9.230, 4.14.188, 4.19.132, 5.4.51, 5.7.8
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-06-29
#### 5.7.7
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.4.229, 4.9.229, 4.14.186, 4.19.131, 5.4.50
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2020-06-23
#### 4.19.130, 5.4.49, 5.7.6
<!-- sla <8 3 -->
- Reported no regressions in <8h

#### 4.14.186
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2020-06-19
#### 4.19.129-rc2, 5.4.48-rc2
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.4.228, 4.9.228, 4.14.185, 4.19.129-rc1, 5.7.5
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 5.4.48-rc1
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2020-06-16
#### 5.4.47, 5.6.19, 5.7.3
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Last 5.6.y release

### 2020-06-09
#### 4.14.184-rc1, 4.19.128-rc1
<!-- sla <8 2 -->
- Reported build problems in <8h

#### 4.4.227, 4.9.227, 4.14.184-rc2, 4.19.128-rc2, 5.4.46, 5.6.18, 5.7.2
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2020-06-05
#### 4.19.127, 5.4.45, 5.6.17, 5.7.1
<!-- sla <48 4 -->
- Reported no regressions in <48h

### 2020-06-01
#### 4.4.226, 4.9.226-rc3, 4.14.183, 4.19.126, 5.4.44-rc1, 5.6.16-rc1
<!-- regressions 1 -->
<!-- sla <24 6 -->
- Reported [build regression](https://lore.kernel.org/stable/CA+G9fYuwMbm2NUmSLohbUs+KzKcyY9rC0dc4kh9AD9hJi6+ePw@mail.gmail.com/)
before review round on 4.9.226
- Reported no regressions in <24h

#### 5.4.44-rc2, 5.6.16-rc2
<!-- sla <8 2 -->
- Reported no regressions in <8h

### 2020-05-26
#### 4.4.225, 4.9.225, 4.14.182 4.19.125, 5.4.43 5.6.15
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-05-18
#### 4.4.224, 4.9.224, 4.14.181, 4.19.124, 5.4.42
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 5.6.14-rc2
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2020-05-13
#### 4.19.123, 5.4.41
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 5.6.13
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2020-05-08
#### 4.4.223-rc1, 5.4.40-rc1
<!-- sla <8 2 -->
<!-- regressions 2 -->
- [Build](https://lore.kernel.org/stable/CA+G9fYu5XMh+gkA9MBkg+yKAvHUEZBvRww-PbeiTnJYaYsN5ag@mail.gmail.com/)
[errors](https://lore.kernel.org/stable/CA+G9fYu6e9ytJejS=No4ytQT=U+YjqOPghVQXD=gAHB82L-WUw@mail.gmail.com/) on arm reported in <8h

#### 4.4.223-rc2
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported [boot
failure](https://lore.kernel.org/stable/CA+G9fYt7JXrXiTyt+DkvM6boVyRQSCPp_90n5JkUNgaXJiBcZw@mail.gmail.com/) on arm in <24h

#### 4.4.223-rc3
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.9.223, 4.14.180, 4.19.122, 5.4.40-rc2, 5.6.12
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2020-05-04
#### 4.4.222, 4.9.222, 4.14.179, 4.19.121, 5.4.39, 5.6.11
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-05-01
#### 4.4.221, 4.9.221-rc1, 4.9.221-rc2, 4.14.178-rc1, 4.19.120-rc1, 5.4.37, 5.6.9
<!-- sla <24 7 -->
- Reported no regressions in <24h

#### 4.14.178-rc2, 4.19.120-rc2
<!-- sla <48 2 -->
- Reported no regressions in <48h

### 2020-04-28
#### 4.19.119, 5.4.36, 5.6.8
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-04-22
#### 4.19.118, 5.4.35, 5.6.7
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.14.177-rc1
<!-- sla <48 1 -->
- Reported no regressions in <48h
- Reported [platform specific
warnings](https://lore.kernel.org/stable/CA+G9fYv5ofZJfrKFNbj6kaGJfLsvS7gOvVAEq_q9cMq9f9cM6w@mail.gmail.com/) (DB410c, HiKey)

#### 4.4.220, 4.9.220, 4.14.177-rc2
<!-- sla <8 3 -->
- Reported no regressions in <8h

### 2020-04-20
#### 4.19.117
<!-- sla <24 1 -->
- Reported a kernel panic in <24h; hard to reproduce

#### 5.4.34, 5.5.19, 5.6.6
<!-- sla <8 3 -->
- Reported no regressions in <8h
- Last 5.5.y release

### 2020-04-16
#### 5.4.33, 5.5.18, 5.6.5
<!-- sla <8 3 -->
- Reported no regressions in <8h

#### 4.19.116
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2020-04-11
#### 4.4.219, 4.9.219, 4.14.176, 4.19.115, 5.4,32, 5.5.17, 5.6.4
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2020-04-07
#### 5.6.3-rc1
<!-- sla <8 1 -->
- Reported no regression in <8h

#### 5.4.31, 5.5.16, 5.6.3-rc2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-04-01
#### 4.4.218, 4.9.218, 4.14.175, 4.19.114, 5.4.30, 5.5.15, 5.6.2
<!-- sla <24 7 -->
- Reported no regressions in <24h

### 2020-03-31
#### 5.5.14-rc2
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [BPF
regression](https://lore.kernel.org/stable/CA+G9fYuU-5o5DG1VSQuCPx=TSs61-1jBekdGb5yvMRz4ur3BQg@mail.gmail.com/) in <8h

#### 5.6.1-rc1
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported Perf [build
regression](https://lore.kernel.org/stable/CA+G9fYsZjmf34pQT1DeLN_DDwvxCWEkbzBfF0q2VERHb25dfZQ@mail.gmail.com/) in <24h

#### 5.4.29-rc2
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2020-03-24
#### 4.19.113, 5.4.28, 5.5.12
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-03-19
#### 5.4.27, 5.5.11
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Build failure
[reported](https://lore.kernel.org/stable/CA+G9fYtR4eynoMt6r313FHgEhftDobn2SE9PFiDR=7_wZNfSTQ@mail.gmail.com/) for arm and arm64
- Reported no regression in -rc3 in <24h

#### 4.9.217, 4.14.174, 4.19.112
<!-- sla <8 3 -->
- Reported no regressions in <8h

#### 4.4.217
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2020-03-17
#### 4.19.111, 5.4.26, 5.5.10
<!-- sla <24 3 -->
- No regressions reported in <24h

### 2020-03-10
#### 4.9.216
<!-- sla <8 1 -->
- No regressions reported in <8h

#### 4.4.216, 4.14.173, 4.19.109. 5.4.25, 5.5.9
<!-- sla <24 5 -->
- No regressions reported in <24h

### 2020-03-03
#### 4.19.108, 5.4.24, 5.5.8
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-02-27
#### 4.4.215, 4.9.215, 4.14.172, 4.19.107, 5.4.23, 5.5.7
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-02-18
#### 4.19.105, 5.4.21
<!-- sla <8 2 -->
<!-- regressions 1 -->
- Reported DTBs [build
  failure](https://lore.kernel.org/stable/CA+G9fYsxGkwOQYhuxwOZMwJi=1v4qc+cZ8PZgV6MczFNjo84HQ@mail.gmail.com/)
  on 5.4.21-rc1
- Reported no regressions in <8h

#### 5.5.5
<!-- sla <24 1 -->
<!-- regressions 1 -->
- LDI underflow [reported](https://lore.kernel.org/stable/CA+G9fYtmJkYdUG1wXgUHs3KoLdGQPYFcR8oTzFmDJ5oMXu5kaQ@mail.gmail.com/)
  on 5.5.5-rc1
- Reported no regressions in <24h

### 2020-02-13
#### 4.4.214, 4.9.214, 4.14.171, 4.19.104, 5.4.20, 5.5.4
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2020-02-10
#### 4.19.103, 5.4.19
<!-- sla <8 2 -->
- Reported no regressions in <8h

#### 5.5.3
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported 64K-pages [build
  failure](https://lore.kernel.org/stable/CA+G9fYu4pDFaG-dA2KbVp61HGNzA1R3F_=Z5isC8_ammG4iZkQ@mail.gmail.com/)
  on Arm 64-bits
- Reported no regressions in -rc2

### 2020-02-03
#### 5.4.18
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [build
  regression](https://lists.linaro.org/pipermail/lkft-triage/2020-February/020144.html)
  on Arm 32-bits in <8h
- Reported no regressions in -rc3

#### 4.14.170, 4.19.102, 4.9.213, 5.5.2
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 4.4.213
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2020-01-30
#### 4.19.101, 5.4.17, 5.5.1
<!-- sla <24 3 -->
- Reported no regressions in <24h


### 2020-01-28
#### 4.9.212, 4.14.169
<!-- sla <24 2 -->
<!-- regressions 2 -->
- Reported build regression in [4.9
  pre-rc](https://lore.kernel.org/stable/CA+G9fYs0hK+WaRwdD+64_15Un6fOdEb-RQH0=jZLwJ49nnKK6A@mail.gmail.com/)
  and [4.14
  pre-rc](https://lore.kernel.org/stable/CA+G9fYtJxdSV7SKWU9SDkt9gjznkvPr-z84fe8Xe_YbBD2RRrw@mail.gmail.com/)
- Reported no regressions on rc2 in <24h

#### 4.4.212, 4.19.100, 5.4.16
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-01-24
#### 4.14.168, 4.19.99
<!-- sla <8 2 -->
- Reported no regressions in <8h

#### 5.4.15
<!-- sla <8 1 -->
<!-- regressions 1 -->
- Reported [Perf build
failure](https://lore.kernel.org/stable/CA+G9fYtxRoK6D1_oMf9zQj8MW0JtPdphDDO1NHcYQcoFNL5pjw@mail.gmail.com/)
in <8h
- Reported no regressions for -rc2

### 2020-01-22
#### 4.9.211, 4.14.167, 4.19.98, 5.4.14
<!-- sla <8 4 -->
<!-- regressions 1 -->
- Reported [build
failure](https://lore.kernel.org/lkml/CA+G9fYvKw7ijk-vxA58SR_d0_-3_in28uFG5H6pikypgDpAHPQ@mail.gmail.com)
  on 4.19 pre-rc
- Reported no regressions in <8h

#### 4.4.211
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2020-01-16
#### 4.14.166, 4.19.97, 5.4.13
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2020-01-14
#### 4.4.210, 4.9.210, 4.14.165, 4.19.96, 5.4.12
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2020-01-11
#### 4.4.209, 4.9.209, 4.14.164, 4.19.95, 5.4.11
<!-- sla <24 5 -->
<!-- regressions 1 -->
- Reported an arm [build
  failure](https://lore.kernel.org/lkml/CA+G9fYvSQJ0BVAAMyTk0mViqCdNjtsZCrhhorRnrmcPg98yQVA@mail.gmail.com/)
  on 4.4 pre-rc
- Reported no regressions in <24h

### 2020-01-07
#### 4.14.163, 4.19.94, 5.4.9
<!-- sla <24 3 -->
<!-- regressions 1 -->
- Reported an arm [build
problem](https://lore.kernel.org/lkml/CA+G9fYvMX4gMi6hmTmukzgr1xPsoJsj0WTm=AS3hC5Mq-dLvsQ@mail.gmail.com)
on 5.4 before the release candidate was announced
- Reported no regressions in <24h

### 2020-01-02
#### 4.4.208, 4.14.162, 4.19.93
<!-- sla <48 3 -->
<!-- regressions 1 -->
- Reported a [syscalls
regression](https://lore.kernel.org/netdev/CA+G9fYv3=oJSFodFp4wwF7G7_g5FWYRYbc4F0AMU6jyfLT689A@mail.gmail.com)
before the release candidate was announced
- Reported no regressions in <48h

#### 4.9.208
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 5.4.8
<!-- sla <24 1 -->
<!-- regressions 1 -->
- Reported an [arm64
regression](https://lore.kernel.org/lkml/CA+G9fYuPkOGKbeQ0FKKx4H0Bs-nRHALsFtwyRw0Rt5DoOCvRHg@mail.gmail.com),
resulting in an -rc2
- Reported no regressions in <24h


## 2019

### 2019-12-29
#### 4.14.161, 4.19.92, 5.4.7
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-12-19
#### 4.4.207, 4.9.207, 4.14.160, 4.19.91, 5.4.6
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-12-17
#### 5.3.18, 5.4.5
<!-- sla <24 2 -->
- Reported no regressions in <24h
- Last 5.3.y release

### 2019-12-16
#### 4.14.159, 4.19.90, 5.3.17, 5.4.4
<!-- sla <24 4 -->
- Reported an [arm
regression](https://lore.kernel.org/lkml/CA+G9fYupS7hBtYPauO3A_QM-NQTPgxrOSLF=vu=dfHfdeG01Eg@mail.gmail.com)
on 4.14, resulting in an -rc2
- Reported no regressions in <24h

### 2019-12-11
#### 4.19.89, 5.3.16, 5.4.3
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-12-04
#### 4.4.206, 4.9.206, 4.14.158
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-12-03
#### 4.19.88, 5.3.15, 5.4.2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-11-27
#### 4.14.157, 4.19.87
<!-- sla <8 2 -->
- Reported an arm32 [build
  failure](https://lore.kernel.org/stable/CAEUSe7_KTY_06epzsXW0LFLVASOiLaFb0ZgRg+4bE2kjQXnEZA@mail.gmail.com/)
  and an x86_64 [kernel
  panic](https://lore.kernel.org/stable/CA+G9fYsuM-ALP_EtoFEzJiia26QnUvuKWsH0b-vi43Sp++es6A@mail.gmail.com/)
  in <8h

#### 4.4.204, 4.9.204, 5.4.1
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 5.3.14
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2019-11-22
#### 4.4.203, 4.9.203, 4.14.156, 4.19.86, 5.3.13
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-11-19
#### 4.14.155, 5.3.12
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2019-11-15
#### 4.4.202, 4.9.202
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2019-11-11
#### 4.4.201, 4.9.201, 4.19.84, 5.3.11
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 4.14.154
<!-- sla <24 1 -->
- Reported a [boot
  regression](https://lore.kernel.org/stable/CA+G9fYt=+ymENJg1-m=F3BF8dn7mzxvt5Di34Jw5qFLBHXA5bA@mail.gmail.com/)
- Subsequently reported no regressions in rc2 in <24h

### 2019-11-08
#### 4.4.200, 4.9.200, 4.14.153, 4.19.83, 5.3.10
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-11-04
#### 4.4.199, 4.9.199, 4.14.152, 4.19.82, 5.3.9
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-10-27
#### 4.4.198, 4.9.198, 4.14.151, 4.19.81, 5.3.8
<!-- sla <48 5 -->
- Reported no regressions in <48h

### 2019-10-16
#### 4.4.197, 4.9.197, 4.14.150, 4.19.80, 5.3.7
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-10-10
#### 4.14.149
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.19.79, 5.3.6
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2019-10-06
#### 4.4.196, 4.9.196, 4.14.148, 4.19.78, 5.2.20, 5.3.5
<!-- sla <24 6 -->
- Reported no regressions in <24h
- Noted mismatch in kselftests 5.3.1 vs 5.3.5 for net/udpgso.sh

### 2019-10-03
#### 4.4.195, 4.9.195, 4.19.77, 5.2.19, 5.3.4
<!-- sla <24 5 -->
- Reported no regressions in <24h

#### 4.14.147
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2019-09-29
#### 4.19.76, 5.2.18, 5.3.2
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2019-09-20
#### 4.4.194, 4.9.194, 4.14.146, 4.19.75, 5.2.17, 5.3.1
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2019-09-18
#### 4.14.145
<!-- sla <8 1 -->
- Reported no regressions in <8h

#### 4.19.74, 5.2.16
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2019-09-13
#### 4.4.193, 4.9.193, 4.14.144, 4.19.73, 5.2.15
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-09-08
#### 4.4.192
<!-- sla <48 1 -->
- Reported no regressions in <48h

#### 4.9.192, 4.14.143, 4.19.72, 5.2.14
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-09-04
#### 4.4.191, 4.9.191, 4.14.142, 4.19.70, 5.2.12
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-08-27
#### 4.19.69 5.2.11 4.14.141
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-08-22
#### 4.4.190 4.9.190 4.14.140 4.19.68 5.2.10
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-08-14
#### 4.14.139, 4.19.67, 5.2.9
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-08-09
#### 4.4.189, 4.9.189
<!-- sla <8 1 -->
<!-- sla <48 1 -->
- Reported no regressions on 4.9 in <8h
- Reported no regressions on 4.4 in <48h
  - Delay due to the investigation of failed x86 QEMU jobs, which were due to a
    QEMU upgrade from 2.9 to 3.1 in the lab.

### 2019-08-08
#### 4.14.138, 4.19.66, 5.2.8
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-08-05
#### 4.4.188, 4.9.188, 4.14.137, 4.19.65, 5.2.7
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-08-02
#### 4.4.187, 4.9.187, 4.14.136, 4.19.64, 5.2.6
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-07-29
#### 4.14.135, 4.19.63, 5.2.5
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-07-26
#### 4.19.62, 5.1.21, 5.2.4
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Last 5.1 release

### 2019-07-24
#### 4.19.61, 5.1.20, 5.2.3
<!-- sla <24 3 -->
- Reported no regressions on 4.19 and 5.1 in <24h
- Reported [KVM regression caused by a test
  change](https://lore.kernel.org/stable/CADYN=9+WLxhmqX3JNL_s-kWSN97G=8WhD=TF=uAuKecJnKcj_Q@mail.gmail.com/),
  not a kernel change.

### 2019-07-17
#### 4.4.186, 4.9.186, 4.14.134, 4.19.60, 5.1.19, 5.2.2
<!-- sla <24 6 -->
- Reported no regressions in <24h

### 2019-07-12
#### 4.19.59, 5.1.18, 5.2.1
<!-- sla <24 3 -->
- First 5.2 stable release
- Reported no regressions in <24h

### 2019-07-08
#### 4.4.185, 4.9.185, 4.14.133, 4.19.58, 5.1.17
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-07-02
#### 4.14.132, 4.19.57, 5.1.16
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-06-26
#### 4.4.184, 4.9.184, 4.14.131
<!-- sla <8 2 -->
<!-- sla <24 1 -->
- Single patch release, bringing the TCP fix from 2019-06-22 release back to
  4.4, 4.9, and 4.14
- Reported no regressions in <24h

### 2019-06-24
#### 4.14.130, 4.19.56, 5.1.15
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-06-22
#### 4.19.55, 5.1.14
- No stable-review period; this was a hot fix release for "[Steam does not
  connect on kernels newer than
  2019-06-17](https://github.com/ValveSoftware/steam-for-linux/issues/6326)"

### 2019-06-20
#### 4.4.183, 4.9.183, 4.14.129, 4.19.54, 5.1.13
<!-- sla <24 5 -->
- Reported [pre-rc arm 32/64 build failure on 4.9, suggesting a missing
  backport](https://lists.linaro.org/pipermail/lkft-triage/2019-June/012900.html)
- Reported no regressions in <24h

### 2019-06-17
####  4.14.128, 4.19.53, 5.1.12
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Reported [issue with
  ptrace](https://lore.kernel.org/linux-kselftest/CA+G9fYsFL5AH6dkdN2Qd6UP=wdiXRDR_ioQFPSCq=uUBcmtHXw@mail.gmail.com)
  in pre-rc results
- Noted [v4l2 issue
  fixed](https://lore.kernel.org/lkml/CA+G9fYueq_CFv59aYSguU_yq_nd9zwpcpnJKrqVtx_VOCSZ+9A@mail.gmail.com
  ) in 4.14 thanks to requested backport
- Noted [workqueue.c kernel warning
  fixed](https://lore.kernel.org/lkml/CA+G9fYsUmFrTDHJfS=1vYVfv4BVRZ0AByEOHV6toidAxWuDqDg@mail.gmail.com)
  in 5.1

### 2019-06-17
#### 4.4.182, 4.9.182, 4.14.127, 4.19.52, 5.1.11
- No stable-review period; this was a security release for [TCP
  SACK](https://github.com/Netflix/security-bulletins/blob/master/advisories/third-party/2019-001.md)

### 2019-06-13
#### 4.14.126, 4.19.51, 5.1.10
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-06-09
#### 4.4.181, 4.9.181, 4.14.125, 4.19.50, 5.1.9
<!-- sla <8 5 -->
- Reported no regressions in <8h

### 2019-06-07
#### 4.14.124, 4.19.49, 5.1.8
<!-- sla <24 3 -->
- btrfs compile failure reported against 4.14, fixed in -rc2
- Reported no regressions in <24h

### 2019-06-03
#### 4.19.48, 5.0.21, 5.1.7
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Last 5.0 release

### 2019-05-29
#### 4.9.180, 4.14.123, 4.19.47, 5.0.20, 5.1.6
<!-- sla <24 2 -->
<!-- sla <48 3 -->
- 4.9, 5.0 Reported no regressions in <24h
- 4.14, 4.19, 5.1 Reported no regressions in <48h

### 2019-05-23
#### 4.9.179, 4.14.122, 4.19.46, 5.0.19, 5.1.5
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-05-20
#### 4.9.178, 4.14.121, 4.19.45, 5.0.18, 5.1.4
<!-- sla <24 5 -->
- Reported no regressions on 4.9 and 4.14 in <24h
- Reported ext4 regression
  ([thread](https://lore.kernel.org/lkml/20190520222342.wtsjx227c6qbkuua@xps.therub.org))
  on 4.19, 5.0, 5.1 in <24h
  - Subsequently reported no regressions on 4.19, 5.0, 5.1

### 2019-05-15
#### 4.4.180, 4.9.177, 4.14.120, 4.19.44, 5.0.17, 5.1.3
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-05-14
#### 4.9.176, 4.14.119, 4.19.43, 5.0.16, 5.1.2
- Security release (without normal review round) for Microarchitectural Data
Sampling ([MDS](https://xenbits.xen.org/xsa/advisory-297.html))

### 2019-05-09
#### 4.9.175, 4.14.118, 4.19.42, 5.0.15, 5.1.1
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-05-06
#### 4.9.174, 4.14.117, 4.19.41, 5.0.14
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-05-04
#### 4.19.40, 5.0.13
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2019-05-02
#### 4.9.173, 4.14.116, 4.19.39, 5.0.12
<!-- sla <24 4 -->
- Reported no regressions in <24h
- Noted that v4l2-compliance kernel crash fixed as a result of LKFT report and
  subsequent backport of [ed356f110403 ("media: vivid: check if the cec_adapter
  is
  valid")](https://lore.kernel.org/lkml/20190502143316.137488919@linuxfoundation.org)

### 2019-04-30
#### 4.9.172, 4.14.115, 4.19.38, 5.0.11
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-04-24
#### 4.4.179, 4.9.171, 4.14.114, 4.19.37, 5.0.10
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-04-18
#### 4.9.170, 4.14.113, 4.19.36, 5.0.9
<!-- sla <24 4 -->
- Reported perf-related build failures on
  [4.19](https://lore.kernel.org/lkml/20190418181526.dopckmdnxxnrnkgj@xps.therub.org/)
  and
  5.0[[1](https://lore.kernel.org/lkml/20190418193143.aq2i7g2upngge7e6@xps.therub.org/)][[2](https://lore.kernel.org/lkml/20190418192916.4v7bfjukc3ovei7o@xps.therub.org/)]
- On 4.9 and 4.14, reported no regressions in <24h
- On 4.19 and 5.0, reported no regressions in <24h after perf issues were resolved

### 2019-04-15
#### 4.9.169, 4.14.112, 4.19.35, 5.0.8
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-04-04
#### 4.9.168, 4.14.111, 4.19.34, 5.0.7
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-04-01
#### 4.4.178, 4.9.167, 4.14.110, 4.19.33, 5.0.6
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-03-26
#### 4.9.166, 4.14.109, 4.19.32, 5.0.5
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-03-22
#### 4.4.177, 4.9.165, 4.14.108, 4.19.31, 5.0.4
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-03-18
#### 4.9.164, 4.14.107, 4.19.30, 4.20.17, 5.0.3
<!-- sla <8 3 -->
<!-- sla <24 2 -->
- 4.9, 4.14, 4.19 reported no regressions in <8h
- 4.20, 5.0 reported no regressions in <24h
- Last 4.20 release

### 2019-03-12
#### 4.9.163, 4.14.106, 4.19.29, 4.20.16, 5.0.2
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-03-08
#### 4.19.28, 4.20.15, 5.0.1
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-03-04
#### 4.9.162, 4.14.105, 4.19.27, 4.20.14
<!-- sla <8 1 -->
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2019-02-25
#### 4.9.161, 4.14.104, 4.19.26, 4.20.13
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-02-21
#### 4.4.176, 4.9.160, 4.14.103, 4.19.25, 4.20.12
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-02-18
#### 4.4.175, 4.9.159, 4.14.102, 4.19.24, 4.20.11
<!-- sla <24 3 -->
<!-- sla <8 2 -->
- Reported no regressions on 4.4, 4.9 in <8h
- Reported no regressions on 4.14, 4.19, 4.20 in <24h

### 2019-02-13
#### 4.9.157, 4.14.100, 4.19.22, 4.20.9
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2019-02-11
#### 4.9.156, 4.14.99, 4.19.21
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.20.8
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2019-02-07
#### 4.4.174
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2019-02-04
#### 4.4.173, 4.9.155, 4.14.98, 4.19.20, 4.20.7
<!-- sla <24 5 -->
- LTP/fanotify09 fixed on 4.14.98 due to backport [requested in
  4.14.97](https://lore.kernel.org/lkml/CA+G9fYvh6axRDLWpR3_ozw46JUknsYgEjvYOZfQEUbhroHPVTA@mail.gmail.com/)
- Reported no regressions in <24h

### 2019-01-30
#### 4.9.154, 4.14.97, 4.19.19, 4.20.6
<!-- sla <48 4 -->
- LTP upgraded to 20190115 for all branches
- Reported no regressions in <48h

### 2019-01-24
#### 4.4.172, 4.9.153, 4.14.96, 4.19.18, 4.20.5
<!-- sla <24 5 -->
- kselftest upgraded to 4.20 for all LTS branches
- Reported no regressions in <24h

### 2019-01-21
#### 4.9.152, 4.14.95, 4.20.4
<!-- sla <24 3 -->
- [Reported
  crashes](https://lists.linaro.org/pipermail/lkft-triage/2019-January/008732.html)
  in v4.20.3-15-g5592f5bf010b which were intentional 'canaries' (the canary
  successfully died)
- Reported no regressions in <24h

#### 4.19.17
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2019-01-15
#### 4.4.171, 4.9.151, 4.14.94, 4.19.16, 4.20.3
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-01-11
#### 4.4.170, 4.9.150, 4.14.93, 4.19.15, 4.20.2
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2019-01-07
#### 4.9.149, 4.14.92, 4.19.14, 4.20.1
<!-- sla <24 4 -->
- Reported build failure on 4.9.149-rc1, resulting in -rc3
- Reported build failure on 4.14.92 pre-rc
- Reported build failure on 4.14.92-rc1, resulting in -rc2
- Reported no regressions in <24h


## 2018

### 2018-12-28
#### 4.9.148, 4.14.91, 4.19.13
<!-- sla <8 3 -->
- Reported no regressions in <8h

### 2018-12-20
#### 4.4.169, 4.14.90
<!-- sla <24 4 -->
- Reported no regressions in <24h

#### 4.9.147, 4.19.12
<!-- sla <8 4 -->
- Reported no regressions in <8h

### 2018-12-18
#### 4.19.11
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2018-12-14
#### 4.4.168, 4.9.146, 4.14.89, 4.19.10
<!-- sla <48 4 -->
- Reported no regressions in <48h

### 2018-12-11
#### 4.4.167, 4.9.145, 4.14.88, 4.19.9
<!-- sla <24 4 -->
- Noted that LTP syscalls:mlock203 has been fixed in all environments on
  4.4.167
- Reported no regressions in <24h

### 2018-12-07
#### 4.9.144
<!-- sla <24 1 -->
- [Reported a hugetlbfs regression in
  -rc1](https://lore.kernel.org/lkml/CA+G9fYtzxd9a=OVr=Uwcouqikpe2EB_WJyuBhO7BX96mYWJ1NQ@mail.gmail.com)
  Verified fixed in -rc2.

#### 4.14.87, 4.19.8
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-12-04
#### 4.9.143, 4.14.86, 4.19.7
<!-- sla <24 3 -->
- Reported no regressions in <24h
- [Reported a
  panic](https://lore.kernel.org/lkml/716b46ef-03da-9656-92fd-3823f31f5ce6@linaro.org)
  discovered on 4.19.7 (not a regression) related to TCP tail loss

### 2018-11-29
#### 4.4.166, 4.9.142, 4.14.85, 4.19.6
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-11-26
#### 4.4.165, 4.9.141, 4.14.84, 4.19.5
<!-- sla <48 4 -->
- Reported no regressions in <48h

### 2018-11-21
#### 4.9.139, 4.14.83, 4.19.4
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2018-11-19
#### 4.4.164, 4.9.138, 4.14.82, 4.18.20, 4.19.3
<!-- sla <24 5 -->
- Last 4.18 release
- Reported no regressions in <24h

### 2018-11-11
#### 4.9.137, 4.14.81, 4.18.19, 4.19.2
<!-- sla <24 4 -->
- Rafael Tinoco [reported a build problem on
  4.9](https://lore.kernel.org/lkml/18c91c75-18c8-21a1-3051-65007bd2f30f@linaro.org/),
  resulting in patch f69ffc5d3db8 ("cpupower: Fix coredump on VMWare") being
  dropped.
- Reported no regressions in <24h

### 2018-11-08
#### 4.4.163, 4.9.136, 4.14.80, 4.18.18
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-11-02
#### 4.14.79, 4.18.17, 4.19.1
<!-- sla <48 3 -->
- First 4.19 stable release
- Reported no regressions in <48h

### 2018-10-18
#### 4.4.162, 4.9.135, 4.14.78, 4.18.16
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-10-16
#### 4.9.134, 4.14.77, 4.18.15
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-10-11
#### 4.4.161, 4.9.133, 4.14.76, 4.18.14
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-10-08
#### 4.4.160, 4.9.132, 4.14.75, 4.18.13
<!-- sla <48 4 -->
- Reported no regressions in <48h

### 2018-10-02
#### 4.9.131, 4.14.74, 4.18.12
<!-- sla <48 3 -->
- Reported no regressions in <48h

### 2018-09-27
#### 4.4.159, 4.9.130, 4.14.73, 4.18.11
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-09-24
#### 4.4.158, 4.9.129, 4.14.72, 4.18.10
<!-- sla <24 2 -->
<!-- sla <48 2 -->
- Bisected and [reported
  regressions](https://lore.kernel.org/lkml/20180925090247.GC22609@kroah.com/)
  related to pinctrl on 4.14 and 4.18
- Bisected and [reported
  regression](https://lore.kernel.org/lkml/20180926053029.GA3800@kroah.com/)
  related to rpmsg on db410c that was introduced in 4.14.71
- 4.4, 4.9 <24h
- 4.14, 4.18 <48h

### 2018-09-18
#### 4.4.157, 4.9.128, 4.14.71, 4.18.9
<!-- sla <24 4 -->
- Reported no regressions in <24h
- Reported [build
  failure](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-September/060654.html)
  on pre-rc tree

### 2018-09-13
#### 4.4.156, 4.9.127, 4.14.70, 4.18.8
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-09-07
#### 4.4.155, 4.9.126, 4.14.69, 4.18.7
<!-- sla <48 4 -->
- Reported no regressions on 4.9, 4.14, and 4.18 in <48h
- [Reported regressions related to "userns: move user access out of the
  mutex"](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-September/059118.html)
  on 4.4 in <48h
  - Reported no regressions against 4.4.155-rc3 in <48h

### 2018-09-03
#### 4.4.154, 4.9.125, 4.14.68, 4.18.6
<!-- sla <24 4 -->
- Reported no regressions on 4.4 and 4.9 in <24h
- Reported [build
  failure](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-August/057175.html)
  on pre-rc tree
- 4.18 and 4.14 [BUG
  found](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-September/058162.html)
  on - tlb_flush_mmu
  - Bad patch - mm/tlb, x86/mm: Support invalidating TLB caches for
    RCU_TABLE_FREE
  - Missing patch - mm: move tlb_table_flush to tlb_flush_mmu_free

### 2018-08-27
#### 4.4.153
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-08-23
#### 4.4.152, 4.9.124, 4.14.67, 4.17.19, 4.18.5
<!-- sla <24 5 -->
- Last 4.17 release
- Reported no regressions in <24h

### 2018-08-21
#### 4.4.151, 4.9.123, 4.14.66, 4.17.18, 4.18.4
<!-- sla <24 5 -->
- Reported no regressions in <24h

### 2018-08-16
#### 4.4.149, 4.9.121, 4.14.64, 4.17.16, 4.18.2, 4.4.150, 4.9.122, 4.14.65, 4.17.17, 4.18.3
<!-- sla <48 5 -->
<!-- sla <24 5 -->
- The initial set of RCs were announced on Thursday. On Friday, they were
  tagged for release and the second set of RCs, which contained 1 patch, were
  pushed but not yet announced. On Saturday, we reported our results based on
  both sets of RCs, and both were subsequently released and announced on
  the same day.
- Reported no regressions in <48h
- See related: [Two rounds of stable kernels
  released (LWN)](https://lwn.net/Articles/762938/)

### 2018-08-14
#### 4.4.148, 4.9.120, 4.14.63, 4.17.15, 4.18.1
<!-- sla <48 5 -->
- First 4.18 stable release candidate
- Each branch had multiple pushes, for a total of ~18. This created a high
  queue depth in our build and test environments. After 24h, results were
  reported based on a manual review of the aggregated (but still incomplete)
  data that was available.
- Reported no regressions in <48h
- See related: [Meltdown strikes back: the L1 terminal fault
  vulnerability (LWN)](https://lwn.net/Articles/762570/)

### 2018-08-07
#### 4.4.147, 4.9.119, 4.14.62, 4.17.14
<!-- sla <24 4 -->
- Reported no regressions in <48h

### 2018-08-06
#### 4.4.146, 4.9.118, 4.14.61, 4.17.13
<!-- sla <48 4 -->
- Reported no regressions in <48h

### 2018-08-03
#### 4.9.117, 4.14.60, 4.17.12
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-07-27
#### 4.4.145, 4.9.116, 4.14.59, 4.17.11
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-23
#### 4.4.144, 4.9.115, 4.14.58, 4.17.10
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-20
#### 4.4.143, 4.9.114, 4.14.57, 4.17.9
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-18
#### 4.4.142
<!-- sla <8 1 -->
- Reported no regressions in <8h

### 2018-07-17
#### 4.17.8
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-07-16
#### 4.4.141, 4.9.113, 4.14.56, 4.17.7
<!-- sla <24 1 -->
<!-- sla <48 3 -->
- Reported regression in creat and open syscalls in 4.17.7 within 24h
  - Regression in behavior was intentional, due to backport of
    [0fa3ecd87848](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0fa3ecd87848)
to fix CVE-2018-13405.  [LTP patch
proposed](http://lists.linux.it/pipermail/ltp/2018-July/008724.html).
- All remaining branches subsequently reported in <48h

### 2018-07-10
#### 4.4.140, 4.9.112, 4.14.55, 4.17.6
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-07-06
#### 4.14.54, 4.17.5
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-07-01
#### 4.4.139, 4.9.111, 4.14.53, 4.17.4
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-06-24
#### 4.14.52, 4.16.18, 4.17.3
<!-- sla <24 3 -->
- Reported no regressions in <24h
- Noted Kselftest test case mov_ss_trap_64 is causing kernel panic on
  qemu-system-x86_64 and PASS on real x86_64 hardware. [Bug
  3916](https://bugs.linaro.org/show_bug.cgi?id=3916). This is due to
  the version of the host kernel on the host running QEMU jobs.
- Last 4.16

#### 4.9.110
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-06-18
#### 4.14.51, 4.16.17
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-06-14
#### 4.4.138
<!-- sla <24 1 -->
- Reported no regressions in <24h
- Noted that MAX_LFS_FILESIZE regression introduced in 4.4.137 has been fixed

#### 4.9.109, 4.14.50, 4.16.16, 4.17.2
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-06-12
#### 4.4.137
<!-- sla <48 1 -->
- Reported in <48h
- Regression in MAX_LFS_FILESIZE macro detected by ltp/cve-2011-2496
  - Fixed with backport of 0cc3b0ec23ce ("Clarify (and fix) MAX_LFS_FILESIZE
    macros") in 4.4.138

#### 4.9.108
<!-- sla <24 1 -->
- Reported no regressions in <24h

### 2018-06-09
#### 4.14.49, 4.16.15
<!-- sla <24 2 -->
- Reported no regressions in <24h

#### 4.17.1
<!-- sla <48 1 -->
- Reported no regressions in <48h

### 2018-06-05
#### 4.4.136, 4.9.107
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-06-04
#### 4.9.106, 4.14.48, 4.16.14
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-30
#### 4.9.105, 4.14.46, 4.14.47
- Quick releases that did not go through the normal RC process
- [4.9.105 announcement](https://lwn.net/Articles/756056/)
- [4.14.46 announcement](https://lwn.net/Articles/755966/)
- [4.14.47 announcement](https://lwn.net/Articles/756055/)

### 2018-05-28
#### 4.4.134, 4.9.104, 4.14.45, 4.16.13
<!-- sla <24 4 -->
- Reported no regressions in <24h
- There was a regression noted in ltp/cve-2017-5669, which was expected. See
  [the issue at Github](https://github.com/linux-test-project/ltp/issues/319)
  for details.

### 2018-05-24
#### 4.4.133, 4.9.103, 4.14.44, 4.16.12
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-05-21
#### 4.9.102, 4.14.43, 4.16.11
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-18
#### 4.9.101, 4.14.42, 4.16.10
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-05-14
#### 4.4.132, 4.9.100, 4.14.41, 4.16.9
<!-- sla <24 4 -->
- Reported no regressions in <24h

### 2018-05-08
#### 4.9.99, 4.14.40, 4.16.8
<!-- sla <24 3 -->
- Reported no regressions in <24h


### 2018-04-30
#### 4.4.131, 4.9.98, 4.14.39, 4.16.7
<!-- sla <24 4 -->
- Reported no regressions in <24h


### 2018-04-27
#### 4.4.130, 4.9.97, 4.14.38, 4.16.6
<!-- sla <8 4 -->
- Reported no regressions in <8h


### 2018-04-25
#### 4.14.37
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.16.5
<!-- sla <24 1 -->
- Reported no 4.16.5 regressions in <24h
- Noted regression in 4.16.4 on db410c


### 2018-04-22
- Rare Sunday morning push (first this year), complicated by Monday qa-reports
  scheduled outage.

#### 4.4.129
<!-- sla <24 1 -->
- Reported no regressions in <24h

#### 4.9.96
<!-- sla <24 1 -->
- Reported arm64 boot regression in <24h
- Manual bisection results reported in <48h
- Reported no regressions in <48h on RC3

#### 4.14.36
<!-- sla <48 1 -->
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3

#### 4.16.4
<!-- sla <48 1 -->
- Shuah reported locking issue during boot
- Reported no regressions in <48h on RC3


### 2018-04-17
- All RC builds failed due to change in -next. Fixed via
  [https://github.com/96boards/meta-rpb/pull/166](https://github.com/96boards/meta-rpb/pull/166)

#### 4.9.95
<!-- sla <48 1 -->
- First response in <48h.
- A network driver issue from 4.9.94 was discovered on x15 in the network
  stack, reported at
  [https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html](https://lists.linaro.org/pipermail/linux-stable-mirror/2018-April/038977.html)

#### 4.14.35, 4.15.18, 4.16.3
<!-- sla <24 3 -->
- Reported no regressions in <24h


### 2018-04-11
#### 4.4.128, 4.9.94
<!-- sla <24 2 -->
- Reported no regressions in <24h

### 2018-04-10
#### 4.14.34, 4.15.17, 4.16.2
<!-- sla <24 3 -->
- Reported no regressions in <24h

### 2018-04-06
#### 4.4.127, 4.14.33, 4.16.1
<!-- sla <24 3 -->
- Reported no regressions in <24h

#### 4.9.93
<!-- sla <24 1 -->
- Reported in <24h
- db410c issue detected - [bug 3723;
  cpu-on-off-test](https://bugs.linaro.org/show_bug.cgi?id=3723)

#### 4.15.16
<!-- sla <8 1 -->
- Reported no regressions in <8h


### 2018-03-29
#### 4.4.126, 4.14.32
<!-- sla <24 2 -->
- Report no regressions in <24h

#### 4.9.92, 4.15.15
<!-- sla <48 2 -->
- Report no regressions in <48h


### 2018-03-27
- Initially, all branches had a build error due to /COPYING changing on -next,
  and the checksum of said file being hard coded in our OE recipe.

#### 4.4.125
<!-- sla <48 1 -->
- Build failure on arm64 reported in <8h
- Results in <48h

#### 4.9.91
<!-- sla <24 1 -->
- Results in <24h

#### 4.14.31
<!-- sla <48 1 -->
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h

#### 4.15.14
<!-- sla <48 1 -->
- Regression identified in libhugetlbfs/arm32
  [https://bugs.linaro.org/show_bug.cgi?id=3689](https://bugs.linaro.org/show_bug.cgi?id=3689)
- Results in <48h


### 2018-03-23
#### 4.4.124, 4.9.90
<!-- sla <8 2 -->
- Results in <8h

#### 4.14.30, 4.15.13
<!-- sla <8 2 -->
- Build failed on arm32
- First response in <8h
- No results for hikey or db410c due to offline devices and limited support
  availability due to Connect (arm64 was still covered by juno devices)


### 2018-03-20
#### 4.4.123
<!-- sla <8 1 -->
- Failed to build on arm32
- First response in <8h

#### 4.9.89
<!-- sla <8 1 -->
- Failed to build on arm32,arm64.. 6 patches causing build issues
- First response in <8h

#### 4.14.29
<!-- sla <24 1 -->
- Results in <24h

#### 4.15.12
<!-- sla <24 1 -->
- Results in <24h


### 2018-03-16
#### 4.4.122, 4.9.88
<!-- sla <24 2 -->
- Results in <24h

#### 4.14.28
<!-- sla <8 1 -->
- rc1: arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h

#### 4.15.11
<!-- sla <8 1 -->
- arm/arm64 build error reported
- rc3: arm build error reported
- First response in <8h


### 2018-03-13
- -rc1 contained arm64 boot breakage reported (as previously seen on next and
  mainline per
  [https://bugs.linaro.org/show_bug.cgi?id=3676](https://bugs.linaro.org/show_bug.cgi?id=3676)).
  Greg pulled the patch and released an -rc2.

#### 4.14.27, 4.15.10
<!-- sla <48 2 -->
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
<!-- sla >48 4 -->
- Results in <72h


### 2018-03-07
- Self induced snapshots.linaro.org outage during build

#### 4.14.25, 4.15.8
<!-- sla <24 2 -->
Results in <24h


### 2018-03-02
- git.yoctoproject.org outage caused build delays in 4.4 and 4.14
- db410c and qemu x86_64 reported for first time

#### 4.4.120, 4.9.86, 4.14.24
<!-- sla <24 3 -->
- Results in <24h


### 2018-02-26
- Builds took ~2h. Needed to rebuild 4.9/hikey for 'sstate_create_package'
  infrastructure failure.

#### 4.4.119, 4.9.85, 4.14.23, 4.15.7
<!-- sla <24 4 -->
- Results in <24h


### 2018-02-23
- All builds worked first time
- Limited availability (Friday evening push (UTC))
  - multiple pushes

#### 4.4.118, 4.14.22
<!-- sla <8 2 -->
- Results in <8h

#### 4.9.84, 4.15.6
<!-- sla <48 2 -->
- Results in <48h


### 2018-02-21
- Issue with lkft.v.l.o being slow. Squad had issues submitting jobs and
  fetching results.

#### 4.4.117, 4.14.21
<!-- sla <8 2 -->
- Results in <8h

#### 4.9.83
<!-- sla <8 1 -->
- Results in <8h
- arm64 legitimate build failure, reported, patch dropped

#### 4.15.5
<!-- sla <8 1 -->
- Results in <8h
- infrastructure build failure on x15 "Function failed: sstate_create_package"


### 2018-02-15
- Builds took 7 hours. 13 total failures.
  - Some hikey failures caused by breakage introduced same day
  - Others caused by long standing git-related issues in jenkins environment
    - Fixed (hopefully permanently) with 'bitbake -c cleanall edk2-hikey'

#### 4.4.116, 4.14.20
<!-- sla <24 2 -->
- Results in <24h

#### 4.9.82
<!-- sla <24 1 -->
- Results in <24h
- Noted getrusage04 intermittent failure
  [https://bugs.linaro.org/show_bug.cgi?id=3507](https://bugs.linaro.org/show_bug.cgi?id=3507)

#### 4.15.4
<!-- sla <24 1 -->
- Results in <24h
- Noted netns_netlink failure on x15. See
  [https://bugs.linaro.org/show_bug.cgi?id=3484](https://bugs.linaro.org/show_bug.cgi?id=3484)


### 2018-02-09
- LTP was upgraded from 20170929 to 20180118, causing a falsely reported
  regression in fanotify06.

#### 4.9.81, 4.14.19, 4.15.3
<!-- sla <8 3 -->
- Results in <8h


### 2018-02-05
#### 4.14.18, 4.15.2
<!-- sla <8 2 -->
- Results in <8h


### 2018-02-02
#### 4.4.115, 4.9.80, 4.14.17
<!-- sla <8 3 -->
- Results in <8h

#### 4.15.1
<!-- sla <24 1 -->
- Results in <24h
- This was the first 4.15 RC.
- Report showed false failures because the new branch was not yet baselined,
  and also because we were running 4.14 kselftest against 4.15.
- 4.15 build was submitted for review but not yet merged when the branch was
  released, causing last minute Friday afternoon scramble (thanks Daniel).
  Should have had it building and baselined ahead of time.


### 2018-01-29
#### 4.4.114, 4.9.79, 4.14.16
<!-- sla <24 3 -->
- Results in <24h


### 2018-01-22
#### 4.4.113
<!-- sla <24 1 -->
- Results in <24h
- Issue with 'main.sh' kselftest on hikey due to missing patch on linaro's
  hikey tree. Resolved.

#### 4.9.78, 4.14.15
<!-- sla <24 2 -->
- Results in <24h


### 2018-01-15
- Greg requested verifying bpf in 4.4 and 4.9 but we did not have a good way to
  do so. Tests aren’t backported. We are looking at getting bcc running on
  hikey, as a means of manual verification.

#### 4.4.112
<!-- sla <24 1 -->
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 5 RCs

#### 4.9.77
<!-- sla <24 1 -->
- Results in <24h
- 6 RCs

#### 4.14.14
<!-- sla <24 1 -->
- Results in <24h
- Build (infrastructure) failure with hikey, requiring manual intervention.
- 4 RCs

### 2018-01-08
#### 4.4.111
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 4 times

#### 4.9.76
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 5 times

#### 4.14.13
<!-- sla <24 1 -->
- Results in <24h
- Release candidate republished 3 times


### 2018-01-06
#### 4.14.12
<!-- sla <24 1 -->
- Results in <24h.
- Build failure with x15, requiring manual intervention.


### 2018-01-05
#### 4.4.110
<!-- sla <24 1 -->
- Results in <24h.
- LTP poll02 failure on x15. Not reproducible. Not considered a regression.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3566))

#### 4.9.75
<!-- sla <24 1 -->
- Results in <24h.
- Build failure with x15, requiring manual intervention.

### 2018-01-01
#### 4.4.109, 4.9.74
<!-- sla <8 2 -->
- Results in <8h.

#### 4.14.11
<!-- sla <8 1 -->
- Results in <8h.
- kselftest ldt_gdt_64 failure on x86, due to mismatch between kselftest
  version and kernel version.
  ([link](https://bugs.linaro.org/show_bug.cgi?id=3564))
