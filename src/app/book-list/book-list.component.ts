import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddBook, RemoveBook } from '../books/books.actions';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  constructor(private store: Store<{ books: Book[] }>) {}

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }));
  }
}
