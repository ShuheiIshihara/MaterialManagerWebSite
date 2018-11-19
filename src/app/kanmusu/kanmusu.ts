import { Component, OnInit } from '@angular/core';

import { KanmusuData }    from '../kanmusu-data/kanmusu-data';
import { KanmusuService } from '../kanmusu.service/kanmusu.service';

@Component({
  selector: 'kanmusu',
  templateUrl: 'template/kanmusu.html'
})

export class KanmusuComponent implements OnInit {
  svdata: string;
  isSort: boolean;
  isCond: boolean;
  kanmusuList: KanmusuData[] = [];

  kService: KanmusuService = new KanmusuService();

  ngOnInit(): void { }

  /**
   *  資材情報抽出
   */
  setResource(): void {
    try {

      var jsonText = this.svdata.replace('svdata=','');

      this.kanmusuList = this.kService.getKanmusuList(jsonText, this.isSort, this.isCond);
      console.info(this.kanmusuList);

      this.svdata = "OK"
    } catch(err) {
      console.error(err.message)
      this.svdata = "";
    }
  }
}
