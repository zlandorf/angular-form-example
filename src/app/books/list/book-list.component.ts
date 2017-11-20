import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: []
})
export class BookListComponent {

  @Input() books: Book[];
  @Input() selectedBook: Book;
  @Output() onBookClicked = new EventEmitter<Book>();

  selectBook(book: Book) {
    this.onBookClicked.emit(book);
  }

}
