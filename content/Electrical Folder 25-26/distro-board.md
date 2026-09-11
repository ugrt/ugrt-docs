---
title: Power Distribution Board (PDB)
---

The PDB organizes the distribution of the power from the battery into various boards and devices around the rover. The PDB is separated into 7 channels with 3 different voltages that it outputs across 19 terminals. The PDB receives 24V in XT90 form from the [[battery-bms|BMS]]. The PDB stacks the converters on a tray to save the horizontal space it takes up in the enclosure.

# Terminology

- Channel: a means for power to flow through, usually grouped by converter
- Converter: a module that converts one voltage to another, usually a buck or boost type
- Buck converter: a module that turns a **higher** input voltage into a **lower** output voltage
- Boost converter: a module that turns a **lower** input voltage into a **higher** output voltage
- Terminal: a place for a single device or module to connect into to get power
- Power: rate of energy transfer $P=IV$ (watts)

# Channel Overview

The channels are organized so that major devices have their own channel. The channels are listed in the following format: `Purpose | Voltage | Connection type`

1. [[light-board|Light Board]] |12V | 5x1 5mm spaced terminal block
2. Arm Board | 1x12V | Single XT30
3. [[fan-board|Fan Board]], Orin | 3x1 5mm spaced terminal block
4. Extra #1 | 12V | 3x1 5mm spaced terminal block
5. Translator, Ethernet Switch | 5V | 3x1 3.5mm spaced terminal block
6. Extra #2 | 5V | 3x1 5mm spaced terminal block
7. Antenna | 24V | Single XT30

# Future Improvements

- Integrate converters into the PDB instead of using modules

# Bill of Materials

| Supplier | Part No                                                                                                                                        | Quick Desc                                          | QTY |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --- |
| Droking  | [DROK 090066](https://www.droking.com/24V-to-12V-DC-Converter-20A-Buck-Voltage-Regulator-Car-LED-Driver-Power-Supply)                          | (17-35V) to (12V) 20A Buck, 240W                    | 4   |
|          | [DROK 090581](https://www.droking.com/DC-Step-Down-Voltage-Regulator-DC-12-24V-to-5V-5A-25W-Buck-Converter-Module-Waterproof-Car-Power-Supply) | (9-35V) to (5V) 5A Buck, 25W                        | 2   |
|          | [DROK 090598](https://www.droking.com/DC-Boost-Converter-10-20V-to-24V-3A-72W-Waterproof-Car-Power-Supply-Module)                              | (10-22V) to (24V) 3A Boost, 72W                     | 1   |
| Digikey  | [FUSE_3544-2](https://www.digikey.ca/en/products/detail/keystone-electronics/3544-2/316029)                                                    | Fuse Holders                                        | 10  |
|          | [0297003.WXNV](https://www.digikey.ca/en/products/detail/littelfuse-inc/0297003-WXNV/146575)                                                   | 3A Fuse                                             | 5   |
|          | [0297015.WXNV](https://www.digikey.ca/en/products/detail/littelfuse-inc/0297015-WXNV/146594)                                                   | 15A Fuse                                            | 5   |
|          | [0297020.WXNV](https://www.digikey.ca/en/products/detail/littelfuse-inc/0297020-WXNV/146599)                                                   | 20A Fuse                                            | 5   |
|          | [0297010.WXNV](https://www.digikey.ca/en/products/detail/littelfuse-inc/0297010-WXNV/146591)                                                   | 10A Fuse                                            | 5   |
|          | [JE2835APA-N-0001A0000-N0000001](https://www.digikey.ca/en/products/detail/cree-led/JE2835APA-N-0001A0000-N0000001/16671679)                   | Power Indicator LED                                 | 10  |
|          | [1101A4CQEA](https://www.digikey.ca/en/products/detail/cit-relay-and-switch/1101A4CQEA/20512089)                                               | Sliding Switch                                      | 20  |
|          | [DZDH0401DW-7](https://www.digikey.ca/en/products/detail/diodes-incorporated/DZDH0401DW-7/13574896)                                            | Ideal Diode Controller                              | 10  |
|          | [FDS6681Z](https://www.digikey.com/en/products/detail/onsemi/FDS6681Z/979900)                                                                  | Ideal Diode PMOS                                    | 10  |
|          | [PHOENIX_1729160](https://www.digikey.ca/en/products/detail/phoenix-contact/1729160/260619)                                                    | 1x6 Screw Terminal (5.08mm pitch)                   | 2   |
|          | [PHOENIX_1984659](https://www.digikey.ca/en/products/detail/phoenix-contact/1984659/950852?s=N4IgTCBcDaIIwE4AcAWAbAVgSAugXyA)                  | 1x6 Screw Terminal (3.5mm pitch)                    | 2   |
|          | [PHEONIX_1729092](https://www.digikey.ca/en/products/detail/phoenix-contact/1729092/260612)                                                    | 1x10 Screw Terminal (5.0mm pitch)                   | 1   |
|          | [HV732HTTE1004F](https://www.digikey.ca/en/products/detail/koa-speer-electronics-inc/HV732HTTE1004F/10134472)                                  | 1M Ohm Resistor for Ideal Diode                     | 10  |
|          | [RMCF2010JT100K](https://www.digikey.ca/en/products/detail/stackpole-electronics-inc/RMCF2010JT100K/1757119)                                   | 100K Ohm Resistor for Ideal Diode                   | 10  |
|          | [RMCP2010FT20R0](https://www.digikey.ca/en/products/detail/stackpole-electronics-inc/RMCP2010FT20R0/2504984)                                   | 20 Ohm Power Indicator Resistor (High Current Side) | 10  |
|          | [RC2010JK-07100RL](https://www.digikey.ca/en/products/detail/yageo/RC2010JK-07100RL/5921626)                                                   | 100 Ohm Power Indicator Resistor (Low Current Side) | 10  |
|          | [RC2010JK-07200RL](https://www.digikey.ca/en/products/detail/yageo/RC2010JK-07200RL/5921676)                                                   | 200 Ohm Power Indicator Led Resistor                | 10  |
|          | [FIT0588](https://www.digikey.ca/en/products/detail/dfrobot/FIT0588/9559257)                                                                   | XT90 Vertical Connector Pair                        | 1   |
|          | [FIT0586](https://www.digikey.ca/en/products/detail/dfrobot/FIT0586/9559255)                                                                   | XT30 Vertical Connector Pair                        | 16  |

# Block Diagram

## Low Power

![PDB Low Power Block Diagram](/images/pdb-low.drawio.png)

## High Power

![PDB High Power Block Diagram](/images/pdb-high.drawio.png)

# Gallery

CAD model isometric view.
![[/images/pdb-cad-iso.png]]

Testing the second revision of the PDB.
![[pdb-testing.jpg]]
