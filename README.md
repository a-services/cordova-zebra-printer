# cordova-zebra-printer

A Cordova plugin for Zebra CPCL printers for both iOS and Android with [Appery.io](https://appery.io) Ionic 5 bindings. This plugin only supports Zebra models that use CPCL printing. It has only been tested with Zebra QLn320 printers.

Based on https://github.com/cleversolutions/cordova-zebra-printer

## Using with Appery.io Ionic 5 projects

Export the latest version of plugin as ZIP file using **Code > Download ZIP**
https://github.com/a-services/cordova-zebra-printer.git

Import Cordova plugin into [Appery.io](https://appery.io) using **Resources > Cordova plugins**.

On **app** page open **Module** tab and add to **Imports** section:

```
import { ZebraPrinter } from 'ca-cleversolutions-zebraprinter/native/ngx';
```

and add to **Providers** section: `ZebraPrinter`


Then on the page where you would like to use it, on the **Code** tab, in the **Includes** section, add in **Custom includes** subsection an item:

```
Name: { ZebraPrinter }
Path: ca-cleversolutions-zebraprinter/native/ngx
```

In the **Variables** section add `zebraPrinter` variable with `ZebraPrinter` type and **Add DI** checked.

You can then add a TypeScript block to the button's click event:

```
this.zebraPrinter.discover()
    .then((res: any) => console.log('-- success:', res))
    .catch((error: any) => console.error('-- error:', error));
```
