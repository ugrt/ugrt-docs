---
title: Battery and Battery Management System (BMS)
---

# BMS

The battery management system helps us protect the battery from operating in unsafe territory such as being charged too much or too little in such a way where it can get damaged. We use a [**LiPo 6S M Series Standard BMS**](https://www.dalybms.com/20s-lifepo4-bms-m-series-standard-bms-3s-to-24s-150a-200a-bms-product/) from Daly BMS. Daly seems to be a reputable brand and they are commonly used in robotics. This BMS is rated for 200A and has: short circuit, over-discharge and temperature protection.

> Important remark: this BMS requires the NTC thermal probe to be inserted in order for it to function. The balance connectors also need to be in the correct order.

The balance connector measures the voltage between each cell in the battery. Since we use a 6S battery there are 6+1 wires in the balance connector. One is for ground and the rest measure the positive side of each cell. Please note that the adapter for the Tattu brand batteries does not use the odd colored cable (the red one) to indicate the ground. Below demonstrates how **not** to setup the balance connector adapter. <br> <p align="center"> <img src="images/bad-bms-setup.jpg" width="500"> </p>

# Battery

We use a [Tattu G-Tech 6S 8000 mAh 25C 22.2V LiPo Battery Pack](https://genstattu.com/tattu-8000mah-22-2v-25c-6s1p-lipo-battery-pack-with-xt60-plug.html) from Tattu Gens. The battery uses an XT60 plug and a special type of balance connector.
