import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Material } from '../material/material';

@Injectable()
export class MaterialTableService {

  // 接続URL
  private baseUrl = 'http://localhost:8080/api/material';

  constructor(private http: Http) { }

  getMaterial(): Promise<Material[]>{
    // console.log(this.http.get(this.baseUrl).toPromise())
    return this.http.get(this.baseUrl)
                  .toPromise()
                  .then(response => response.json() as Material[])
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
