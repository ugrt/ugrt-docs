---
title: CAN Wiring Harness
---

> Adapted from the CAN Wire Harness Design Guide by the Electrical and Firmware teams (March 2026).

## Colour Notation and Connectors

| Signal   | Colour |
| -------- | ------ |
| CAN HIGH | Green  |
| CAN LOW  | Yellow |
| GND      | Black  |

The bus stubs do not have a decided output connector yet. The device connecting to the bus uses the female version of the connector.

## Electrical Characteristics

- Twist the `CANH` and `CANL` wires together along the whole line. This keeps CAN's noise rejection.
- Twist rate: 1 twist per 1 to 2 cm (10 to 20 twists per meter).
- Do **not** twist the `GND` wire. It runs alongside the twisted pair.
- **Bus topology**: put the 120 Ω terminating resistors at the two physical ends of the bus, and nowhere else. Every node creates a stub off the main trunk of less than 30 cm.
- **Wire gauge**: 22 AWG.
- Use **stranded** wire. Robotic and vehicle applications never use solid core because there are too many moving parts.
- **Shielding (optional)**: enclose the wires in a braided sleeve.

## Wiring Layout Overview

- The CAN harness daisy-chains to each wheel assembly.
- The total CAN harness length is roughly 23 feet.

The original wiring diagram is in the source document's Appendix A (Figure 1).
