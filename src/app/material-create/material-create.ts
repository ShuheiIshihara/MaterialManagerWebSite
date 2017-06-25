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
export class MaterialCreateComponent implements OnInit{

  material: string;
  date: Date;

  constructor(private mService: MaterialTableService) { }

  /**
   *  初期読み込み
   */
  ngOnInit(): void {
    this.date = new Date();
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
    console.log(this.material);
    console.log(this.rank);
    console.log(this.point);
    console.log(this.date);
  }
}
