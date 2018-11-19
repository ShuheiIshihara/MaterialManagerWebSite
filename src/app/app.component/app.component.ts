import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="kancolle">
      <div class="mTitle">{{title}}</div>
      <div class="mButton"><button class="btn btn-success" [routerLink]="['/material/create']">追加</button></div>
      <div class="mButton"><button class="btn btn-primary" [routerLink]="['/material']">一覧</button></div>
      <div class="mButton"><button class="btn btn-warning" [routerLink]="['/kanmusu']">艦娘</button></div>
    </div>

    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = '艦これ資材データ一覧';
}
