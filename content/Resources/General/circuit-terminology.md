---
title: Circuit Terminology
---

## IC - Integrated Circuit

> See the [Wikipedia](https://en.wikipedia.org/wiki/Integrated_circuit) page for more

An integrated circuit is an assembly of circuits formed from various components fabricated onto a flat piece of semiconductor material. Integrated circuits are crucial in modern electronics. Integrated circuits are smaller, faster, more efficient, and less expensive than building a circuit from individual components.

## PCB - Printed Circuit Board

> See the [Wikipedia](https://en.wikipedia.org/wiki/Printed_circuit_board) page for more

A PCB is a stack of conductive and insulating layers with certain patterns etched or printed on to effectively form wires. Components are soldered onto the board to maintain electrical connection. Pads can be formed on a PCB when the conductive copper area is etched during manufacturing. Holes can be formed with a drill and/or inserts during manufacturing. The insulating layers are typically coloured for various purposes (this is where the green or blue of a PCB usually comes from). Green is historically used to offer the best contrast for quality control and to reduce eye strain.

## SMD - Surface Mount Technology

> See the [Wikipedia](https://en.wikipedia.org/wiki/Surface-mount_technology) page for more

Most of a modern circuit board will consist of SMD components. SMD components are compact and easier to automate the assembly for. There are some standard package shapes and sizes that SMD components come in. For resistors and capacitors we advise that you do not choose a component smaller than `0805` size. In general, try to use appropriate footprints as small components are hard to solder and manage.

![Example of component sizes](/images/smd-sizes.jpg)

This picture demonstrates the size of a `0402` (smallest), `0805` (middle), and `1812` (largest). Beside these components is the tip of a sewing needle. Credit goes to **Justin M** for this picture.

## THT - Through Hole Technology

> See the [Wikipedia](https://en.wikipedia.org/wiki/Through-hole_technology) page for more

THT components have leads which are inserted through holes drilled in a PCB. Some ICs can be found in THT packages and are easiest to solder in this form. THT components are quite large but are easier to solder than SMD components.

## STM32 – STMicroelectronics 32‑bit Microcontroller

> See the [Wikipedia](https://en.wikipedia.org/wiki/STM32) page for more

STM32 is a family of ARM Cortex‑based microcontrollers widely used in embedded systems. On the LightBoard, it handles PWM generation, CAN communication, and general control tasks, offering a balance of performance, peripherals, and low power consumption.

---

## SMD – Surface‑Mount Device

> See the [Wikipedia](https://en.wikipedia.org/wiki/Surface-mount_technology) page for more

Surface‑mount devices are electronic components soldered directly onto the surface of a PCB. SMD packaging allows for compact layouts, automated assembly, and higher component density compared to through‑hole parts.

---

## PWM – Pulse Width Modulation

> See the [Wikipedia](https://en.wikipedia.org/wiki/Pulse-width_modulation) page for more

Pulse width modulation is a technique for controlling power delivery by varying the duty cycle of a digital signal. On the LightBoard, PWM is used to adjust LED brightness through a transistor driver stage.

---

## CAN – Controller Area Network

> See the [Wikipedia](https://en.wikipedia.org/wiki/CAN_bus) page for more

CAN is a robust communication protocol designed for reliable data exchange between microcontroller‑based devices. The LightBoard uses CAN to transmit LED commands, synchronization messages, and system state information.

---

## FDCAN – Flexible Data‑Rate CAN

> See the [Wikipedia](https://en.wikipedia.org/wiki/CAN_FD) page for more

FDCAN is an enhanced version of CAN that supports higher data rates and extended frame formats. It enables faster communication and larger payloads, improving responsiveness for LED control and board‑to‑board messaging.

---

## DMA – Direct Memory Access

> See the [Wikipedia](https://en.wikipedia.org/wiki/Direct_memory_access) page for more

DMA allows peripherals to transfer data directly to and from memory without CPU involvement. This is essential for timing‑critical LED protocols, reducing processor load and ensuring consistent waveform generation.

---

## RGB – Red, Green, Blue

> See the [Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model) page for more

RGB refers to the three primary color channels used in LED systems. By adjusting the intensity of each channel, LEDs can produce a wide range of colors for lighting effects and animations.

---

## PCB – Printed Circuit Board

> See the [Wikipedia](https://en.wikipedia.org/wiki/Printed_circuit_board) page for more

A printed circuit board mechanically supports and electrically connects components using conductive traces. The LightBoard PCB integrates connectors, power routing, microcontroller circuitry, and LED interfaces.

---

## CMOS – Complementary Metal‑Oxide Semiconductor

> See the [Wikipedia](https://en.wikipedia.org/wiki/CMOS) page for more

CMOS refers to a semiconductor technology used to build transistors and logic circuits. On the LightBoard, a CMOS transistor is used to switch LED power based on the PWM signal from the microcontroller.

## H-Bridge

> See the [Wikipedia](https://en.wikipedia.org/wiki/H-bridge) page for more

An H-bridge is a circuit of four switches arranged so that voltage can be applied across a load in either direction. It is most commonly used to drive a DC motor forward and in reverse. On the Steering Board, the H-bridge is built into the motor driver IC.

---

## DRV8231DDAR – Brushed DC Motor Driver

The DRV8231DDAR is a Texas Instruments motor driver IC containing an H-bridge. The Steering Board uses it to drive its brushed DC steering motor from the 12V supply, based on commands from the microcontroller.

---

## Brushed DC Motor

> See the [Wikipedia](https://en.wikipedia.org/wiki/Brushed_DC_electric_motor) page for more

A brushed DC motor uses physical brushes to switch the current in its windings as it spins. Its speed and direction are controlled by the voltage applied across it, which makes it simple to drive with an H-bridge. Each steering assembly on the rover uses one.

---

## Encoder

> See the [Wikipedia](https://en.wikipedia.org/wiki/Rotary_encoder) page for more

An encoder is a sensor that converts the position or motion of a shaft into an electrical signal. The Steering Board reads an encoder to determine the current steering angle.

---

## Stall Current

Stall current is the maximum current a motor draws when its shaft is blocked and cannot turn. It is much higher than the running current, so it sets the ratings needed for connectors, traces, and fuses in the motor power path.

---

## Closed-Loop Control

> See the [Wikipedia](https://en.wikipedia.org/wiki/Control_loop) page for more

Closed-loop control continuously compares a measured value with a target and adjusts the output to reduce the difference. The Steering Board uses encoder feedback to drive the motor until the steering angle matches the commanded angle.

---

## Buck Converter

> See the [Wikipedia](https://en.wikipedia.org/wiki/Buck_converter) page for more

A buck converter is a switching regulator that steps a higher DC voltage down to a lower one with high efficiency. The Steering Board uses one to convert the 12V supply down to 5V.

---

## LDO – Low-Dropout Regulator

> See the [Wikipedia](https://en.wikipedia.org/wiki/Low-dropout_regulator) page for more

An LDO is a linear voltage regulator that can operate with a small difference between its input and output voltage. It produces a clean, stable output but wastes the voltage difference as heat. The Steering Board uses an LDO to step the 5V rail down to 3.3V for the digital logic.

---

## Fuse and Power Distribution Board

> See the [Wikipedia](https://en.wikipedia.org/wiki/Fuse_(electrical)) page for more

A fuse is a protective device that breaks a circuit when current exceeds a safe limit. On the rover, the power distribution board supplies each board and fuses it, so a fault on one board does not take down the rest.

---

## WAGO

> See the [Wikipedia](https://en.wikipedia.org/wiki/Wago) page for more

WAGO makes tool-less, spring-clamp connectors that let wires be inserted and released without screws or crimping. They are the team's standard connector family for power, motor, sensor, and CAN connections.

---

## CAN Transceiver

> See the [Wikipedia](https://en.wikipedia.org/wiki/CAN_bus) page for more

A CAN transceiver is the IC that converts the microcontroller's digital CAN signals into the differential signals on the CAN bus, and back. It is powered from the 5V rail on the Steering Board.

---

## Daisy-Chaining

> See the [Wikipedia](https://en.wikipedia.org/wiki/Daisy_chain_(electrical_engineering)) page for more

Daisy-chaining connects devices in series, with each board passing the bus on to the next. Boards with CAN In and CAN Out connectors can be wired one after another along a single bus.

---

## 120Ω Termination

> See the [Wikipedia](https://en.wikipedia.org/wiki/Electrical_termination) page for more

A CAN bus needs a 120Ω resistor across the CAN High and CAN Low lines at each physical end of the bus to prevent signal reflections. Only the two boards at the ends should have termination enabled, so boards include a selectable termination option.

---

## CAN Bus Load

CAN bus load is the percentage of the bus's available bandwidth being used by messages. Adding new messages, such as LED commands, increases the load, so it must be estimated to make sure reliable CAN communication is maintained.

---

## Addressable LEDs

An addressable LED has a small controller built in, so each LED or group of LEDs on a strip can be set to its own color and brightness over a single data line. This allows animations that a single PWM-driven strip cannot produce, at the cost of timing-sensitive data protocols.


---

## Duty Cycle

> See the [Wikipedia](https://en.wikipedia.org/wiki/Duty_cycle) page for more

Duty cycle is the percentage of each period that a PWM signal is high. A higher duty cycle delivers more average power, so the LEDs appear brighter.

---

## Level Shifting

> See the [Wikipedia](https://en.wikipedia.org/wiki/Level_shifter) page for more

Level shifting converts a digital signal from one voltage level to another, such as 3.3V from the microcontroller to the 5V that many addressable LEDs expect on their data line. A level shifter is the circuit or IC that does this.

---

## Signal Integrity

> See the [Wikipedia](https://en.wikipedia.org/wiki/Signal_integrity) page for more

Signal integrity describes how well a signal keeps its intended shape as it travels through a board or cable. Poor routing, long traces, and missing termination can cause noise, reflections, and corrupted data.

---

## Template Board

The template board is the shared base design that each board inherits from. It provides the common components and circuitry, such as power regulation and CAN, so individual boards only add what is specific to them.

---

## Gerbers

> See the [Wikipedia](https://en.wikipedia.org/wiki/Gerber_format) page for more

Gerber files are the standard output format sent to PCB manufacturers. Each file describes one layer of the board, such as copper, solder mask, or silkscreen, and they are accompanied by drill files for the holes.

---

## Bring-Up

Bring-up is the process of powering on and verifying a newly assembled board for the first time. It typically involves checking for shorts, powering up with a current-limited supply, verifying the voltage rails, and confirming that the microcontroller can be programmed and boots.

---

## Differential Pair

> See the [Wikipedia](https://en.wikipedia.org/wiki/Differential_signalling) page for more

A differential pair carries a signal as the voltage difference between two closely routed, equal-length traces. This makes it resistant to noise. The CAN High and CAN Low lines are routed as a differential pair.

---

## Strain Relief

> See the [Wikipedia](https://en.wikipedia.org/wiki/Strain_relief) page for more

Strain relief is a mechanical feature that keeps tugs and vibration on a wire from pulling on the connector or solder joint. It is important on a rover, where cables are subject to constant movement.