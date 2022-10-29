import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.css']
})
export class AddbookmarkComponent implements OnInit {

  array: any[] = [];
  constructor(private router: Router)
  {

  }

  reactiveroleform!: FormGroup;

  ngOnInit() {
    this.reactiveroleform = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'url' : new FormControl(null, Validators.required),
      'category' : new FormControl(null, Validators.required)
    });
  }
  AddBookMark(){
    if(this.reactiveroleform.value != null){
      this.array.push(this.reactiveroleform.value);
      localStorage.setItem('bookmarklist', JSON.stringify(this.array));
      this.router.navigate(['']);
    }
  }
}
