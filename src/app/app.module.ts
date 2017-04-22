import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent }  from './components/books/books.component';
import { BookService }          from './services/book.service';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BooksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
