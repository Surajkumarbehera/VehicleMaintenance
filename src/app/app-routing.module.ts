import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ResgistrationComponent } from "./resgistration/resgistration.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'ResgistrationPage',
    component:ResgistrationComponent
  },
  {
    path:'HomePage',
    component:HomepageComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
