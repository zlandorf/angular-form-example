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

  private books: Book[] = [];

  constructor(private service: BookService) {
  }

  ngOnInit(): void {
    this.service.list()
      .catch(err => {
        console.log('Failed to retrieve the list of books', err);
        return [];
      })
      .subscribe(books => this.books = books);
  }

  onBookSubmitted(book: Book) {
    this.service.save(book)
      .subscribe(savedBook => {
        console.log('New book added', savedBook);
        this.books.push(savedBook);
      }, error => {
        console.log('Failed to save the book', error);
      });
  }
}
