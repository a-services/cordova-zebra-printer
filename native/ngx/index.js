var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZebraPrinter = /** @class */ (function (_super) {
    __extends(ZebraPrinter, _super);
    function ZebraPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZebraPrinter.prototype.print = function (cpcl) { return cordova(this, "print", {}, arguments); };
    ;
    ZebraPrinter.prototype.isConnected = function () { return cordova(this, "isConnected", {}, arguments); };
    ;
    ZebraPrinter.prototype.printerStatus = function () { return cordova(this, "printerStatus", {}, arguments); };
    ;
    ZebraPrinter.prototype.connect = function (adress) { return cordova(this, "connect", {}, arguments); };
    ;
    ZebraPrinter.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    ;
    ZebraPrinter.prototype.discover = function () { return cordova(this, "discover", {}, arguments); };
    ;
    ZebraPrinter.pluginName = "ZebraPrinter";
    ZebraPrinter.plugin = "ca-cleversolutions-zebraprinter";
    ZebraPrinter.pluginRef = "";
    ZebraPrinter.repo = "https://github.com/a-services/cordova-zebra-printer.git";
    ZebraPrinter.platforms = ["Android", "iOS"];
    ZebraPrinter = __decorate([
        Injectable()
    ], ZebraPrinter);
    return ZebraPrinter;
}(IonicNativePlugin));
export { ZebraPrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plYnJhLXByaW50ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0N0QyxnQ0FBaUI7Ozs7SUFHakQsNEJBQUssYUFBQyxJQUFZO0lBQTJCLENBQUM7SUFHOUMsa0NBQVc7SUFBZ0MsQ0FBQztJQUc1QyxvQ0FBYTtJQUFzQyxDQUFDO0lBR3BELDhCQUFPLGFBQUMsTUFBYztJQUEyQixDQUFDO0lBR2xELGlDQUFVO0lBQTRCLENBQUM7SUFHdkMsK0JBQVE7SUFBdUMsQ0FBQzs7Ozs7O0lBbEJyQyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBaER6QjtFQWdEa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJTdGF0dXMge1xuICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGlzUmVhZHlUb1ByaW50PzogYm9vbGVhbjtcbiAgaXNQYXVzZWQ/OiBib29sZWFuO1xuICBpc1JlY2VpdmVCdWZmZXJGdWxsPzogYm9vbGVhbjtcbiAgaXNSaWJib25PdXQ/OiBib29sZWFuO1xuICBpc1BhcGVyT3V0PzogYm9vbGVhbjtcbiAgaXNIZWFkVG9vSG90PzogYm9vbGVhbjtcbiAgaXNIZWFkT3Blbj86IGJvb2xlYW47XG4gIGlzSGVhZENvbGQ/OiBib29sZWFuO1xuICBpc1BhcnRpYWxGb3JtYXRJblByb2dyZXNzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBaZWJyYSBQcmludGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaZWJyYVByaW50ZXIgfSBmcm9tICdjYS1jbGV2ZXJzb2x1dGlvbnMtemVicmFwcmludGVyL25hdGl2ZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHplYnJhUHJpbnRlcjogWmVicmFQcmludGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnplYnJhUHJpbnRlci5kaXNjb3ZlcigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmVicmFQcmludGVyJyxcbiAgcGx1Z2luOiAnY2EtY2xldmVyc29sdXRpb25zLXplYnJhcHJpbnRlcicsXG4gIHBsdWdpblJlZjogJycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYS1zZXJ2aWNlcy9jb3Jkb3ZhLXplYnJhLXByaW50ZXIuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWmVicmFQcmludGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnQoY3BjbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9O1xuXG4gIEBDb3Jkb3ZhKClcbiAgaXNDb25uZWN0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIHByaW50ZXJTdGF0dXMoKTogUHJvbWlzZTxQcmludGVyU3RhdHVzPiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoYWRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGRpc2NvdmVyKCk6IFByb21pc2U8QXJyYXk8UHJpbnRlcj4+IHsgcmV0dXJuOyB9O1xuXG59XG4iXX0=