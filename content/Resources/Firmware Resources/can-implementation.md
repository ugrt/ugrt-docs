---
title: CAN Implementation
---

> Adapted from the CIRC 2026 Electrical / Firmware CAN Cheat Sheet by Matthew Salazar.

This page is about implementing CAN / CAN FD on the microcontroller. For the protocol and hardware see [[/Resources/Electrical Resources/can|CAN Bus]], and for the physical bus see [[/Resources/Electrical Resources/can-harness|CAN Wiring Harness]].

## STM32 Implementation

This section uses the `STM32G0B1CET6` as an example. The `STM32G0B1CET6_CAN_Prototype` repo has source code for setting up CAN / CAN FD. Do the initial configuration with the `.ioc` file through STM32CubeMX.

Test your software with the internal loopback feature on the STM32 first, then send data to another device such as a second microcontroller or a USB-CAN adapter. A good USB-CAN tool is [Cangaroo](https://github.com/HubertD/cangaroo).

First pick the nominal bit rate for your bus (e.g. 100 kbps, 250 kbps, 500 kbps, or 1 Mbps). Then work out the clock prescaler, Time Seg 1, and Time Seg 2. If you use CAN FD with Bit Rate Switching (BRS), do the same calculations again for the data phase bit rate (for example, arbitration at 500 kbps and data phase at 1 Mbps).

In the `.ioc` file, also enable a pull-up resistor on the RX line of the CAN interface if your transceiver does not do this for you, and enable interrupts so messages can be received asynchronously.

Rough sequence to get started (see the GitHub template code for reference):

1. Create your RX and TX headers.
2. Configure the TX headers (data size, ID, frame type, transmit or request).
3. Set up filters if you want them, otherwise configure accordingly.
4. Activate notifications so the program can accept new messages asynchronously.
5. Start the CAN peripheral. Initialization alone does not start it, e.g. `HAL_FDCAN_Start(&hfdcan1);`.
6. Define your receive message callback (it must match the name declared in the header exactly).
7. To test sending from the main loop: `HAL_FDCAN_AddMessageToTxFifoQ(&hfdcan1, &TxHeader, TxData);`.

Ask your firmware lead for more details as needed.

## CAN Bus Speed Calculations

If you know the clock speed of your device and the speed you want, online calculators can do this for you.

Symbols:

- `Fclk`: CAN peripheral clock (Hz)
- `baud`: desired bit rate (bit/s)
- `BRP`: Baud Rate Prescaler (integer)
- `TQ`: Time Quantum
- `NTQ`: Total TQs per bit (integer)
- `Tseg1`, `Tseg2`: Time Segments 1 and 2 (TQs, integers)
- `SyncSeg` = 1 TQ
- `SJW`: Sync Jump Width (TQs, integer)
- `SP`: Sample Point (fraction)

Core equations:

```
NTQ  = 1 + Tseg1 + Tseg2
TQ   = BRP / Fclk
baud = 1 / Tbit = Fclk / (BRP * NTQ)
BRP  = Fclk / (baud * NTQ)
SP   = (1 + Tseg1) / NTQ
Tseg1 = SP * NTQ - 1
Tseg2 = NTQ - 1 - Tseg1
SJW  <= Tseg2
```

## CAN Bootloader (Flashing over CAN)

Not yet documented.

## Resources

1. CAN and CAN FD Protocol
2. CAN Bus: Serial Communication, How it Works?
3. MCP2562 Product Page
4. STM32G0B1CET6 CAN Prototype Code
