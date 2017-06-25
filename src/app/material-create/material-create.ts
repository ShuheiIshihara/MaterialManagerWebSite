import { Component, Input, OnInit } from '@angular/core';
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
  today: Date;

  constructor(private mService: MaterialTableService) { }

  ngOnInit(): void {
    this.today = new Date();
  }

  goBack(): void{
    this.location.back();
  }
}
