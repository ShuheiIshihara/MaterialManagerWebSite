import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
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
