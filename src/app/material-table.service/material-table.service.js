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
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
require("rxjs/add/operator/toPromise");
var MaterialTableService = (function () {
    function MaterialTableService(http, location) {
        this.http = http;
        this.location = location;
        // 接続URL
        this.baseUrl = 'http://localhost:8080/api/material';
    }
    MaterialTableService.prototype.getMaterial = function () {
        // console.log(this.http.get(this.baseUrl).toPromise())
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*
     *  データ登録
     */
    MaterialTableService.prototype.registerMaterial = function (data) {
        var _this = this;
        var postData = {
            'level': data.level,
            "fuel": data.fuel,
            'ammunition': data.ammunition,
            'steel': data.steel,
            'bauxite': data.bauxite,
            'bucket': data.bucket,
            'banner': data.banner,
            'dMaterial': data.dMaterial,
            'screw': data.screw,
            'winning_sortie': data.stWin,
            'defeatting_sortie': data.stLose,
            'expedition': data.msCnt,
            'successs_expedition': data.msSucc,
            'winning_exercises': data.ptWin,
            'defeatting_exercises': data.ptLose,
            'veterans': +data.point,
            'ranking': +data.rank,
            'date': data.viewedDate
        };
        console.info(postData);
        this.http.post(this.baseUrl + '/store', JSON.stringify(postData))
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            var response = res.json();
            if (response.result == -1) {
                alert('その日付のデータは既に登録済みです。');
            }
            else {
                _this.location.back();
            }
        })
            .catch(this.handleError);
    };
    MaterialTableService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MaterialTableService;
}());
MaterialTableService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        common_1.Location])
], MaterialTableService);
exports.MaterialTableService = MaterialTableService;
//# sourceMappingURL=material-table.service.js.map