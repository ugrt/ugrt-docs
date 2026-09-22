---
title: Requirements
---

## Common Requirements

1. **Core components shared with the `STM32G0B1CET6` template board**
2. **WAGO-style pluggable connectors**
3. **CAN In / CAN Out**, two CAN connectors for daisy-chaining, 120Ω termination option.

## Board-Specific Requirements

- **Addressable LEDs**: support an addressable LED chain
- Light channels remain PWM-controllable from the MCU and commandable over [[/Resources/Electrical Resources/can|CAN]].
