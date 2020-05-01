import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './services/product.service';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatSliderModule,
    MatCheckboxModule,
    NgModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
