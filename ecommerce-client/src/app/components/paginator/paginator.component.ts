import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() 
  paginatorListChange: EventEmitter<any> = new EventEmitter();
  @Input()
  length:number;
  @Input()
  pageSize:number;
  @Input()
  pageSizeOptions:number[];

  constructor() { }

  ngOnInit(): void {
  }

  public getProductListsData(event?:PageEvent){
    console.log(event);

    this.paginatorListChange.emit([event.pageIndex,event.pageSize]);

  }

}
