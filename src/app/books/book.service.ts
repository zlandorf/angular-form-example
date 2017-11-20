import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {}

  private booksUrl = '/api/books';

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  delete(book: Book): Observable<any> {
    return this.http.delete(`${this.booksUrl}/${book.id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

  update(book: Book): Observable<void> {
    return this.http.put<void>(this.booksUrl, book, httpOptions);
  }

}
