import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
// import {RouterModule} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {SocketioService} from "./services/socketio.service";
import {MatMenuModule} from '@angular/material/menu';
import { PaypalComponent } from './components/paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsComponent,
    HeaderComponent,
    SidebarComponent,
    SearchBarComponent,
    ProductDetailsComponent,
    PaginatorComponent,
    ShoppingCartComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    NgxPayPalModule
    // ImageZoomModule
    // AngularFontAwesomeModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
