import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [
    BookService
  ]
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  book: Book = null;

  constructor(private service: BookService) {
  }

  ngOnInit(): void {
    this.resetBookForm();
    this.service.list()
      .catch(err => {
        console.log('Failed to retrieve the list of books', err);
        return [];
      })
      .subscribe(books => this.books = books);
  }

  onBookSubmitted(submittedBook: Book) {
    if (submittedBook.id !== null) {
      this.service.update(submittedBook).subscribe(
        () => this.updateBooks(submittedBook),
        error => console.log('Failed to update the book', error),
        () => this.resetBookForm()
      );
    } else {
      this.service.create(submittedBook).subscribe(
        book => this.books.push(book),
        error => console.log('Failed to create the book', error),
        () => this.resetBookForm()
      );
    }
  }

  onBookSelected(book: Book) {
    this.book = book;
  }

  resetBookForm() {
    this.book = {
      id: null,
      title: '',
      iban: '',
      authors: ['']
    };
  }

  private updateBooks(bookToUpdate: Book) {
    this.books = this.books.map(book => book.id === bookToUpdate.id ? bookToUpdate : book);
  }

}
