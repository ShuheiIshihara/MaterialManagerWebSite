import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }           from 'app/app.component/app.component';
import { MaterialTableComponent } from 'app/material-table/material-table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    MaterialTableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
