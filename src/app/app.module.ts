import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AddbookmarkComponent } from './views/addbookmark/addbookmark.component';


@NgModule({
  declarations: [
    AppComponent,
    AddbookmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookmarkModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
