---
title: Light Board
draft: false
---

The light board controls the lights on the rover. It has the ability to take [[can|CAN]] messages to control up to 6 lights. light fan board uses the `STM32G0B1CET6` like all the other boards made for the `2025/2026` competition. The light board is based on the `STM32G0B1CET6` template board that can be found in the [GitHub](https://github.com/ugrt/Electrical-2026).

The light board has 12 JST XH connectors for the 6 lights and 6 Blade Mini fuse holders. Each light has a separate `VIN` and `VOUT` so there is flexibility in what lights and sources are used for each. To switch the lights, 6 N-channel MOSFETs are used to close the GND side of each lights circuit.

# Bill of Materials

| Quantity | DigiKey Part Number                   | Description                    |
| -------- | ------------------------------------- | ------------------------------ |
| 1        | CAPC480350_180N_KEM                   | 4.7uF capacitor                |
| 3        | CAPC480350_180N_KEM                   | 100nF capacitor                |
| 3        | CAPC480350_180N_KEM                   | 1uF capacitor                  |
| 2        | CAPC2012X88N                          | 100nF capacitor                |
| 2        | CAPC220145_95N_KEM                    | 10pF capacitor                 |
| 6        | P9_DO-213AB_Melf                      | Diode                          |
| 3        | LED_LTST-C170GKT                      | LED                            |
| 6        | Fuseholder_Blade_Mini_Keystone_3568   | Fuse Holder                    |
| 12       | JST_XH_B2B-XH-A_1x02_P2.50mm_Vertical | 1x2 Screw Terminal 2.5mm pitch |
| 1        | PinHeader_1x04_P2.54mm_Vertical       | 1x4 Pin Header                 |
| 2        | 691137710002                          | 1x2 Screw Terminal 5mm pitch   |
| 1        | 61300211121                           | Jumper                         |
| 6        | TSM180N03CS_RLG                       | N-channel MOSFET               |
| 6        | R_0603_1608Metric                     | 10k Ohm resistor               |
| 6        | R_0603_1608Metric                     | 100 Ohm resistor               |
| 1        | RESC2012X65N                          | 10k Ohm resistor               |
| 3        | RESC1508X55N                          | 1k Ohm resistor                |
| 1        | RESC2012X65N_120                      | 120 Ohm resistor               |
| 2        | SKRPADE010_AAL                        | Push Button                    |
| 1        | SW5_219SMT                            | DIP switches                   |
| 1        | LQFP-48_7x7mm_P0.5mm<br>              | STM32G0                        |
| 1        | SOT-23-5<br>                          | Linear Regulator               |
| 1        | MCP2562-E-P<br>                       | CAN tranceiver                 |
| 1        | XTAL_ECS-80-8-30Q-VS-TR               | Clock Crystal                  |

# Gallery

KiCad 2D PCB model.

![[light-board-pcb.png]]
