import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MaterialTableComponent }  from '../material-table/material-table';
import { MaterialCreateComponent } from '../material-create/material-create';

const routes: Routes = [
  { path: '', redirectTo: '/material', pathMatch: 'full' },
  { path: 'material', component: MaterialTableComponent },
  { path: 'material/create', component: MaterialCreateComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
