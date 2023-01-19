import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path: 'search/:searchItem', component:HomeComponent},
 {path: 'tag/:tag', component:HomeComponent},
 {path: 'product/:id', component:ProductpageComponent},
 {path: 'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
