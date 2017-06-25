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
var MaterialCreateComponent = (function () {
    function MaterialCreateComponent(mService) {
        this.mService = mService;
    }
    /**
     *  初期読み込み
     */
    MaterialCreateComponent.prototype.ngOnInit = function () {
        this.date = new Date();
    };
    /**
     *  戻る
     */
    MaterialCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    /**
     *  登録
     */
    MaterialCreateComponent.prototype.register = function () {
        console.log(this.material);
        console.log(this.rank);
        console.log(this.point);
        console.log(this.date);
    };
    return MaterialCreateComponent;
}());
MaterialCreateComponent = __decorate([
    core_1.Component({
        selector: 'material-create',
        templateUrl: 'template/material-create.html'
    })
    /**
     *  資材追加画面
     */
    ,
    __metadata("design:paramtypes", [material_table_service_1.MaterialTableService])
], MaterialCreateComponent);
exports.MaterialCreateComponent = MaterialCreateComponent;
//# sourceMappingURL=material-create.js.map