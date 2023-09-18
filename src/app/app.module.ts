import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import {WorkComponent} from "./work/work.component";
import {File3Component} from "./File 3/file3.component";

@NgModule({
  declarations: [
    AppComponent ,
    ServerComponent,
    WorkComponent,
    File3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
