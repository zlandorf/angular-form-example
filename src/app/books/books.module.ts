import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    BooksComponent
  ],
  providers: [
  ]
})
export class BooksModule {}
