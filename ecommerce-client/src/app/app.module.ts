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
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { NgxImageZoomModule } from 'ngx-image-zoom'
// import {ImageZoomModule} from 'ng2-image-hover-zoom';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsComponent,
    HeaderComponent,
    SidebarComponent,
    SearchBarComponent,
    ProductDetailsComponent
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
    // ImageZoomModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
