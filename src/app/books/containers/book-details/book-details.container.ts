import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-details-container',
  templateUrl: './book-details.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsContainer {

  public readonly book$!: Observable<IBook>;

  constructor(private _activatedRoute: ActivatedRoute, private _booksService: BooksService) {
    const id = +this._activatedRoute.snapshot.params.id;

    this.book$ = this._booksService.view(id);
  }

}
