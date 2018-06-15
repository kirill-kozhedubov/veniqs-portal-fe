import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PingService} from "./services/ping-service/ping.service";
import {CommonModule} from "@angular/common";
import {HttpRestService} from "./services/http-rest-service/http-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {ErrorHandlerService} from "./services/error-handler-service/error-handler.service";
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthorizationComponent } from './auth/authorization/authorization.component';
import { UserAuthComponent } from './auth/user-auth/user-auth.component';
import {AuthService} from "./services/auth-service/auth.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    AuthorizationComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    PingService,
    HttpRestService,
    ErrorHandlerService,
    AuthService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
