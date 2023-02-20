import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: "auth", loadChildren: () => import("./core/auth/auth.module").then(m => m.AuthModule)},
  {path: "home", loadChildren: () => import("./core/main/main.module").then(m => m.MainModule)},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "**",
    loadChildren: () => import("./core/miscellaneous/miscellaneous.module").then(m => m.MiscellaneousModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
