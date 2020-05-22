import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public value: String;

  constructor(private router: Router, private productService: ProductService) {

    this.value = "";
  }

  ngOnInit(): void {
  }

  onSearchSubmit() {

    if (this.value.length != 0) {
      // this.productService.setsearchProduct(this.value,"search-input-id");
      this.router.navigateByUrl(`/searchProduct/${this.value}`);
    }
  }

  setSearchValue(){
    console.log(this.value);
    this.productService.setsearchProduct(this.value,"search-input-id");
  }

}
