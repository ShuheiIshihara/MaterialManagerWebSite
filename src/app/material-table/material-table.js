"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_table_service_1 = require("../material-table.service/material-table.service");
var MaterialTableComponent = (function () {
    function MaterialTableComponent(mService) {
        this.mService = mService;
        this.materials = [];
    }
    MaterialTableComponent.prototype.ngOnInit = function () {
        this.getMaterial();
    };
    MaterialTableComponent.prototype.getMaterial = function () {
        var _this = this;
        this.mService.getMaterial().then(function (materials) { return _this.materials = materials; });
    };
    return MaterialTableComponent;
}());
MaterialTableComponent = __decorate([
    core_1.Component({
        selector: 'material-table',
        templateUrl: 'template/material-table.html'
    })
    /**
      * 資材描画テーブルクラス
      */
    ,
    __metadata("design:paramtypes", [material_table_service_1.MaterialTableService])
], MaterialTableComponent);
exports.MaterialTableComponent = MaterialTableComponent;
//# sourceMappingURL=material-table.js.map