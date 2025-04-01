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
    deliver results in less than 48 hours.

    The 4 supported SLA values are:
      - >48h (missed sla)
      - <48h (less than 48h, but more than 24)
      - <24h (less than 24h, but more than 8)
      - <8h
-->

## 2025
### 2025-01-06
#### Reported regression (<48h)
- 6.6.70-rc1, [allmodconfig builds on arm64]( https://lore.kernel.org/stable/CA+G9fYuJA5eUxunLVyws_J6YNuZdyVUjTGGgGyPwFMgCHUpsnA@mail.gmail.com)
- 5.10.233-rc1, [build warnings on arm64 and arm](https://lore.kernel.org/stable/CA+G9fYss0LJRq6rzg0g_oG2+c_TZ=i3uNnq7DuWWfm4c5YkOpQ@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.12.9-rc1](https://lore.kernel.org/stable/CA+G9fYtyKfP2pqMc8hOM=wd3hjbR5ffEA=4Q7VWZECbNP-SBaQ@mail.gmail.com), [5.15.176-rc1](https://lore.kernel.org/stable/CA+G9fYvTeERvkq-k-fFVzrqzFjG=7i-mro0MXQ-JS_rPubtbmA@mail.gmail.com), [6.1.124-rc1](https://lore.kernel.org/stable/CA+G9fYusD4gyjrt7AgrUUbMVdW5vpiKx6vO4NK1wZSVwBohtQg@mail.gmail.com), [5.4.289-rc1](https://lore.kernel.org/stable/CA+G9fYt4c86Bf_+SVYL0tyafyJC6+3JcyA_vmrzSYgfmeQLuAg@mail.gmail.com)

## 2024
### 2024-12-30
#### Reported no regressions (<48h)
- [6.12.8-rc1](https://lore.kernel.org/stable/CA+G9fYs-YvKJsGp-7+YdWQgoxTkAh0kUsOO0aXYhLHPTZAzzyQ@mail.gmail.com), [6.6.69-rc1](https://lore.kernel.org/stable/CA+G9fYu+yy9g1McuZmB0TfCOAQBg3XiS=eo9Cm=21imciqFvMw@mail.gmail.com), [6.1.123-rc1](https://lore.kernel.org/stable/CA+G9fYvTpk-FRH1Su1C=YGrz_Lihi1UONjUOJL4zTsJgco4JjA@mail.gmail.com)

### 2024-12-23
#### Reported regression (<24h)
- 6.12.7-rc1, [arm64 selftests kvm kvm_set_id_regs fail](https://lore.kernel.org/stable/CA+G9fYt+k1m9oTuuZaGyTXqg+EKsSTnmfsc2HYijDWmEjx9xFg@mail.gmail.com)

#### Reported no regressions (<24h)
- [6.6.68-rc1](https://lore.kernel.org/stable/CA+G9fYut6mGnMQWzbyhgCEgb8CTjWv7STOVkcBhsi7nk2DhJ2g@mail.gmail.com), [6.1.122-rc1](https://lore.kernel.org/stable/CA+G9fYsEhViu4e24r+atZA7ideY+n=k=gtGGXkQXJtaVOckp7w@mail.gmail.com)

### 2024-12-17
#### Reported regression (<48h)
- 6.12.6-rc1, [i386 builds failed](https://lore.kernel.org/stable/CA+G9fYu0_o6PXGo6ROFmGC1L=sAH9R+_ofw0Hhg8fZxrPRBKLg@mail.gmail.com)
- 6.1.121-rc1, [i386 builds failed](https://lore.kernel.org/stable/CA+G9fYuqP-XiWQAvj=prtSGVoSipjCzYeaEET=gZSpvjb0LiMg@mail.gmail.com)
- 6.6.67-rc1, [i386 builds failed](https://lore.kernel.org/stable/CA+G9fYsjdC1hV5f6Mei=46D0Fe5_jsjujxq7pGjvDPZ1ij7d1g@mail.gmail.com)

#### Reported regression (<24h)
- 5.10.232-rc1, [i386 builds failed](https://lore.kernel.org/stable/CA+G9fYvWDOkOn2n6n1fasib6g-nEH3Ev88eZfM3mwjr+=f8-XA@mail.gmail.com)
- 5.15.175-rc1, [i386 builds failed](https://lore.kernel.org/stable/CA+G9fYv8Nbwosfygns-xbEPqF0bWeoJTodJr=o0NUUaAF60CuA@mail.gmail.com)

#### Reported no regressions (<48h)
- [5.4.288-rc1](https://lore.kernel.org/stable/CA+G9fYvTZPHivc_QD=Y4o=3o7OBCqa_f5BHUpT-FGjBJnifsLw@mail.gmail.com)

### 2024-12-13
#### Reported regression (<48h)
- 6.1.120-rc2, [Dragonboard 845c boot fail](https://lore.kernel.org/stable/CA+G9fYv6RgaCka6p7-wcsFaOfjEXDeXWNCpYP0T8aGjSiyOK+A@mail.gmail.com)

#### Reported no regressions (<48h)
- [5.4.287-rc2](https://lore.kernel.org/stable/CA+G9fYvcGBDRDqY7KzM_RrsY+G2n-nj9S5GT6vKYn+MYxNGmGg@mail.gmail.com), [6.12.5-rc2](https://lore.kernel.org/stable/CA+G9fYtcVtLEWtv3N1e0jtycdSomHEZ8+LV0k-P8weZUnX10dg@mail.gmail.com)
### 2024-12-12
#### Reported regression (<48h)
- 6.1.120-rc1, [powerpc build gcc-13-tqm8xx_defconfig fail ](https://lore.kernel.org/stable/CA+G9fYu+u4a+63vCCeLo1LdWhvK75B9j-znx7kp2ZVtzK_H4AQ@mail.gmail.com)
- 6.12.5-rc1, [riscv builds fail](https://lore.kernel.org/stable/CA+G9fYuX2BsEOCZPC+2aJZ6mEh10kGY69pEQU3oo1rmK-8kTRg@mail.gmail.com)

#### Reported regression (<24h)
- 5.15.174-rc1, [parisc defconfig fail](https://lore.kernel.org/stable/CA+G9fYtbkj_VWQYjPsojO66rRgbcovrWSCDsgcp6PGqWEzGxgw@mail.gmail.com)
- 5.4.287-rc1, [arm build fail](https://lore.kernel.org/stable/CA+G9fYv+i=T0KeWvxhiCOFiMSmpUYeUOWwn_YunEaYTi8oA_Ww@mail.gmail.com)

#### Reported no regressions (<24h)
- [6.6.66-rc1](https://lore.kernel.org/stable/CA+G9fYv-qg_TbgP9o_VyBcBAYfecxFvRPjq0w3SFX_PvJWDbkw@mail.gmail.com)

#### Reported no regressions (<8h)
- [5.10.231-rc1](https://lore.kernel.org/stable/CA+G9fYsERkXC7u13A97Yhc_iHup-5uNsFDz_d41=NVpX+QdOBQ@mail.gmail.com)

### 2024-12-06
#### Reported no regressions (<48h)
- [6.6.64-rc1](https://lore.kernel.org/stable/CA+G9fYtsYhXwhewSJUnGAwFmSa5AnOvuREZiOGRCsOUWb6Kx3Q@mail.gmail.com), [6.12.4-rc1](https://lore.kernel.org/stable/CA+G9fYswik7dS-Sy-gmZZKT6bdxcxT1eRn4=994VV5R0RGfDxQ@mail.gmail.com)
### 2024-12-03
#### Reported regression (<24h)
- 4.19.325-rc1, [arm build fail ](https://lore.kernel.org/stable/CA+G9fYtXS+Ze5Y8ddtOjZPiYP1NEDhArQhEJYfS3n5pcLdn9Hw@mail.gmail.com)

#### Reported regression (<48h)
- 6.11.11-rc1, [allmodconfig builds failed on arm64, arm, riscv and x86_64](https://lore.kernel.org/stable/CA+G9fYtNvEDcUEuv=QFC84y+pXY1UszoRYOitJztCApLV7-psg@mail.gmail.com)
- 6.12.2-rc1, [allmodconfig builds failed on arm64, arm, riscv and x86_64](https://lore.kernel.org/stable/CA+G9fYu21yqTvL428TFueMJ1uU1H_u8Vc470dER2CTrNK=Js0g@mail.gmail.com)

### 2024-11-20
#### Reported regression (<48h)
- 6.1.119-rc1, [parisc builds fail](https://lore.kernel.org/stable/CA+G9fYt=ntvdU30W2jZRSUcAqzrKyuCfDH3nDwRB3STd6uOnPw@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.11.10-rc1](https://lore.kernel.org/stable/CA+G9fYsaZNm2VKnm10tR4dy0DfnE3_FQtkj-E9-SPR-RacXxcw@mail.gmail.com), [6.12.1-rc1](https://lore.kernel.org/stable/CA+G9fYsuQ_F0H8ByKiNazExpVbPGNrZ8amUoXCjc_njwng2Vpg@mail.gmail.com), [6.6.63-rc1](https://lore.kernel.org/stable/CA+G9fYvy3d162b99zNCXug+m=AUGJ7hhoeDNrOFDjHcxqm_XJQ@mail.gmail.com)

### 2024-11-15
#### Reported regression (<48h)
- 5.4.286-rc1, None (SUPERSEEDED)

#### Reported no regressions (<48h)
- [4.19.324-rc1](https://lore.kernel.org/stable/CA+G9fYvzExabWp94wW9dT=_KWLUWjTJvT4ZtoiJvFvGyxjW9Gg@mail.gmail.com), [6.11.9-rc1](https://lore.kernel.org/stable/CA+G9fYuzB_AvjT7tZQy+tH257ztf--cs8Y+y0wF25RuruOS+cw@mail.gmail.com), [5.10.230-rc1](https://lore.kernel.org/stable/CA+G9fYtsjLQOQFJsK8BBvEe03B+PJp0dSjpobbT+65Qhgaeoxw@mail.gmail.com), [6.6.62-rc1](https://lore.kernel.org/stable/CA+G9fYuZYe7_AfPgjPMqPL9xgAq90kA5T272B3irJ-hLiM0Acg@mail.gmail.com), [6.1.118-rc1](https://lore.kernel.org/stable/CA+G9fYtKyZtmgoxM+wNws=9WZFc1eMJuM0H0RQoAm+BgKfkSNQ@mail.gmail.com), [5.15.173-rc1](https://lore.kernel.org/stable/CA+G9fYvjgM=J2KCcRPD5xQk6MYMaw4DVPN_-OFhHqBYY-DV-5g@mail.gmail.com), [5.4.286-rc2](https://lore.kernel.org/stable/CA+G9fYtdzDCDP_RxjPKS5wvQH=NsjT+bDRbukFqoX6cN+EHa7Q@mail.gmail.com)

### 2024-11-12
#### Reported no regressions (<48h)
- [6.11.8-rc1](https://lore.kernel.org/stable/CA+G9fYsT27U3v0cDOxRCE53qTDC13f8Tx2QiueD4bWOe-N-nNw@mail.gmail.com), [6.6.61-rc1](https://lore.kernel.org/stable/CA+G9fYuvsU3hfJd_3tDsv1HpB_hBPTpzcyGqJ1bRhUcwmhKMjw@mail.gmail.com), [6.1.117-rc1](https://lore.kernel.org/stable/CA+G9fYvtaB2Zmr6mWr03p2WF-ozf6JVSZVyPj03qEZHt8_VzyQ@mail.gmail.com), [5.15.172-rc1](https://lore.kernel.org/stable/CA+G9fYtM3KGHE8boa1nvhJn-JNTtMob93KGubiXA+f-ak0OSGQ@mail.gmail.com)

### 2024-11-07
#### Reported no regressions (<24h)
- [4.19.323-rc2](https://lore.kernel.org/stable/CA+G9fYs8jLY9t=u+rBJ8e18LbpB10ortb6q8j0r8yRPw6-J=JA@mail.gmail.com)
- [6.11.7-rc2](https://lore.kernel.org/stable/CA+G9fYtr2V+noAMBzyCafOMOeZf33bo6DKMcGOqsH0-C+0xPEw@mail.gmail.com)

#### Reported no regressions (<8h)
- [5.4.285-rc2](https://lore.kernel.org/stable/CA+G9fYuXK1LYzu++g6LUBOEhbOMQSO9Zz6AhM7100NMMEZLuAg@mail.gmail.com)

### 2024-11-06
#### Reported regression (<48h)
- 5.4.285-rc1, [arm builds fail](https://lore.kernel.org/stable/CA+G9fYvqfxYX8r1rMcaiaq-K0xuVf4-pRrS77ovNMHNiA+FPkA@mail.gmail.com)
- 4.19.323-rc1, [arm builds fail](https://lore.kernel.org/stable/CA+G9fYu-X4w24M9NgwWU4=vOsMxq8CzmCGo+BC-=t9e-R0NwnQ@mail.gmail.com)
- 6.11.7-rc1, [mips builds fail](https://lore.kernel.org/stable/CA+G9fYtjpUJFFV=FdqvW+5K+JL5ZYN4sPfVDjQovqzd7cib39w@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.6.60-rc1](https://lore.kernel.org/stable/CA+G9fYvk8HbUW7j9bDUm1oDZrQCd6bnvRozAE=ZgEk-vhLvKOA@mail.gmail.com), [6.1.116-rc1](https://lore.kernel.org/stable/CA+G9fYs3Jb0RsnX=uTwVi00HPZBCyOF0kZQ689_Q45e+R408iA@mail.gmail.com)

#### Reported no regressions (<8h)
- [5.10.229-rc1](https://lore.kernel.org/stable/CA+G9fYvi8fy2muefm9GbpO806oTSBQjmoEQriWD0OyKU4s_K+Q@mail.gmail.com)

#### Reported no regressions (<24h)
- [5.15.171-rc1](https://lore.kernel.org/stable/CA+G9fYtgOA-5y73G1YEixQ+OjmG=awBQjdKjK+b0qLNYvAAVpQ@mail.gmail.com)

### 2024-10-28
#### Reported regression (<48h)
- 6.11.6-rc1, [selftests: kvm: vgic_init test](https://lore.kernel.org/stable/CA+G9fYu-tpwX=09=VOjniFnBz3MSXpaHb_gir2AqyNpihERT2Q@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.6.59-rc1](https://lore.kernel.org/stable/CA+G9fYsK_qFQ1Y5UwmDvgLGp9KDapucDraWBTjPx+Xmi+wLx+w@mail.gmail.com), [6.1.115-rc1](https://lore.kernel.org/stable/CA+G9fYstzcgi3wVqxSAnFt5P_HqpVqM-Q8k8ot9oqQN=Tx8bEw@mail.gmail.com), [5.15.170-rc1](https://lore.kernel.org/stable/CA+G9fYssH1ZMstdHPMGtD6+VmJnVYTZL8hPPyRWEEf7Vasm2Tg@mail.gmail.com)

### 2024-10-21
#### Reported regression (<48h)
- 6.1.114-rc1, [arm allmodconfig clang build fail ](https://lore.kernel.org/stable/CA+G9fYtXZfLYbFFpj25GqFRbX5mVQvLSoafM1pT7Xff6HRMeaA@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.11.5-rc1](https://lore.kernel.org/stable/CA+G9fYvfZEBkAwJ9AMFcfnyMNfqDnce4xk-v6VkKywV3Y7t2qA@mail.gmail.com), [6.6.58-rc1](https://lore.kernel.org/stable/CA+G9fYsZboqX-V7-uyuSHH9FpOQXX4ZKH=0hXq0nea61tPNN2Q@mail.gmail.com), [5.15.169-rc1](https://lore.kernel.org/stable/CA+G9fYsmcUHgwL44T8cWdOr=qs0NyNZjP2kotKVOi=cGXt=ZQQ@mail.gmail.com), [5.10.228-rc1](https://lore.kernel.org/stable/CA+G9fYtbGC1caN27L6V=NC40o0oaPCzfgvDtkb8o6qPSaiKMNA@mail.gmail.com)

### 2024-10-15
#### Reported regression (<48h)
- 5.15.168-rc1, [LTP syscalls fanotify22 test failed](https://lore.kernel.org/stable/CA+G9fYtTO8QbKEhggzOk-n+pBk5pEHenCfgs2RdQd=Ztsi+hnA@mail.gmail.com)
- 5.10.227-rc1, [clang-19 builds failed on arm, i386 and x86](https://lore.kernel.org/stable/CA+G9fYuZun789CY2rZ6WqxzdFswDYCf_fMpT9d-4M0bzJfJrhw@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.11.4-rc2](https://lore.kernel.org/stable/CA+G9fYuWHakzSbBeLWeL=0A47j1TXJY+eDt_cRRz7zzQ_bF+Qw@mail.gmail.com), [6.6.57-rc2](https://lore.kernel.org/stable/CA+G9fYtmRGt9pXfRk=Bfnac7gbotdw8PcEsSOmD0nUefYHuBpQ@mail.gmail.com), [6.1.113-rc2](https://lore.kernel.org/stable/CA+G9fYtqUBXiXPm1kzEabqSzQy41Bh-OieCgnvNi5jVnHh4dpQ@mail.gmail.com)

### 2024-10-14
#### Reported regression (<48h)
- 6.1.113-rc1, [arm build fail](https://lore.kernel.org/stable/CA+G9fYv7K3-4M0unzJz_AGG1kySTkDYMaqXXgCFisd2j0iPCEg@mail.gmail.com)
- 6.11.4-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYsPPmEbjNza_Tjyf+ZweuHcjHboOJfHeVSSVnmEV2gzXw@mail.gmail.com)
- 6.6.57-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYs-BXW2J-n1R7VO2j-qqpP=3nzYC4a2C7=-fnLTW8OR8w@mail.gmail.com)

### 2024-10-08
#### Reported regression (<48h)
- 6.10.14-rc1, [ LTP syscalls fanotify22 ]( https://lore.kernel.org/stable/CA+G9fYv=Ld-YCpWaV2X=ErcyfEQC8DA1jy+cOhmviEHGS9mh-w@mail.gmail.com)
- 6.6.55-rc1, [ LTP syscalls fanotify22 ](https://lore.kernel.org/stable/CA+G9fYttfwQ7s6P2RLc6QA81_DYi5WrpWtiM4gK7_RDG69=6AA@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.11.3-rc1](https://lore.kernel.org/stable/CA+G9fYtKrtzVZve=R_QiUUya5KUpAYn2R5andSk+ghPU21z3Dw@mail.gmail.com)

### 2024-10-03
#### Reported no regressions (<48h)
- [6.6.54-rc2](https://lore.kernel.org/stable/CA+G9fYvAAKwe_LMb+cXnLoDE1a_Ji2o+C6j=ud64ET3wbiZTBA@mail.gmail.com)

### 2024-10-02
#### Reported regression (<48h)
- 6.6.54-rc1, [selftests bpf build fail](https://lore.kernel.org/stable/CA+G9fYtcs_bFp_N+Q59Nn_bM2AT0Xm4utdh6vT+Cdvj6D=VP+w@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.11.2-rc1](https://lore.kernel.org/stable/CA+G9fYtrdanK_XVgTeT=Chj7TL3xaprsr1Kw4yKb6Gs-BjSSpA@mail.gmail.com), [6.10.13-rc1](https://lore.kernel.org/stable/CA+G9fYuv=ZKfhFTcykDDit2DKVJSsjeVP4=c8PG7t4-nuKKcgw@mail.gmail.com)

### 2024-09-27
#### Reported no regressions (<48h)
- [6.6.53-rc1](https://lore.kernel.org/stable/CA+G9fYv5yR4TQV-H9O=YZS-bCkHkXqOfQ9qut3U2hCiH+ni1Eg@mail.gmail.com), [6.10.12-rc1](https://lore.kernel.org/stable/CA+G9fYs4GKpXUSFUTage1LDFngjEGZFrWfMMo2oBe0wuWVPUBg@mail.gmail.com), [6.1.112-rc1](https://lore.kernel.org/stable/CA+G9fYs9Z-yukxgVCVwgOKM0Q0N0hZecqYhWb9BNsrzeU8NxHQ@mail.gmail.com), [6.11.1-rc1](https://lore.kernel.org/stable/CA+G9fYskpf=rGsmQ2QCZ2GVvBEuO5Fc5ROWuu4a6udSB9c22GA@mail.gmail.com)

### 2024-09-16
#### Reported regression (<48h)
- 6.10.11-rc1, [s390 builds failed](https://lore.kernel.org/stable/CA+G9fYvw7WaDjKp+v_snxnhgEzUDD1xZ9udJpqQcgAoQZXK5Vw@mail.gmail.com)
- 6.6.52-rc1, [s390 builds failed](https://lore.kernel.org/stable/CA+G9fYv+OXhNPn87X4O9w8-HzGP04USge-et0b3Y4ncU9tussg@mail.gmail.com)

#### Reported regression (<24h)
- 6.1.111-rc1, [kernel warnings on a Qualcomm db845c ](https://lore.kernel.org/stable/CA+G9fYtsjFtddG8i+k-SpV8U6okL0p4zpsTiwGfNH5GUA8dWAA@mail.gmail.com)

### 2024-09-11
#### Reported no regressions (<48h)
- [5.10.226-rc2](https://lore.kernel.org/stable/CA+G9fYsw_CwZT81J08ZzurfXx1aOQqHvVqro2tp2FdqU69U-NA@mail.gmail.com), [5.15.167-rc2](https://lore.kernel.org/stable/CA+G9fYuRE8=WkdmpYpP+c8htu32oegFnJEv5CqbxqiUnGE_aXA@mail.gmail.com), [5.4.284-rc2](https://lore.kernel.org/stable/CA+G9fYufxhcw_+22TEMu4Ae9V7JbGbK38UZSE39+vB1Bf9vwaQ@mail.gmail.com), [6.1.110-rc2](https://lore.kernel.org/stable/CA+G9fYvzUeEMf98sCDqwWDYksYgvRfpgTABEcWUvmjwE-aGa1w@mail.gmail.com)

### 2024-09-10
#### Reported regression (<48h)
- 6.1.110-rc1, [SuperH defconfig build  fail](https://lore.kernel.org/stable/CA+G9fYufdd0MGMO1NbXgJwN1+wPHB24_Nrok9TMX=fYKXaxXLA@mail.gmail.com)
- 4.19.322-rc1, None (SUPERSEEDED)

#### Reported no regressions (<48h)
- [6.10.10-rc1](https://lore.kernel.org/stable/CA+G9fYt4R3YDoF6F1eLGTYKtUH2ucoSjDwf50sf0QZF+fx2=OA@mail.gmail.com), [6.6.51-rc1](https://lore.kernel.org/stable/CA+G9fYuJF11wVcMyUX6HL6T7OiMf3X_RFrMgpv808KH=UYGA9A@mail.gmail.com), [5.15.167-rc1](https://lore.kernel.org/stable/CA+G9fYstZOHMFx9OHTseUTpXEZtRMSEujTMT+frbdSzQmm++jw@mail.gmail.com), [5.4.284-rc1](https://lore.kernel.org/stable/CA+G9fYsutqeYt4YZnEQR++7N6pmN4BqVnZLZgyKpCZm85y+-Ug@mail.gmail.com), [5.10.226-rc1](https://lore.kernel.org/stable/CA+G9fYuLkVvqToMRRDri2Co+EavEezCFeBmT9YkVTTqT+HrnJw@mail.gmail.com), [4.19.322-rc2](https://lore.kernel.org/stable/CA+G9fYtxOA7Ee1omhLT-fMaaBPqNEZQYVHXovLtGgv9jbuxQLA@mail.gmail.com)

### 2024-09-05
#### Reported regression (<48h)
- 6.10.9-rc1, [arm64 build fail](https://lore.kernel.org/stable/CA+G9fYsppY-GyoCFFbAu1q7PdynMLKn024J3CenbN12eefaDwA@mail.gmail.com)
- 6.6.50-rc1, [arm64 defconfigs build fail](https://lore.kernel.org/stable/CA+G9fYtziUjN_J4fdwDH4Sf0RguW4h3X9OEO=ZvJzt3dh9hnaw@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.1.109-rc1](https://lore.kernel.org/stable/CA+G9fYtr3bs6RbBgLc10QJ2c2Uh4EHiif7bFOD0J+p4rEoCukw@mail.gmail.com), [6.10.9-rc2](https://lore.kernel.org/stable/CA+G9fYvciWJimpEX+0iRRtwC8qNKx7n3U65aqdNrMWRQLwtFNw@mail.gmail.com), [6.6.50-rc2](https://lore.kernel.org/stable/CA+G9fYtWZSJ5G7rEoQ-QLKAEzQBYRKyGyRFhv+2V6QbL3kGMXg@mail.gmail.com)

### 2024-09-01
#### Reported regression (<48h)
- 5.15.166-rc1, [Powerpc defconfig build](https://lore.kernel.org/stable/CA+G9fYu3+16JcZbAJY0SXoqnMDOMXr8S136Zb4ONh7WpD-5-Hw@mail.gmail.com)
- 4.19.321-rc1, [Powerpc defconfig build](https://lore.kernel.org/stable/CA+G9fYvS_NL7bcKkOJEX2irsBHcrYHz_yOOU84T9V9XB7n92RQ@mail.gmail.com)
- 5.4.283-rc1, [Powerpc defconfig build](https://lore.kernel.org/stable/CA+G9fYszuNTqPzsX7cw-2_7D0tFUMeroVKeza4gASmUEbcxcqw@mail.gmail.com)
- 5.10.225-rc1, [Powerpc defconfig build](https://lore.kernel.org/stable/CA+G9fYuK+=YW6F+mBMeHAZoUrQQS6-AgAezRfQGEpZui4JUepg@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.8-rc1](https://lore.kernel.org/stable/CA+G9fYvYmpUeain222FMmDCQ=N5qMrBoza=fO-jhNP5romhM3w@mail.gmail.com), [6.6.49-rc1](https://lore.kernel.org/stable/CA+G9fYufnSwnzUdu9wNfSXAw=u6CPnvhYWcNpX8V41h_XatjDw@mail.gmail.com), [6.1.108-rc1](https://lore.kernel.org/stable/CA+G9fYuyyJO8hq-s0Fiygmdmu0_SaNQouhPv5o5mq3_oAeT7pQ@mail.gmail.com)

### 2024-08-27
#### Reported regression (<48h)
- 6.6.48-rc1, [tinyconfig builds fail](https://lore.kernel.org/stable/CA+G9fYuibSowhidTVByMzSRdqudz1Eg_aYBs9rVS3bYEBesiUA@mail.gmail.com)
- 6.1.107-rc1, [tinyconfig builds fail](https://lore.kernel.org/stable/CA+G9fYuS47-zRgv9GY3XO54GN_4EHPFe7jGR50ZoChEYeN0ihg@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.7-rc1](https://lore.kernel.org/stable/CA+G9fYvH=+SD+UxZ0koz4rtm4XxHfG--oZZCpD0svEcODZ9pjQ@mail.gmail.com)

### 2024-08-18
#### Reported no regressions (<48h)
- [6.10.6-rc3](https://lore.kernel.org/stable/CADYN=9JBg6MikjzmiZboKNXviRLpV7v7fwTg4fvXDwkok9+gTQ@mail.gmail.com)

### 2024-08-17
#### Reported regression (<48h)
- 5.10.224-rc3, [S390 build fail](https://lore.kernel.org/stable/CADYN=9++QDcougZ_xJOLf8otPOrrFcwaJe_gL7ZYmmw6gDXWmg@mail.gmail.com)
- 5.15.165-rc3, [S390 build fail](https://lore.kernel.org/stable/CADYN=9J-7HS62eKTgda-kU=JCz3ck=UXfaYk1XTK5jXuybpo7A@mail.gmail.com)

### 2024-08-16
#### Reported regression (<48h)
- 5.10.224-rc2, [S390 build fail](https://lore.kernel.org/stable/CADYN=9+gT_me8D_+KtWqmS9_vZg7=dTat90dPCNSieSjq9sFXg@mail.gmail.com)
- 5.15.165-rc2, [S390 build fail](https://lore.kernel.org/stable/CADYN=9KMRjaxqtcc-Yo9ZDK3b2HH7gzJiwTrUXz7t0x0TO6=uA@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.6-rc2](https://lore.kernel.org/stable/CADYN=9K7BsQrOhQ2RiP_uRUXVQxY2FLOtCMmjsx972asvJY6Ow@mail.gmail.com), [5.4.282-rc2](https://lore.kernel.org/stable/CADYN=9Jhe2+1Uw9uMQxaBThuR5wudFXoupLduHc0-u+Vxr51XQ@mail.gmail.com)

### 2024-08-15
#### Reported regression (<48h)
- 5.15.165-rc1, [S390 build fail](https://lore.kernel.org/stable/CADYN=9LRUpKMbBebjkcy3qo3O_1UFevA=x90SGZQ7ja5FXHG3w@mail.gmail.com)
- 5.10.224-rc1, [S390 build fail](https://lore.kernel.org/stable/CADYN=9+=+af8c=_GWSsFHoL7qX0=gFA69g_8mmJiJ43=p-2kzA@mail.gmail.com)
- 5.4.282-rc1, [S390 build fail](https://lore.kernel.org/stable/CADYN=9+zo=R7jFdHGps0YedBqGzhjm7xeOZLsaR_E7-b0Y_CMQ@mail.gmail.com)

#### Reported no regressions (<48h)
- [4.19.320-rc1](https://lore.kernel.org/stable/CADYN=9+4TcfTeCqpH6dZtV5ry6wPOzyR13xSYDN=i29-XWxcUA@mail.gmail.com), [6.10.6-rc1](https://lore.kernel.org/stable/CADYN=9L-zL+r+K-XwMGQrs0AqOB8F=k-mE=ULxv+z_DpCMixAg@mail.gmail.com), [6.6.47-rc1](https://lore.kernel.org/stable/CADYN=9KdnuT-ng_pyL_NtB7vuYwBRyFxBP104QAGJWtMjGT-pg@mail.gmail.com), [6.1.106-rc1](https://lore.kernel.org/stable/CADYN=9LTKMLu9u3XZqv_-r_KK4hL-tnX14VpSpE0iA16Favkjg@mail.gmail.com)

### 2024-08-13
#### Reported no regressions (<48h)
- [6.1.105-rc2](https://lore.kernel.org/stable/CA+G9fYtev5H05e9-BpRPaifWekO_xBNXVz0Ev9ps-hFXcVN8ZQ@mail.gmail.com)

### 2024-08-12
#### Reported regression (<48h)
- 6.1.105-rc1, [parisc build fail](https://lore.kernel.org/stable/CA+G9fYt5DQbDEEtC8Oq+ja+vbTRxQVcabsoxfz35nSQDS27KRw@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.5-rc1](https://lore.kernel.org/stable/CA+G9fYs6LCnr8UVXVmTPga-LjA4VuMoEfRP+=LEmQFZQxA+=JA@mail.gmail.com), [6.6.46-rc1](https://lore.kernel.org/stable/CA+G9fYsPJQ_fFjrr3tXCeByq+jHG9yHbwC6W66eo_+J8vmuiyw@mail.gmail.com)

### 2024-08-08
#### Reported no regressions (<48h)
- [6.1.104-rc2](https://lore.kernel.org/stable/CADYN=9LA_eMtMjyyyUNyT=Rsr030HNK1J1u9qYtuHvYApK4E5g@mail.gmail.com)

### 2024-08-07
#### Reported regression (<48h)
- 6.1.104-rc1, [kernel panic on qemu-arm64 and qemu-arm](https://lore.kernel.org/stable/CADYN=9Jbqec210z5wZXVJV0vsi2QJK4TBJ6DULObW+bZRd4Q-g@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.4-rc1](https://lore.kernel.org/stable/CADYN=9Jb=OEFnYiT7_p+51YASv=53_FSBZVTfRSi==QUx8ZKeg@mail.gmail.com), [6.6.45-rc1](https://lore.kernel.org/stable/CADYN=9LVRXcvLU5nHcK5sw5_uHok41X3-HPznaetV4cE-SrkJQ@mail.gmail.com)

### 2024-07-31
#### Reported regression (<48h)
- 6.1.103-rc2, [s390 build fail](https://lore.kernel.org/stable/CA+G9fYsGYtFhoSZbv_s=3TCSYis-pSPDJ3LJwxbtv1_9+Q61JQ@mail.gmail.com)
- 6.10.3-rc2, [arm64, arm, x86, mips build fail](https://lore.kernel.org/stable/CA+G9fYuqGMX9OQOoWOO+NbjY0W74CRzcgEXPNSGZvjutpKWM_Q@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.1.103-rc3](https://lore.kernel.org/stable/CA+G9fYv9fyCLmJirVSpgQm2kNb7vHdnstREKCisxHCT7XJww7A@mail.gmail.com), [6.10.3-rc3](https://lore.kernel.org/stable/CA+G9fYsf0tqqUqLsMAZuLhhPVJaJvX7gw7nhdsbScntYVBLMXw@mail.gmail.com)

### 2024-07-30
#### Reported regression (<48h)
- 6.10.3-rc1, [perf build fail](https://lore.kernel.org/stable/CA+G9fYvDT-Ek263796cuaOLCPMDAC3Gu6OkG=dSAP9CfBPYU5w@mail.gmail.com)
- 6.1.103-rc1, [Internal oops boot failed ](https://lore.kernel.org/stable/CA+G9fYuGGbhKgt6dD2pBCK1y4M3-KUhPZcw21gYtUFzQ32KLdg@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.6.44-rc1](https://lore.kernel.org/stable/CA+G9fYuotiGuEVYgNp5hGh3tWJcGykZycfH7kzAC2PgxwPWfrQ@mail.gmail.com)

### 2024-07-26
#### Reported no regressions (<48h)
- [4.19.319-rc2](https://lore.kernel.org/stable/CA+G9fYtK3xz6Miez9vThbnUYDLU1YvP+W4DxB0EBG4wxV7dM+A@mail.gmail.com), [5.15.164-rc2](https://lore.kernel.org/stable/CA+G9fYv8meGAQm6LacVfUHci3mm9bsueZuCfXFy2C9COpgXXCA@mail.gmail.com), [5.4.281-rc2](https://lore.kernel.org/stable/CA+G9fYvGWZH=u5=FB9TYbeg3QDEUDZJMC_AutFQ95H2vr82fSg@mail.gmail.com)

### 2024-07-25
#### Reported regression (<48h)
- 4.19.319-rc1, [Build fail on arm and arm64 ](https://lore.kernel.org/stable/CA+G9fYtZKAiw3abrvxmBovfYbJK7XcpV0aqH8Lg9wPc=i5ULHA@mail.gmail.com)
- 5.4.281-rc1, [Build fail on arm and arm64 ](https://lore.kernel.org/stable/CA+G9fYsVD0Yn2WPqu3a_CYtDZ=XR4WctQLOyTdn=EoS-idDHGg@mail.gmail.com)
- 5.15.164-rc1, [Build fail on arm](https://lore.kernel.org/stable/CA+G9fYvCyg1hXaci_j-RB4YgATb458ZqRjJSye4qub9zYrmL_A@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.10.2-rc1](https://lore.kernel.org/stable/CA+G9fYt-NsFzBhULi-JqQLXSKO123pAvrLTyGqx2eXeLyFJ3yQ@mail.gmail.com), [5.10.223-rc1](https://lore.kernel.org/stable/CA+G9fYv9MqRUxoAaUsmi6Hq3xp5LT8vFyG+ZovgaNwcPowy1vw@mail.gmail.com), [6.1.102-rc1](https://lore.kernel.org/stable/CA+G9fYu_mdKF5hF3q=nENbLRGcsn=ZSYErHXcd-SY=Ow9TvXPg@mail.gmail.com), [6.9.12-rc1](https://lore.kernel.org/stable/CA+G9fYs+KxD_vOFwndGQNHfC8bE5f9-eiCiL6dO0aux7H1ugLA@mail.gmail.com), [6.6.43-rc1](https://lore.kernel.org/stable/CA+G9fYvsiw97j1nr1ckBtR28bWsbWLpHkCkw13U51nUemfMGkQ@mail.gmail.com)

### 2024-07-23
#### Reported regression (<48h)
- 6.10.1-rc1, None (SUPERSEEDED)

#### Reported no regressions (<48h)
- [6.10.1-rc2](https://lore.kernel.org/stable/CA+G9fYs46y-MYAGFLMPuot1u_xu1Tm8y++MJ=f-sfBv485iw-g@mail.gmail.com), [6.9.11-rc1](https://lore.kernel.org/stable/CA+G9fYv+=8YWS=Mqoawbrw1yCDgZ36wO_NMbg81HdVNykGOu3Q@mail.gmail.com), [6.6.42-rc1](https://lore.kernel.org/stable/CA+G9fYv0KBij75t=mCJ82C8-Mzv_gFXTEqUFUZvtvCzA4D2d5Q@mail.gmail.com), [6.1.101-rc1](https://lore.kernel.org/stable/CA+G9fYvNZNzz1xBDi5bz=DQXqe0T1-J_xcJz0hf5iikU0d=Uzg@mail.gmail.com)

### 2024-07-17
#### Reported regression (<48h)
- 4.19.318-rc2, None (SUPERSEEDED)
- 5.10.222-rc2, [QEMU arm64 boot fail with kunit](https://lore.kernel.org/stable/CA+G9fYtfAbfcQ9J9Hzq-e6yoBVG3t_iHZ=bS2eJbO_aiOcquXQ@mail.gmail.com)

#### Reported no regressions (<48h)
- [5.4.280-rc2](https://lore.kernel.org/stable/CA+G9fYsf5d4H0Tme9D+aqAchpHo_8Yzq7EB0xZWb2CUbNByCHA@mail.gmail.com), [5.15.163-rc2](https://lore.kernel.org/stable/CA+G9fYsx5tFng2+6f52ijVck3dKvygR3cW+F1txb0UP8AK9JKQ@mail.gmail.com), [6.1.100-rc2](https://lore.kernel.org/stable/CA+G9fYuigJ2fDRugS3xpGbATqULsKvkF89h5DkzthNERDdpFoA@mail.gmail.com), [6.6.41-rc2](https://lore.kernel.org/stable/CA+G9fYt51XWL7Od2wno47hEGTiOFYJ2JfhdyZEha7GwjN1K2FQ@mail.gmail.com), [6.9.10-rc2](https://lore.kernel.org/stable/CA+G9fYuRu35fggLrOaXZg=ic-pFjq7DRL1moSwmwHW1qejPfuQ@mail.gmail.com), [4.19.318-rc3](https://lore.kernel.org/stable/CA+G9fYsLr185OmUiR0_BgKndR7_Z7D1Crrj1pxgP4uWiZbFEZw@mail.gmail.com)

### 2024-07-16
#### Reported regression (<48h)
- 6.9.10-rc1, None (SUPERSEEDED)
- 5.10.222-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYskex_Z+r0wxv7XDdPVHrk=8jBPWH601mY_Q2mKDj-T=A@mail.gmail.com)
- 5.4.280-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYtJwjRPsomCFehVXyw27S1f9Uq6H1ZvH573ekakj7Mdng@mail.gmail.com)
- 4.19.318-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYuhFAiB_bnPpAC7sW96cyPHE3wGi+Q+=bNuXcmMzGnu=w@mail.gmail.com)
- 6.6.41-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYspx-bBGD6A7Z7BL8+ZxZson5os6=gVSWSry1dQE4yZVg@mail.gmail.com)
- 5.15.163-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYvVaSX9Ot2vekBOkLjUqCx=SbQqW4vWhypCnGwwBmX4xg@mail.gmail.com)
- 6.1.100-rc1, [S390, arm, powerpc build fail](https://lore.kernel.org/stable/CA+G9fYtosFR2O3A+bgYKV4q+13dWdfqGFqmB+NVu3Qfdfa3Ghg@mail.gmail.com)

### 2024-07-09
#### Reported regression (<24h)
- 6.1.98-rc1, [Kunit Boot fail on qemu-arm64 and qemu-x86 and S390 build fail](https://lore.kernel.org/stable/CA+G9fYtK_CCvQ01LdANMViMpAGfY-fyh7vFwiOq7XzQw889jHQ@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.6.39-rc1](https://lore.kernel.org/stable/CA+G9fYvs8EmAaxoxzHuEhr73+ppK7=o95yxUkJRE4U7RUjvyEg@mail.gmail.com)

### 2024-07-04
#### Reported no regressions (<48h)
- [5.4.279-rc2](https://lore.kernel.org/stable/CA+G9fYtpctyKVKQUjNawKNSbsu_TrsNuoXKVvWtinBN4KHu+fw@mail.gmail.com), [5.10.221-rc2](https://lore.kernel.org/stable/CA+G9fYswG=vrfp1SFmhsbM2Qno=WchrdyFzgEvhoAKVuyOS29w@mail.gmail.com)

### 2024-07-03
#### Reported regression (<48h)
- 5.10.221-rc1, [S390 build fail](https://lore.kernel.org/stable/CA+G9fYu8dpsNyqPk53wyq1ZTKmCJ3gUb6JBjH3OM9p2pqL_E-A@mail.gmail.com)
- 5.4.279-rc1, [sh build fail](https://lore.kernel.org/stable/CA+G9fYvAkELSdWF1EYyjS=d_jvCJD0O=aPnZFHUGnhYy6c1VCg@mail.gmail.com)

#### Reported no regressions (<48h)
- [5.15.162-rc1](https://lore.kernel.org/stable/CA+G9fYtbcy5eRrJSuqGPJxQi58V99GFtepxgOYj7qXHmoD0R0g@mail.gmail.com), [4.19.317-rc1](https://lore.kernel.org/stable/CA+G9fYurwddc360a=u5=Qr=Ys59Qy3PqrVYO5qoKvwGupaD2SA@mail.gmail.com)

### 2024-07-02
#### Reported regression (<48h)
- 6.9.8-rc1, [boot warning arm64 Qualcomm db845c ](https://lore.kernel.org/stable/CA+G9fYuK+dFrz3dcuUkxbP3R-5NUiSVNJ3tAcRc=Wn=Hs0C5ng@mail.gmail.com)
- 6.6.37-rc1, [Powerpc build fail](https://lore.kernel.org/stable/CA+G9fYs=KkeYFMS01s3VZmeSYd1zJphinPFCk1G2AJ7LZ=+8=A@mail.gmail.com)

#### Reported no regressions (<48h)
- [6.1.97-rc1](https://lore.kernel.org/stable/CA+G9fYvvPTUkjTukNZ+Y0Cm5QdHocv1qHFzZkkB0mL86yPj1iA@mail.gmail.com)
