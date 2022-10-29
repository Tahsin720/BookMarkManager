import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import { AddbookmarkComponent } from '../views/addbookmark/addbookmark.component';


@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class BookmarkModule { }
