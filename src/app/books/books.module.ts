import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookFormComponent } from './form/book-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBookService } from './in-mem/in-memory-book.service';
import { BookListComponent } from './list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService)
  ],
  declarations: [
    BooksComponent,
    BookFormComponent,
    BookListComponent
  ],
  exports: [
    BooksComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule {}
