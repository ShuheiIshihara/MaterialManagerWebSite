import { Component, OnInit } from '@angular/core';

import { Material }             from '../material/material';
import { MaterialTableService } from '../material-table.service/material-table.service';

@Component({
  selector: 'material-table',
  templateUrl: 'template/material-table.html'
})

/**
  * 資材描画テーブルクラス
  */
export class MaterialTableComponent implements OnInit {
  materials: Material[] = [];

  constructor(private mService: MaterialTableService) { }

  ngOnInit(): void {
    this.getMaterial();
  }

  getMaterial(): void {
    this.mService.getMaterial().then(materials => this.materials = materials);
  }

}
