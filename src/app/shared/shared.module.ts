import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBComponent } from './category-b/category-b.component';
import { CategoryAComponent } from './category-a/category-a.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryAComponent,
    CategoryBComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryAComponent,
    CategoryBComponent,
    CategoryDetailsComponent
  ]
})
export class SharedModule { }
