import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  addBook(book: Book): Observable<Book> {
    return of(book);
  }
}
