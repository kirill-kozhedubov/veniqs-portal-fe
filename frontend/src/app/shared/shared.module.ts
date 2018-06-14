import {RouterModule} from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {NgModule} from '@angular/core';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import {SpinnerComponent} from "./spinner/spinner.component";
import {CommonModule} from "@angular/common";
import {HttpRestService} from "../services/http-rest-service/http-rest.service";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SpinnerComponent

  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SpinnerComponent
  ],
  providers: [
    HttpRestService,
  ]
})
export class SharedModule {
}
