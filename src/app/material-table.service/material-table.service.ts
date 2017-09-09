import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Material } from '../material/material';
import { MaterialCreateComponent } from '../material-create/material-create';

@Injectable()
export class MaterialTableService {

  // 接続URL
  private baseUrl = 'http://localhost:8080/api/material';

  constructor(
    private http: Http,
    private location: Location
  ) { }

  getMaterial(): Promise<Material[]>{
    // console.log(this.http.get(this.baseUrl).toPromise())
    return this.http.get(this.baseUrl)
                  .toPromise()
                  .then(response => response.json() as Material[])
                  .catch(this.handleError);
  }

  /*
   *  データ登録
   */
  registerMaterial(data: MaterialCreateComponent): void {
    var postData = {
      'level':      data.level,
      "fuel":       data.fuel,
      'ammunition': data.ammunition,
      'steel':      data.steel,
      'bauxite':    data.bauxite,
      'bucket':     data.bucket,
      'banner':     data.banner,
      'dMaterial':  data.dMaterial,
      'screw':      data.screw,
      'winning_sortie':       data.stWin,
      'defeatting_sortie':    data.stLose,
      'expedition':           data.msCnt,
      'successs_expedition':  data.msSucc,
      'winning_exercises':    data.ptWin,
      'defeatting_exercises': data.ptLose,
      'veterans':             +data.point,
      'ranking':              +data.rank,
      'date':          data.viewedDate
    };
    console.info(postData)
    this.http.post(this.baseUrl+'/store', JSON.stringify(postData))
              .toPromise()
              .then(
                res => {
                  console.log(res.json());
                  var response = res.json();
                  if (response.result == -1) {
                    alert('その日付のデータは既に登録済みです。');
                  } else{
                    this.location.back();
                  }
                }
              )
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
