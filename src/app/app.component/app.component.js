"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = '艦これ資材データ一覧';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"kancolle\">\n      <div class=\"mTitle\">{{title}}</div>\n      <div class=\"mButton\"><button class=\"btn btn-success\" [routerLink]=\"['/material/create']\">\u8FFD\u52A0</button></div>\n      <div class=\"mButton\"><button class=\"btn btn-primary\" [routerLink]=\"['/material']\">\u4E00\u89A7</button></div>\n    </div>\n\n    <router-outlet></router-outlet>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map