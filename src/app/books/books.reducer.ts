import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './books.actions';
import { Book } from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState,
  // The state here is now a whole global state
  // It is a segment state, in this case, it's a book state
  // This is a new book information: { id, title, author }
  // This is how to override the current state: [...state, { id, title, author }]
  // Details:
  // [...state] : this is a copy of a current variable
  // We can use let newState = [...state];
  // [...state, { id, title, author }] will be equal to
  // 1. newState = [...state];
  // 2. newState.push({ id, title, author });
  // 3. return newState
  on(AddBook, (state, { id, title, author }) => [...state, { id, title, author }]),
  on(RemoveBook, (state, { bookId }) => state.filter(book => book.id != bookId))
);
