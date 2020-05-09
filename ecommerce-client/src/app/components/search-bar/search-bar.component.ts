import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public value:String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearchSubmit(){

    if(this.value.length != 0){
      this.router.navigateByUrl(`/searchProduct/${this.value}`);
    }
  }

}
