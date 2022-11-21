import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = 
[
  {path:'landing',title:'Home',component:LandingPageComponent},
  {path:'list',title:'Products',component:ProductListComponent},
  {path:'about',title:'About Us',component:AboutComponent},
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'**',title:'Error404',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
