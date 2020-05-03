import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public productCategories: [];

  constructor(private prodCatgService:ProductCategoryService) { }

  ngOnInit(): void {

    this.getProductCategories();

  }

  getProductCategories(){
    this.prodCatgService.getProductCategories().subscribe(data=>{
      // console.log(JSON.parse(data));
      this.productCategories = JSON.parse(data);
    })
  }

}
