import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { MainRoutingModule } from "./main-routing.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, LayoutModule, MainRoutingModule],
})
export class MainModule {}
