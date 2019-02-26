"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kanmusu_service_1 = require("../kanmusu.service/kanmusu.service");
var KanmusuComponent = (function () {
    function KanmusuComponent() {
        this.kanmusuList = [];
        this.firstFleetList = [];
        this.kService = new kanmusu_service_1.KanmusuService();
    }
    KanmusuComponent.prototype.ngOnInit = function () { };
    /**
     *  資材情報抽出
     */
    KanmusuComponent.prototype.setResource = function () {
        try {
            var jsonText = this.svdata.replace('svdata=', '');
            var fleetList = this.kService.getKanmusuList(jsonText, this.isSort, this.isCond);
            this.kanmusuList = fleetList.allFleet;
            this.firstFleetList = fleetList.firstFleet;
            this.svdata = "OK";
        }
        catch (err) {
            console.error(err.message);
            this.svdata = "";
        }
    };
    return KanmusuComponent;
}());
KanmusuComponent = __decorate([
    core_1.Component({
        selector: 'kanmusu',
        templateUrl: 'template/kanmusu.html'
    })
], KanmusuComponent);
exports.KanmusuComponent = KanmusuComponent;
//# sourceMappingURL=kanmusu.js.map