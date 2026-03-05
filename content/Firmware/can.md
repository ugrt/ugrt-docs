---
title: CAN
---

CAN (controller area network) is a bus standard. CAN uses differential signalling and twisted pairs to reduce electrical noise and increase reliability. CAN is commonly used in automobiles.

There are a few versions of CAN, the two most important to the robotics team is `CAN 2.0` (Classic CAN) and `CAN FD`. Classic CAN has a maximum payload size of 8 bytes. CAN FD (Flexible Data Rate) allows for a payload size from 8 bytes to 64 bytes. `CAN FD` also allows for a higher amount of signal symbols transmitted per second (baud rate). We use `CAN FD` due to this higher payload size and baud rate.
