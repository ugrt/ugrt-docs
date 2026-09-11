---
title: Circuit Terminology
---

## IC - Integrated Circuit

> See the [Wikipedia](https://en.wikipedia.org/wiki/Integrated_circuit) page for more

An integrated circuit is an assembly of circuits formed from various components fabricated onto a flat piece of semiconductor material. Integrated circuits are crucial in modern electronics. Integrated circuits are smaller, faster, more efficient, and less expensive than building a circuit from individual components.

## PCB - Printed Circuit Board

> See the [Wikipedia](https://en.wikipedia.org/wiki/Printed_circuit_board) page for more

A PCB is a stack of conductive and insulating layers with certain patterns etched or printed on to effectively form wires. Components are soldered onto the board to maintain electrical connection. Pads can be formed on a PCB when the conductive copper area is etched during manufacturing. Holes can be formed with a drill and/or inserts during manufacturing. The insulating layers are typically coloured for various purposes (this is where the green or blue of a PCB ususally comes from). Green is historically used to offer the best contrast for quality control and to reduce eye strain.

## SMD - Surface Mount Technology

> See the [Wikipedia](https://en.wikipedia.org/wiki/Surface-mount_technology) page for more

Most of a modern circuit board will consist of SMD components. SMD components are compact and easier to automate the assembly for. There are some standard package shapes and sizes that SMD components come in. For resistors and capacitors we advice that you do not choose a component smaller than `0805` size. In general, try to use appropriate footprints as small components are hard to solder and manage.

![Example of component sizes](images/smd-sizes.jpg)

This picture demonstrates the size of a `0402` (smallest), `0805` (middle), and `1812` (largest). Beside these components is the tip of a sewing needle. Credit goes to **Justin M** for this picture.

## THT - Through Hole Technology

> See the [Wikipedia](https://en.wikipedia.org/wiki/Through-hole_technology) page for more

THT components have leads which are inserted through holes drilled in a PCB. Some ICs can be found in THT packages and are easiest to solder in this form. THT components are quite large but are easier to solder than SMD components.
