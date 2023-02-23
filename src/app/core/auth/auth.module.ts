import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthModalComponent} from "./auth-modal/auth-modal.component";
import {SharedModule} from "../../shared/shared.module";
import { LoginComponent } from "./auth-modal/login/login.component";
import { RegisterComponent } from "./auth-modal/register/register.component";


@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
