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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZebraPrinterOriginal = /** @class */ (function (_super) {
    __extends(ZebraPrinterOriginal, _super);
    function ZebraPrinterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZebraPrinterOriginal.prototype.print = function (cpcl) { return cordova(this, "print", {}, arguments); };
    ;
    ZebraPrinterOriginal.prototype.isConnected = function () { return cordova(this, "isConnected", {}, arguments); };
    ;
    ZebraPrinterOriginal.prototype.printerStatus = function () { return cordova(this, "printerStatus", {}, arguments); };
    ;
    ZebraPrinterOriginal.prototype.connect = function (adress) { return cordova(this, "connect", {}, arguments); };
    ;
    ZebraPrinterOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    ;
    ZebraPrinterOriginal.prototype.discover = function () { return cordova(this, "discover", {}, arguments); };
    ;
    ZebraPrinterOriginal.pluginName = "ZebraPrinter";
    ZebraPrinterOriginal.plugin = "@ionic-native/zebra-printer";
    ZebraPrinterOriginal.pluginRef = "";
    ZebraPrinterOriginal.repo = "https://github.com/a-services/cordova-zebra-printer.git";
    ZebraPrinterOriginal.platforms = ["Android", "iOS"];
    return ZebraPrinterOriginal;
}(IonicNativePlugin));
var ZebraPrinter = new ZebraPrinterOriginal();
export { ZebraPrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plYnJhLXByaW50ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0R0QyxnQ0FBaUI7Ozs7SUFHakQsNEJBQUssYUFBQyxJQUFZO0lBQTJCLENBQUM7SUFHOUMsa0NBQVc7SUFBZ0MsQ0FBQztJQUc1QyxvQ0FBYTtJQUFzQyxDQUFDO0lBR3BELDhCQUFPLGFBQUMsTUFBYztJQUEyQixDQUFDO0lBR2xELGlDQUFVO0lBQTRCLENBQUM7SUFHdkMsK0JBQVE7SUFBdUMsQ0FBQzs7Ozs7O3VCQW5FbEQ7RUFpRGtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJTdGF0dXMge1xuICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGlzUmVhZHlUb1ByaW50PzogYm9vbGVhbjtcbiAgaXNQYXVzZWQ/OiBib29sZWFuO1xuICBpc1JlY2VpdmVCdWZmZXJGdWxsPzogYm9vbGVhbjtcbiAgaXNSaWJib25PdXQ/OiBib29sZWFuO1xuICBpc1BhcGVyT3V0PzogYm9vbGVhbjtcbiAgaXNIZWFkVG9vSG90PzogYm9vbGVhbjtcbiAgaXNIZWFkT3Blbj86IGJvb2xlYW47XG4gIGlzSGVhZENvbGQ/OiBib29sZWFuO1xuICBpc1BhcnRpYWxGb3JtYXRJblByb2dyZXNzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBaZWJyYSBQcmludGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFdvcmtpbmcgd2l0aCBaZWJyYSBDUENMIHByaW50ZXJzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaZWJyYVByaW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3plYnJhLXByaW50ZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHplYnJhUHJpbnRlcjogWmVicmFQcmludGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnplYnJhUHJpbnRlci5kaXNjb3ZlcigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmVicmFQcmludGVyJyxcbiAgcGx1Z2luOiAnQGlvbmljLW5hdGl2ZS96ZWJyYS1wcmludGVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZVxuICBwbHVnaW5SZWY6ICcnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYS1zZXJ2aWNlcy9jb3Jkb3ZhLXplYnJhLXByaW50ZXIuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFplYnJhUHJpbnRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHByaW50KGNwY2w6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBwcmludGVyU3RhdHVzKCk6IFByb21pc2U8UHJpbnRlclN0YXR1cz4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0KGFkcmVzczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9O1xuXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBkaXNjb3ZlcigpOiBQcm9taXNlPEFycmF5PFByaW50ZXI+PiB7IHJldHVybjsgfTtcblxufVxuIl19