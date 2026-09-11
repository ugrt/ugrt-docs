---
title: Fan Board
---

The fan board monitors the temperature within the enclosure and throughout the rover either through the 2 built in NTC thermal probes or over the [[can|CAN]] network. The fan board uses the `STM32G0B1CET6` to orchestrate everything. The fan board is based on the `STM32G0B1CET6` template board that can be found in the [GitHub](https://github.com/ugrt/Electrical-2026).

The fan board has 2 Molex 47053 connectors for fan control. The Molex 47053 is the type of connector that can be found on most computer motherboards, which means they are compatible with standard PC fans. The fan board only has 2 fan connectors because most PC fans can be daisy-chained. The idea is that the two probes built into the fan board can measure the temperature directly around each set of fans. There are 3 fans on the left and right side of the enclosure.

# Bill of Materials

| Quantity | DigiKey Part Number         | Description                      |
| -------- | --------------------------- | -------------------------------- |
| 10       | 399-C0805C475K8PACTUCT-ND   | CAP CER 4.7UF 10V X5R 0805       |
| 10       | 399-C0805C105K3RACTUCT-ND   | CAP CER 1UF 25V X7R 0805         |
| 10       | 399-C0805C100J5GAC7800CT-ND | CAP CER 10PF 50V C0G/NP0 0805    |
| 25       | 399-C0805C104K5RACTUCT-ND   | CAP CER 0.1UF 50V X7R 0805       |
| 10       | 4809-SKRPADE010CT-ND        | SWITCH TACTILE SPST-NO 0.05A 16V |
| 5        | 160-1179-1-ND               | LED GREEN CLEAR SMD              |
| 5        | 160-1413-1-ND               | LED ORANGE CLEAR SMD             |
| 5        | WM9797-ND                   | CONN HEADER VERT 4POS 2.54MM     |
| 4        | 277-1721-ND                 | TERM BLK 2POS SIDE ENT 3.5MM PCB |
| 10       | RMCF0805FT10K0CT-ND         | RES 10K OHM 1% 1/8W 0805         |
| 10       | 738-RMCF0805FT120RCT-ND     | RES 120 OHM 1% 1/8W 0805         |
| 10       | RMCF0805FT1K00CT-ND         | RES 1K OHM 1% 1/8W 0805          |
| 10       | RMCF0805FG100KCT-ND         | RES 100K OHM 1% 1/8W 0805        |
| 2        | MCP2562FD-E/P-ND            | IC TRANSCEIVER 1/1 8PDIP         |
| 5        | 732-10955-ND                | TERM BLK 2POS SIDE ENTRY 5MM PCB |

# Gallery

KiCad 3D PCB model.
![[fan-board-kicad.png]]

KiCad 2D PCB model.
![[fan-board-pcb.PNG]]
