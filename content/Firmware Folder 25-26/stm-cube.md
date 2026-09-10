---
title: STM32Cube
---

We use the STM Cube suite to write firmware for the microprocessors we use in the rover. To get introduced to the STM Cube suite we recommend you see the following resources:

- [STM32 Development Made Easy in VS Code by PR TechTalk](https://www.youtube.com/watch?v=aLD9zggmop4)
- [Firmware CAN Cheat Sheet by Matthew Salazar](https://uoguelphca.sharepoint.com/:w:/s/UGRT2/IQC3aC__CbjHRJKP1y8I6A5uAemKPLo1Yo64xA2OJ4Ab364?e=iSeQQX)

## Terminology

- CAN: Controller Area Network

## Introduction

When creating a project, you **must** create it from `STM32CubeMX` as it allows you to configure the build type as CMAKE. This is crucial for building across different IDEs.

When getting started using STM32CubeIDE is a good approach. VSCode can also be used for programming and debugging if a more lightweight and responsive environment is preferred. See [STM32 Development Made Easy in VS Code by PR TechTalk](https://www.youtube.com/watch?v=aLD9zggmop4) for more.

Once you have configured your development environment visit the `STM32G0B1CET6_CAN_Prototype` for template code used across different boards.

## Hardware

All of the PCBs designed use the `STM32G0B1CET6`. It is important that you understand the microcontroller you are working with. Here can be found the [STM32G0B1CET6 Datasheet](https://www.st.com/en/microcontrollers-microprocessors/stm32g0b1ce.html).

The microcontrollers within the rover communicate over the CAN bus. See the [Firmware CAN Cheat Sheet by Matthew Salazar](https://uoguelphca.sharepoint.com/:w:/s/UGRT2/IQC3aC__CbjHRJKP1y8I6A5uAemKPLo1Yo64xA2OJ4Ab364?e=iSeQQX) or visit the [[/firmware/can | CAN]] page for more.

## Tools Used

Not all of these tools are required. It is highly recommended that you have `STM32CubeMX` and `STM32 ST-LINK V2 Device Driver` at the least to generate and program firmware. If a version is not listed it should not matter what version is installed.

- [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html) - Version 6.14.1
- [STM32CubeMCU Finder](https://www.st.com/en/development-tools/st-mcu-finder-pc.html#overview) - Version (N/A)
- [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) - Version (N/A)
- [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html) - Version 1.18.1
- [STM32 ST-LINK V2 Device Driver](https://www.st.com/en/development-tools/stsw-link009.html) - Version (N/A)
