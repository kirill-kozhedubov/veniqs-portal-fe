import {RouterModule} from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {NgModule} from '@angular/core';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import {SpinnerComponent} from "./spinner/spinner.component";
import {CommonModule} from "@angular/common";
import {HttpRestService} from "../services/http-rest-service/http-rest.service";
import { IconComponent } from './icon/icon.component';
import { LogoComponent } from './logo/logo.component';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SpinnerComponent,
    IconComponent,
    LogoComponent,
    TextboxComponent

  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SpinnerComponent,
    IconComponent,
    LogoComponent
  ],
  providers: [
    HttpRestService,
  ]
})
export class SharedModule {
}
