import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorPageComponent} from './error-page/error-page.component';
import {MiscellaneousRoutingModule} from "./miscellaneous-routing.module";


@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule {
}
