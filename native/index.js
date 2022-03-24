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
    ZebraPrinterOriginal.plugin = "ca-cleversolutions-zebraprinter";
    ZebraPrinterOriginal.pluginRef = "";
    ZebraPrinterOriginal.repo = "https://github.com/a-services/cordova-zebra-printer.git";
    ZebraPrinterOriginal.platforms = ["Android", "iOS"];
    return ZebraPrinterOriginal;
}(IonicNativePlugin));
var ZebraPrinter = new ZebraPrinterOriginal();
export { ZebraPrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plYnJhLXByaW50ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0N0QyxnQ0FBaUI7Ozs7SUFHakQsNEJBQUssYUFBQyxJQUFZO0lBQTJCLENBQUM7SUFHOUMsa0NBQVc7SUFBZ0MsQ0FBQztJQUc1QyxvQ0FBYTtJQUFzQyxDQUFDO0lBR3BELDhCQUFPLGFBQUMsTUFBYztJQUEyQixDQUFDO0lBR2xELGlDQUFVO0lBQTRCLENBQUM7SUFHdkMsK0JBQVE7SUFBdUMsQ0FBQzs7Ozs7O3VCQWxFbEQ7RUFnRGtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyU3RhdHVzIHtcbiAgY29ubmVjdGVkOiBib29sZWFuO1xuICBpc1JlYWR5VG9QcmludD86IGJvb2xlYW47XG4gIGlzUGF1c2VkPzogYm9vbGVhbjtcbiAgaXNSZWNlaXZlQnVmZmVyRnVsbD86IGJvb2xlYW47XG4gIGlzUmliYm9uT3V0PzogYm9vbGVhbjtcbiAgaXNQYXBlck91dD86IGJvb2xlYW47XG4gIGlzSGVhZFRvb0hvdD86IGJvb2xlYW47XG4gIGlzSGVhZE9wZW4/OiBib29sZWFuO1xuICBpc0hlYWRDb2xkPzogYm9vbGVhbjtcbiAgaXNQYXJ0aWFsRm9ybWF0SW5Qcm9ncmVzcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgWmVicmEgUHJpbnRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgWmVicmFQcmludGVyIH0gZnJvbSAnY2EtY2xldmVyc29sdXRpb25zLXplYnJhcHJpbnRlci9uYXRpdmUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6ZWJyYVByaW50ZXI6IFplYnJhUHJpbnRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy56ZWJyYVByaW50ZXIuZGlzY292ZXIoKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1plYnJhUHJpbnRlcicsXG4gIHBsdWdpbjogJ2NhLWNsZXZlcnNvbHV0aW9ucy16ZWJyYXByaW50ZXInLFxuICBwbHVnaW5SZWY6ICcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Etc2VydmljZXMvY29yZG92YS16ZWJyYS1wcmludGVyLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFplYnJhUHJpbnRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHByaW50KGNwY2w6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBwcmludGVyU3RhdHVzKCk6IFByb21pc2U8UHJpbnRlclN0YXR1cz4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0KGFkcmVzczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9O1xuXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBkaXNjb3ZlcigpOiBQcm9taXNlPEFycmF5PFByaW50ZXI+PiB7IHJldHVybjsgfTtcblxufVxuIl19