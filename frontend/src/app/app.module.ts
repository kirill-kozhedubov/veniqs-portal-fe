import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PingService} from "./services/ping-service/ping.service";
import { CommonModule } from "@angular/common";
import {HttpRestService} from "./services/http-rest-service/http-rest.service";
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import {ErrorHandlerService} from "./services/error-handler-service/error-handler.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    PingService,
    HttpRestService,
    ErrorHandlerService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
