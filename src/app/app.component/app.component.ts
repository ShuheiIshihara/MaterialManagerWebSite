import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <div class="kancolle">
      <div class="mTitle">{{title}}</div>
      <div class="mButton"><button class="btn btn-success" [routerLink]="['/material/create']">追加</button></div>
    </div>

    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = '艦これ資材データ一覧';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
