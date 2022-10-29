import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-a',
  templateUrl: './category-a.component.html',
  styleUrls: ['./category-a.component.css']
})
export class CategoryAComponent implements OnInit {

  newObj: any;
  obj: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log("Load Data: ", localStorage.getItem('bookmarklist'));
    this.newObj = localStorage.getItem('bookmarklist');
    this.obj = JSON.parse(this.newObj);
    console.log(this.obj);
  }

  ShowDetails(){
    localStorage.setItem('Details', JSON.stringify(this.obj[0]));
  }
}
