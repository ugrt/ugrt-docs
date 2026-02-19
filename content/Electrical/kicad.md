---
title: KiCad and Footprints
---

We use KiCad to design schematics and printed circuit boards. We use KiCad version `9.0`. To get introduced to KiCad we recommend you see the following resources:

- [KiCad Introduction by UGRT](https://uoguelphca.sharepoint.com/:w:/s/UGRT2/IQBLgU5zouGnQrnbO2p2jp80AcwOr8vlOOrc6jVxm_k2JLA?e=z2K5Kg)
- [Getting Started in KiCad by KiCad](https://docs.kicad.org/9.0/en/getting_started_in_kicad/getting_started_in_kicad.html)

## Terminology

- Footprint: the physical layout of copper pads, holes, and outlines of a specific electronic component
- Symbol: a standardized simple graphic that represents an electronic components
- SMD: surface-mount device
- THT: through-hole technology
- IC: integrated circuit

## Schematics

In KiCad you start projects by making a schematic. Most of the basics of the schematic editor in KiCad is standard across all guides. One of the most difficult part of making a schematic is finding the right symbols, and linking the symbols to the correct footprint.

KiCad comes with a large symbol library but it may not have the symbol you need. If you need extra symbols you can make your own in the symbol editor or find it online. Symbols can be found online from a distributor, manufacturer, or user maintained repositories. Most of the time extra symbols can be found online. We recommend the following resources to find symbols:

- [Digikey](https://www.digikey.ca/) Electronic components distributor
- [SnapMagic](https://www.snapeda.com/home/) PCB footprints and schematic symbols
- [Octopart](https://octopart.com/) Electronic part search engine

It is important to organize the symbols and footprints you download. It ultimately does not matter the exact way you structure the folders but it is important that it is consistent. To find an example project folder structure see [Recommended Project Structure](#recommended-project-structure). You may not know the exact components or footprints you will use until you start making your PCB.

## PCB Layouts

After a schematic is created you can begin to lay out your PCB. It is important to determine what constraints that your project has. One of the most common thing to have as a constraint is a board size limit. Once a board size has been defined you can start to decide what footprints you want for your symbols.

When deciding footprints it is important to consider how it will be soldered to the PCB. Components come in many different shapes and sizes. There are two main categories of footprints, SMD, and THT.

### SMD

> See the [Wikipedia](https://en.wikipedia.org/wiki/Surface-mount_technology) page for more

Most of a modern circuit board will consist of SMD components. SMD components are compact and easier to automate the assembly for. There are some standard package shapes and sizes that SMD components come in. For resistors and capacitors we advice that you do not choose a component smaller than `0805` size. In general, try to use appropriate footprints as we hand solder the PCBs.

![Example of component sizes](images/smd-sizes.jpg)

This picture demonstrates the size of a `0402` (smallest), `0805` (middle), and `1812` (largest). Beside these components is the tip of a sewing needle. Credit goes to **Justin M** for this picture.

### THT

> See the [Wikipedia](https://en.wikipedia.org/wiki/Through-hole_technology) page for more

THT components have leads which are inserted through holes drilled in a PCB. Some ICs can be found in THT packages and are easiest to solder in this form. THT components are quite large but are easier to solder than SMD components.

## Recommended Project Structure

This example uses `neptune` as the project name. The root folder should be named the same as the project name. Use dashes to separate words in the project name. In this example `triton` is a component that has a footprint `.kicad_mod`, a symbol `.kicad_sym`, a 3D model `.step`, and a Datasheet `.pdf`. Organize files for a component in a folder that is placed in a dependencies folder, this way when another person opens up the project KiCad will know where to find the files.

```
.
├── dependencies
|   └── triton
|       ├── triton.kicad_mod
|       └── triton.kicad_sym
|       └── triton.step
|       └── triton.pdf
├── neptune.kicad_pcb
├── neptune.kicad_sch
├── neptune.kicad_pro
└── README.md
```
