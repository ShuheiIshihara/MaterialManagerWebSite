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
var common_1 = require("@angular/common");
var material_table_service_1 = require("../material-table.service/material-table.service");
var MaterialCreateComponent = (function () {
    function MaterialCreateComponent(mService, location) {
        this.mService = mService;
        this.location = location;
    }
    /**
     *  初期読み込み
     */
    MaterialCreateComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.viewedDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate())).slice(-2);
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
        // console.log(this.material);
        // this.setResource();
        console.log(this.rank);
        console.log(this.point);
        console.log(this.viewedDate);
        this.mService.registerMaterial(this);
    };
    /**
     *  資材情報抽出
     */
    MaterialCreateComponent.prototype.setResource = function () {
        var _this = this;
        try {
            var jsonText = this.material.replace('svdata=', '');
            var jsonData = JSON.parse(jsonText);
            // 資源、資材
            jsonData.api_data.api_material.forEach(function (item, index) {
                switch (item.api_id) {
                    case 1:
                        _this.fuel = item.api_value;
                    case 2:
                        _this.ammunition = item.api_value;
                    case 3:
                        _this.steel = item.api_value;
                    case 4:
                        _this.bauxite = item.api_value;
                    case 5:
                        _this.banner = item.api_value;
                    case 6:
                        _this.bucket = item.api_value;
                    case 7:
                        _this.dMaterial = item.api_value;
                    case 8:
                        _this.screw = item.api_value;
                    default:
                }
            });
            // 提督レベル
            this.level = jsonData.api_data.api_basic.api_level;
            // 戦果
            // 出撃の勝利数
            this.stWin = jsonData.api_data.api_basic.api_st_win;
            // 出撃の敗北数
            this.stLose = jsonData.api_data.api_basic.api_st_lose;
            // 遠征の回数
            this.msCnt = jsonData.api_data.api_basic.api_ms_count;
            // 遠征の成功数
            this.msSucc = jsonData.api_data.api_basic.api_ms_success;
            // 演習の勝利数
            this.ptWin = jsonData.api_data.api_basic.api_pt_win;
            // 演習の敗北数
            this.ptLose = jsonData.api_data.api_basic.api_pt_lose;
            this.material = "OK";
        }
        catch (err) {
            console.error(err.message);
            this.material = "";
        }
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
    __metadata("design:paramtypes", [material_table_service_1.MaterialTableService,
        common_1.Location])
], MaterialCreateComponent);
exports.MaterialCreateComponent = MaterialCreateComponent;
//# sourceMappingURL=material-create.js.map