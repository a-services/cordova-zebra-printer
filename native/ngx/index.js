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
    ZebraPrinter.plugin = "@ionic-native/zebra-printer";
    ZebraPrinter.pluginRef = "";
    ZebraPrinter.repo = "https://github.com/a-services/cordova-zebra-printer.git";
    ZebraPrinter.platforms = ["Android", "iOS"];
    ZebraPrinter = __decorate([
        Injectable()
    ], ZebraPrinter);
    return ZebraPrinter;
}(IonicNativePlugin));
export { ZebraPrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plYnJhLXByaW50ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0R0QyxnQ0FBaUI7Ozs7SUFHakQsNEJBQUssYUFBQyxJQUFZO0lBQTJCLENBQUM7SUFHOUMsa0NBQVc7SUFBZ0MsQ0FBQztJQUc1QyxvQ0FBYTtJQUFzQyxDQUFDO0lBR3BELDhCQUFPLGFBQUMsTUFBYztJQUEyQixDQUFDO0lBR2xELGlDQUFVO0lBQTRCLENBQUM7SUFHdkMsK0JBQVE7SUFBdUMsQ0FBQzs7Ozs7O0lBbEJyQyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBakR6QjtFQWlEa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlclN0YXR1cyB7XG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgaXNSZWFkeVRvUHJpbnQ/OiBib29sZWFuO1xuICBpc1BhdXNlZD86IGJvb2xlYW47XG4gIGlzUmVjZWl2ZUJ1ZmZlckZ1bGw/OiBib29sZWFuO1xuICBpc1JpYmJvbk91dD86IGJvb2xlYW47XG4gIGlzUGFwZXJPdXQ/OiBib29sZWFuO1xuICBpc0hlYWRUb29Ib3Q/OiBib29sZWFuO1xuICBpc0hlYWRPcGVuPzogYm9vbGVhbjtcbiAgaXNIZWFkQ29sZD86IGJvb2xlYW47XG4gIGlzUGFydGlhbEZvcm1hdEluUHJvZ3Jlc3M/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFplYnJhIFByaW50ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogV29ya2luZyB3aXRoIFplYnJhIENQQ0wgcHJpbnRlcnNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFplYnJhUHJpbnRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvemVicmEtcHJpbnRlcic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemVicmFQcmludGVyOiBaZWJyYVByaW50ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuemVicmFQcmludGVyLmRpc2NvdmVyKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdaZWJyYVByaW50ZXInLFxuICBwbHVnaW46ICdAaW9uaWMtbmF0aXZlL3plYnJhLXByaW50ZXInLCAvLyBucG0gcGFja2FnZSBuYW1lXG4gIHBsdWdpblJlZjogJycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXNlcnZpY2VzL2NvcmRvdmEtemVicmEtcHJpbnRlci5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWRcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWmVicmFQcmludGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnQoY3BjbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9O1xuXG4gIEBDb3Jkb3ZhKClcbiAgaXNDb25uZWN0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIHByaW50ZXJTdGF0dXMoKTogUHJvbWlzZTxQcmludGVyU3RhdHVzPiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoYWRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH07XG5cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfTtcblxuICBAQ29yZG92YSgpXG4gIGRpc2NvdmVyKCk6IFByb21pc2U8QXJyYXk8UHJpbnRlcj4+IHsgcmV0dXJuOyB9O1xuXG59XG4iXX0=