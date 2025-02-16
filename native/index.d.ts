import { IonicNativePlugin } from '@ionic-native/core';
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
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ZebraPrinter } from 'ca-cleversolutions-zebraprinter/native/ngx';
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
export declare class ZebraPrinterOriginal extends IonicNativePlugin {
    print(cpcl: string): Promise<any>;
    isConnected(): Promise<boolean>;
    printerStatus(): Promise<PrinterStatus>;
    connect(adress: string): Promise<any>;
    disconnect(): Promise<any>;
    discover(): Promise<Array<Printer>>;
}

export declare const ZebraPrinter: ZebraPrinterOriginal;