import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListsComponent} from "./components/product-lists/product-lists.component";

const routes: Routes = [
  {path:'category/:id',component:ProductListsComponent},
  {path:'category',component:ProductListsComponent},
  {path:'products',component:ProductListsComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
