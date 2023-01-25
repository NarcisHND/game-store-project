import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {SecondNavbarComponent} from "./second-navbar/second-navbar.component";
import {ServicesModule} from "../../../services/services.module";
import {RouterLink, RouterLinkActive} from "@angular/router";


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
    RouterLinkActive
  ]
})
export class LayoutModule {
}
