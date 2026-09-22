---
title: KiCad and Footprints
---

> Adapted from the UGRT KiCad Introduction by Cameron Bauman, Chase Keeler, and Matthew Salazar.

We use KiCad to design schematics and printed circuit boards. We use KiCad version `9.0`. This page shows a full example board. For more detail see the official [Getting Started in KiCad](https://docs.kicad.org/9.0/en/getting_started_in_kicad/getting_started_in_kicad.html) guide.

## Terminology

- Footprint: the physical layout of copper pads, holes, and outlines of a specific electronic component
- Symbol: a standardized simple graphic that represents an electronic component
- PCB Layout: the physical representation of the schematic with footprints positioned

## Environment Setup

Open KiCad and select `File` → `Create New Project`. If you are on a school computer, save the project to your `H` drive so you can access it later. A project is created with three files: `.kicad_pro` (project), `.kicad_sch` (schematic), and `.kicad_pcb` (PCB).

Open the schematic file and, if prompted, copy the default global symbol library table. The schematic editor window will then open.

## Making a New Project

Opening KiCad for the first time will show the project manager. When making a new project you can set the name and location. Ensure `create a new folder for the project` is clicked. Your project will come with `.kicad_pro`, `.kicad_sch`, and `.kicad_pcb` files. These extensions correspond to the project, schematic and PCB files.

## Schematics

In KiCad you start projects by making a schematic. Most of the basics of the schematic editor are standard across all guides. One of the most difficult parts of making a schematic in KiCad is finding the right symbols and linking the symbols to the correct footprint.

KiCad comes with a large symbol library but it may not have the symbol you need. If you need extra symbols you can make your own in the symbol editor or find it online. Symbols can be found online from a distributor, manufacturer, or user maintained repositories. Most of the time extra symbols can be found online. The same is true for footprints, KiCad has a large library but often you will have to find footprints online. We recommend the following resources:

- [Digikey](https://www.digikey.ca/) Electronic components distributor
- [SnapMagic](https://www.snapeda.com/home/) PCB footprints and schematic symbols
- [Octopart](https://octopart.com/) Electronic part search engine

It is important to organize the symbols and footprints you download in the project folder so that other people can edit your project. It ultimately does not matter the exact way you structure the folders but it is important that it is consistent. To find an example project folder structure see [Recommended Project Structure](#recommended-project-structure). You may not know the exact components or footprints you will use until you start making your PCB.

You may run out of space in your schematic. To get around this, use hierarchical schematics. Hierarchical schematics are like windows to extra pages that you can link to with labels or flags.

Before you move on from the schematic phase, run an `Electrical Rules Check` to verify that you are not breaking any basic rules and check that you linked all of your symbols to footprints. Press the `Assign Footprints...` button to link symbols to footprints. Additionally, try to organize the schematic into sections that correspond to functions within the circuit and add labels/titles to the sections. An example of a clean schematic can be seen below.

![Clean KiCad Schematic](/images/organized-schematic.png)

## Example: DIP Switch LED Board

This example builds a circuit where a 4-position DIP switch controls four LEDs. It goes through placing symbols, wiring, power symbols, power flags, annotation, footprints, and running ERC before moving to the PCB.

### 1. Place the symbols

Open the `Place Symbols` tool from the right toolbar. In the symbol chooser, use the `filter` bar to search for and place the following:

- `Screw_Terminal_01x02` (x1)
- `R` (x4)
- `LED` (x4)
- `SW_DIP_x04` (x1)

The description at the bottom of the window explains the selected component. Double-click a symbol to place it. To place multiple copies you can repeat the process or copy and paste with `Ctrl+C` / `Ctrl+V`. Symbols can be moved at any time by clicking and dragging, and rotated by selecting them and pressing `r`.

The DIP switch uses single pole single throw (SPST) switches, so each switch has two states: `OFF` (open circuit, no current) and `ON` (short circuit, current flows).

### 2. Wire the components

Enter wire mode from the right toolbar and click each terminal (a thin red circle appears around it) to connect them. The green wire layout is purely cosmetic, so it does not need to be perfect.

### 3. Add power symbols

Under `Symbols` select `Power Symbols` and place one `GND` and one `+3V3`. Wire the 3.3V and GND symbols to the corresponding pins. Pay close attention to the wires on the `SW_DIP_x04` symbol.

The finished schematic uses the 4-position DIP switch (`SW3`) to connect `+3.3V` through four current-limiting resistors (`R9` to `R12`) to four LEDs (`D10` to `D13`) and back to ground. The screw terminal (`J3`) provides the `+3.3V` and ground input. When a switch is toggled on, the path closes and the matching LED lights.

### 4. Add power flags

Place two `PWR_FLAG` symbols so the board knows the input voltage is coming from somewhere.

### 5. Annotate and assign footprints

Run `Annotate` from the top toolbar and close the dialog. Then open the `Assign Footprints` editor. Each symbol (e.g. `D1`, `D2`, `J1`) is associated with a library such as `LED`, `R`, or `SW`. Open the `Footprint Libraries` tab, disable filters to search all libraries, and assign footprints. Footprints used in this example:

- `LED_0805_2012Metric_Pad1.15x1.40mm_HandSolder`
- `LED_D3.0mm`
- `TerminalBlock_Phoenix_MPT-0,5-2-2.54_1x02_P2.54mm_Horizontal`
- `SW_DIP_SPSTx04_Slide_6.7x11.72mm_W8.61mm_P2.54mm_LowProfile`
- `R_0402_1005Metric_Pad0.72x0.74mm_HandSolder`
- `R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal`

Footprints define the actual land pattern on the PCB: the copper pads, holes, and outlines that match the physical leads or pins of a component.

### 6. Run ERC

Run the `Electrical Rules Check` (ERC). This scans the schematic for common mistakes such as unconnected pins, missing power connections, or incorrectly wired nets, and should be run before layout.

## PCB Layouts

Save your schematic, then open the PCB editor and use `Update PCB from Schematic` to import all footprints and net connectivity. Accept the changes and confirm any prompts; the components will appear bundled together in the PCB editor.

After a schematic is created you can begin to lay out your PCB. By default KiCad has the PCB configured as a 2 layer board which is suitable for most of our boards. Before you begin your layout set some default sizes for traces. A good rule of thumb is 0.2 to 0.3mm for signals and 1mm for power traces up to 2 Amps. All of the footprints you linked in the schematic phase will be added when you press `Update PCB from Schematic...`. All of the footprints will appear in a clump with blue lines between pads if everything has been set up properly so far. These blue lines show the connections that need to be made with traces.

Take a quick note of the `File` → `Board Setup` → `Design Rules` → `Net Classes` settings. They may not be needed for a simple tutorial but are useful for more complicated designs.

### Component placement

- Mechanical / connectors first: place the screw terminal (`J3`) and DIP switch near the board edge for easy access.
- Group by function: place each resistor next to its LED and route the shortest path from switch → resistor → LED → ground.
- Orient polarity consistently: rotate LEDs so their anodes or cathodes align in the same direction; mark polarity on silkscreen.
- Leave space for test points or probe pads near the LED nodes if you plan to debug.

### Routing and planes

Components can be rotated by selecting them and pressing `r`. This example uses a power plane for the switch input terminals and a ground plane for the LEDs.

1. Select `Place` → `Draw Filled Zones`, draw the zone perimeter, then in `Copper Zone Properties` select the `+3V3` net. Press `B` to fill the zone.
2. Route the remaining connections with the trace tool (shortcut `X`).
3. Create a second filled zone for `GND` so all LED ground terminals are connected.
4. Select the back copper layer and add one more trace to connect the ground plane to the screw terminal ground.

### Board outline

Draw the board perimeter on the `Edge.cuts` layer using the line and arc tools. Arcs on the corners avoid sharp edges and look better. When designing a board for one of the subsystems, talk to a mechanical team member to learn your size constraints.

### Verify

Run the `DRC` (Design Rules Check) tool and fix any errors. Use the 3D viewer to visualize the board and its components.

## Recommended Project Structure

This example uses `neptune` as the project name. The root folder should be named the same as the project name. Use dashes to separate words in the project name. In this example `triton` is a component that has a footprint `.kicad_mod`, a symbol `.kicad_sym`, a 3D model `.step`, and a Datasheet `.pdf`. Organize files for a component in a folder that is placed in a dependencies folder, this way when another person opens up the project KiCad will know where to find the files.

```
neptune/
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
