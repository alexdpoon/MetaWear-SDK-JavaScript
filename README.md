## MetaWear SDK for Javascript by MBIENTLAB (modified to work with Mac OS X Catalina)

Fork of [mbientlab/MetaWear-SDK-JavaScript](https://github.com/mbientlab/MetaWear-SDK-JavaScript) that uses [@abandonware/noble](https://github.com/abandonware/noble) under the hood for BLE and therefore works on Mac OS X Catalina.

### Installation

Like the original MetaWear SDK for Javascript, this fork still requires Node 8 and XCode. If you already have Node 10+, you can downgrade to Node 8, or use nvm to allow your machine to run multiple version of Node in parallel (which is what I did).

Don't install noble. If you already have it installed, npm uninstall --save noble.

Then just do npm install --save "https://github.com/alexdpoon/MetaWear-SDK-JavaScript"
