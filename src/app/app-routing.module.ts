import { ChangeDetectionStrategy } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { ErrorComponent } from './components/error/error.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SignupComponent } from './components/signup/signup.component';
import { RoleGuard } from './services/role.guard';

const routes: Routes = 
[
  {path:'landing',title:'Home',component:LandingPageComponent},
  {path:'list/detailPro/:id',title:'Product',component:DetailedProductComponent},
  {path:'list',title:'Products',component:ProductListComponent},
  {path:'about',title:'About Us',component:AboutComponent},
  {path:'admin',title:'Admin',component:AdminComponent,canActivate:[RoleGuard]},
  {path:'cart',title:'Cart',component:CartComponent},
  {path:'login',title:'Log In',component:LoginComponent},
  {path:'signup',title:'Sign Up',component:SignupComponent},
  {path:'pass',title:'Change Password',component:ChangePassComponent},
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'**',title:'Error404',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
