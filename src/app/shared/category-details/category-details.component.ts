import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  newObj: any;
  obj: any;
  constructor() { }

  ngOnInit(): void {
    console.log("Details Data: ", localStorage.getItem('Details'));
    this.newObj = localStorage.getItem('Details');
    this.obj = JSON.parse(this.newObj);
    console.log(this.obj);
  }

}
