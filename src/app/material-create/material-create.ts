import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { MaterialTableService } from '../material-table.service/material-table.service';

@Component({
  selector: 'material-create',
  templateUrl: 'template/material-create.html'
})

/**
 *  資材追加画面
 */
export class MaterialCreateComponent implements OnInit {

  material: string;
  viewedDate: string;

  /* 資源 */
  fuel: number;
  ammunition: number;
  steel: number;
  bauxite: number;

  /* 資材 */
  bucket: number;
  banner: number;
  dMaterial: number;
  screw: number;

  /* 戦果等 */
  stWin: number;
  stLose: number;
  msCnt: number;
  msSucc: number;
  ptWin: number;
  ptLose: number;
  rank: number;
  point: number;
  level: number;

  constructor(
    private mService: MaterialTableService,
    private location: Location
  ) { }

  /**
   *  初期読み込み
   */
  ngOnInit(): void {
    var today = new Date();
    this.viewedDate = today.getFullYear() + '-' + ('0'+(today.getMonth()+1)).slice(-2) + '-' + ('0'+(today.getDate())).slice(-2);
  }

  /**
   *  戻る
   */
  goBack(): void {
    this.location.back();
  }

  /**
   *  登録
   */
  register(): void {
    // console.log(this.material);
    // this.setResource();
    console.log(this.rank);
    console.log(this.point);
    console.log(this.viewedDate);

    this.mService.registerMaterial(this);

  }

  /**
   *  資材情報抽出
   */
  setResource(): void {
    try {

      var jsonText = this.material.replace('svdata=','');
      var jsonData = JSON.parse(jsonText)

      // 資源、資材
      jsonData.api_data.api_material.forEach((item: any, index: number) => {
        switch(item.api_id) {
          case 1:
            this.fuel = item.api_value;
          case 2:
            this.ammunition = item.api_value;
          case 3:
            this.steel = item.api_value;
          case 4:
            this.bauxite = item.api_value;
          case 5:
            this.banner = item.api_value;
          case 6:
            this.bucket = item.api_value;
          case 7:
            this.dMaterial = item.api_value;
          case 8:
            this.screw = item.api_value;
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

      this.material = "OK"
    } catch(err) {
      console.error(err.message)
      this.material = "";
    }
  }
}
