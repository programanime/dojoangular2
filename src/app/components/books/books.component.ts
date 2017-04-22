import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book';
import { BookService }  from '../../services/book.service';

@Component({
  selector: 'my-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }


  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBook.id]);
  }
}
