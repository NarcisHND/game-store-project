import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {SecondNavbarComponent} from "./second-navbar/second-navbar.component";
import {ServicesModule} from "../../../services/services.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {AuthModule} from "../../auth/auth.module";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SecondNavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SecondNavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ServicesModule,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    AuthModule
  ]
})
export class LayoutModule {
}
