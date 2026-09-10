---
title: Steer Board
draft: false
---

The steer board controls the angle of a brushed DC motor using an H-bridge motor driver and an [[encoder-boards|Encoder Board]]. There are 6 steer boards used on the rover to control each wheel independantly. Each steer board is connected to the [[can|CAN]] network of the rover. The steer board uses the `STM32G0B1CET6` to control everything. The steer board is based on the `STM32G0B1CET6` tempalte board that can be found in the [GitHub](https://github.com/ugrt/Electrical-2026).

The steer board only requires 12v power supply. The 12v supply is used as the motor drive voltage. There is an on board buck converter to step 12v down to 5v. 5v is used for the CANFD tranceiver. There is also an on board LDO (Low-Dropout regulator) to convert the 5v into 3v3 for everything else on the board. This includes the microcontroller, and the motor driver logic. The board communicates to the encoder over I2C.

# Bill of Materials

# Gallery

Assembled PCB.
![[steer-board-built.jpg]]
KiCad 2D PCB model.
![[steer-board-pcb.png]]
