import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ShopingComponent } from './shoping/shoping.component';
//import {RatingModule } from 'ng-starrating';
 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    ProductpageComponent,
    ShopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
