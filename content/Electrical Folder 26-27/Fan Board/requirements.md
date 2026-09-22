---
title: Requirements
---

## Common Requirements

1. **Core components shared with the `STM32G0B1CET6` template board**
2. **WAGO-style pluggable connectors**
3. **CAN In / CAN Out**, two CAN connectors for daisy-chaining, 120Ω termination option.

## Board-Specific Requirements

- **2x `WM9797-ND` fan connectors** (4-position 2.54mm vertical headers)
- **2x NTC thermistor probe inputs**, probes measure temperature directly around each fan group.
- Per-connector **PWM fan control and tachometer readback**
- Temperature reporting over CAN so metrics can be read from the main terminal
