import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-b',
  templateUrl: './category-b.component.html',
  styleUrls: ['./category-b.component.css']
})
export class CategoryBComponent implements OnInit {
  newObj: any;
  obj: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log("Load Data: ", localStorage.getItem('bookmarklist'));
    this.newObj = localStorage.getItem('bookmarklist');
    this.obj = JSON.parse(this.newObj);
    console.log(this.obj);
  }
}
