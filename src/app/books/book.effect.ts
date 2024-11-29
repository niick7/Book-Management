import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BooksService } from './book.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BookEffect {
  // Action$ is an observable
  constructor(private action$: Actions, private bookService: BooksService) {}

  // Step 1: run the effect: createEffect(()
  // Step 2: only run the effect if condition happen: ofType(bookActions.AddBook)
  // Step 3: use mergeMap function provided by RxJS
  // It allow us to take an observable
  // And transform into a single observable
  // For some stuff like adding thing to database, save thing to database.
  // In those cases, we will use mergeMap
  // Use pipe to call the action
  // Use of to create an observable
  addBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(bookActions.AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          map((book) => bookActions.AddBookSuccess(book)),
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );
}
