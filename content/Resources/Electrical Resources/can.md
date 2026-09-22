---
title: CAN Bus
---

> Adapted from the CIRC 2026 Electrical / Firmware CAN Cheat Sheet by Matthew Salazar.

CAN (Controller Area Network) is a bus standard used in cars and other vehicles. It uses differential signalling over a twisted pair, which reduces electrical noise and makes it reliable. For the microcontroller side see [[/Resources/Firmware Resources/can-implementation|CAN Implementation]], and for building the physical bus see [[/Resources/Electrical Resources/can-harness|CAN Wiring Harness]].

There are a few versions of CAN. The two that matter to the team are `CAN 2.0` (Classic CAN) and `CAN FD`. Classic CAN has a maximum payload of 8 bytes. CAN FD (Flexible Data Rate) allows 8 to 64 bytes and a higher baud rate. We use `CAN FD` for the larger payload and higher baud rate.

## Electrical Properties

CAN uses two wires, `CAN High` and `CAN Low`. The signal is **differential**, so it is the voltage between the two wires that matters, not the voltage to ground. This gives CAN:

- Good noise immunity.
- Reliable communication over long distances.
- Lower electromagnetic interference (EMI).

### Dominant and recessive states

- An idle state is **recessive** and reads as a `1`.
- A bit being transmitted is **dominant** and reads as a `0`.

Dominant and recessive states set the message priority through the identifier field. The node that loses arbitration stops transmitting but keeps listening, so there are no data collisions.

CAN is **half-duplex** (one node transmits at a time) and **asynchronous** (devices do not share a clock, they agree on a baud rate).

## Data Frame Structure

- **Start of Frame**: a dominant bit starts the frame and begins arbitration.
- **Message Identifier**: 11-bit identifier used for arbitration priority (lower value means higher priority) and to identify the device.
- **Remote Transmission Request**: says whether this is a data or request frame (`0` sends data, `1` requests data).
- **Control**: length of the data.
- **Data Field**: up to eight bytes of data for standard, non-FD CAN.
- **CRC Sequence**: 15-bit cyclic redundancy check.
- **Acknowledgment**: confirms the CRC status of the receiving nodes.
- **End of Frame**: marks the end of the frame.

### CAN FD

- Bandwidth can reach 5 Mbps.
- The data and CRC bits can be sent at a higher rate while the rest of the frame stays at the standard rate.
- Up to 64 bytes of data.
- Backward compatible with standard CAN.

## Termination

At high speeds, if the line is not terminated, signal edges reflect back down the bus and cause interference and false bits. A 120 Ω resistor absorbs these reflections and is **required at each physical end of the bus** (nowhere else).

## Required Hardware

This section uses the `MCP2562-E-SN` as an example. The same approach to reading the datasheet applies to most CAN transceivers.

What to look for in a transceiver datasheet:

- Supported transfer rate.
- ISO standards.
- The quick reference schematic showing how to wire the part.
- The function of each pin.

MCP2562 pinout:

| Pin  | Function                                                        |
| ---- | --------------------------------------------------------------- |
| TXD  | Transmit Data Input                                             |
| VSS  | Ground                                                          |
| VDD  | Supply Voltage                                                  |
| RXD  | Received Data                                                   |
| STBY | Standby Mode Input                                              |
| CANH | CAN High Level Voltage I/O                                      |
| CANL | CAN Low Level Voltage I/O                                       |
| Vio  | Digital I/O Supply Pin (tie to 3.3V if the MCU uses 3.3V logic) |

### Normal vs standby mode

- **Normal Mode**: a low signal on `STBY`. Both the transmitter and receiver are active.
- **Standby Mode**: a high signal on `STBY`. The transmitter and the high-speed part of the receiver switch off to save power.
- **Default State**: the `STBY` pin has an internal pull-up to VDD or VIO, so the part defaults to standby unless driven low.
