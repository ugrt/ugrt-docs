---
title: Requirements
---

Requirements for the 2026/2027 power distribution board (PDB).

## Common Requirements

1. **WAGO-style pluggable connectors**

## Board-Specific Requirements

> We might use the shared `STM32G0B1CET6` template board on the PDB for current sensing. With a microcontroller and CAN FD transceiver on board, the PDB could measure each rail's current and report it over [[/Resources/Electrical Resources/can|CAN]].

### Converters On Board

For 26-27, the DC-DC converters are integrated to the PDB. All channels use the `LM5176-Q1` buck-boost controller.

| Rail             | Current                   |
| ---------------- | ------------------------- |
| 12V (2 channels) | 20A per channel           |
| 24V              | 10A                       |
| 5V               | 20A                       |
| Input            | up to ~48.9A at 18V input |

### Input

- Battery input through the Daly BMS
- XT90 input

### Output

- Every output branch fused (blade fuse holders) with per-branch switches on the switched outputs
- Output connectors: tool free terminal blocks
