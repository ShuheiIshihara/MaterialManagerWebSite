import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from '../app-routing.module/app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }            from '../app.component/app.component';
import { MaterialTableComponent }  from '../material-table/material-table';
import { MaterialCreateComponent } from '../material-create/material-create';
import { MaterialTableService }    from '../material-table.service/material-table.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MaterialTableComponent,
    MaterialCreateComponent
  ],
  providers: [ MaterialTableService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
