---
title: Part Selection
---

## What parts do I even select?

When deciding footprints for a component you need to consider how it will be soldered to the PCB. Components come in many different shapes and sizes. See [[/Resources/General/circuit-terminology|Circuit Terminology]] for SMD/THT and package background.

## Deciding on a package

- For resistors and capacitors, do not go smaller than `0805`. Smaller parts are hard to hand-solder and manage.
- For ICs, pick packages you can comfortably solder (e.g. `SOT-23`, `SOIC`, `TSSOP`) unless the design needs something finer pitch.
- Prefer parts that are in stock at our distributors and have a datasheet and a known footprint.

## Finding parts and footprints

- [Digikey](https://www.digikey.ca/): electronic components distributor
- [SnapMagic](https://www.snapeda.com/home/): PCB footprints and schematic symbols
- [Octopart](https://octopart.com/): electronic part search engine

## Reusing the template

Most boards start from the `STM32G0B1CET6` template. Reusing its core parts (MCU, CAN FD transceiver, LDO, crystal, DIP switch, SWD header, status LEDs) keeps designs consistent and saves time picking parts.
