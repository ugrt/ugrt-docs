---
title: Encoder Boards
draft: false
---

The encoder boards read the position of a motor so the rover can measure wheel speed and steering angle. They pair with the drive and [[/Archive/Electrical-Folder-25-26/steer-board|steer]] boards.

The boards use the `AS5134-ZSST` magnetic encoder ([DigiKey](https://www.digikey.ca/en/products/detail/ams-osram-usa-inc/AS5134-ZSST/2334772)). A diametrically polarized magnet is mounted on the motor shaft and the encoder continuously measures the magnetic field orientation. The board reads the raw angle and reports it back to its parent board.

# Related

- [[/Archive/Electrical-Folder-25-26/steer-board|Steer Board]]
