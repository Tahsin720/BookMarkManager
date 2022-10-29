import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CategoryDetailsComponent } from './shared/category-details/category-details.component';
import { AddbookmarkComponent } from './views/addbookmark/addbookmark.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarkComponent,
    children: [
      {
        path: 'ShowDetails',
        component: CategoryDetailsComponent,
      }
    ]
  },
  {
    path: 'AddBookMark',
    component: AddbookmarkComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
