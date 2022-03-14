import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface Printer {
  name: string;
  address: string;
}

export interface PrinterStatus {
  connected: boolean;
  isReadyToPrint?: boolean;
  isPaused?: boolean;
  isReceiveBufferFull?: boolean;
  isRibbonOut?: boolean;
  isPaperOut?: boolean;
  isHeadTooHot?: boolean;
  isHeadOpen?: boolean;
  isHeadCold?: boolean;
  isPartialFormatInProgress?: boolean;
}

/**
 * @name Zebra Printer
 * @description
 * Working with Zebra CPCL printers
 *
 * @usage
 * ```typescript
 * import { ZebraPrinter } from '@ionic-native/zebra-printer';
 *
 *
 * constructor(private zebraPrinter: ZebraPrinter) { }
 *
 * ...
 *
 * this.zebraPrinter.discover()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ZebraPrinter',
  plugin: '@ionic-native/zebra-printer', // npm package name
  pluginRef: '', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/a-services/cordova-zebra-printer.git', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported
})
@Injectable()
export class ZebraPrinter extends IonicNativePlugin {

  @Cordova()
  print(cpcl: string): Promise<any> { return; };

  @Cordova()
  isConnected(): Promise<boolean> { return; };

  @Cordova()
  printerStatus(): Promise<PrinterStatus> { return; };

  @Cordova()
  connect(adress: string): Promise<any> { return; };

  @Cordova()
  disconnect(): Promise<any> { return; };

  @Cordova()
  discover(): Promise<Array<Printer>> { return; };

}
