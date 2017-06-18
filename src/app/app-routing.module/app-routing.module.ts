import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MaterialTableComponent } from '../material-table/material-table';

const routes: Routes = [
  { path: '', redirectTo: '/material', pathMatch: 'full' },
  { path: 'material', component: MaterialTableComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
