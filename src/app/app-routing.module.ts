import { ChangeDetectionStrategy } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ChangerPassAdminComponent } from './components/changer-pass-admin/changer-pass-admin.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { ErrorComponent } from './components/error/error.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { RoleGuard } from './services/role.guard';

const routes: Routes = 
[
  {path:'landing',component:LandingPageComponent},
  {path:'list/detailPro/:id',component:DetailedProductComponent},
  {path:'list',component:ProductListComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent,canActivate:[RoleGuard]},
  {path:'admin/passAd',component:ChangerPassAdminComponent},
  {path:'admin/users',component:UsersComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'loginAdmin',component:LoginAdminComponent},
  {path:'signup',component:SignupComponent},
  {path:'pass',component:ChangePassComponent},
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
