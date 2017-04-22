import { Injectable } from '@angular/core';

import { Book } from '../components/book';
import { BOOKS } from '../mocks/mock-book';

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  // See the "Take it slow" appendix

  getBooksSlowly(): Promise<Book[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBooks()), 2000);
    });
  }
  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id));
  }
}
