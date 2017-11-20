import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Book } from '../book';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [
    FormBuilder
  ]
})
export class BookFormComponent implements OnChanges {

  @Input() book: Book;
  @Output() onSubmit = new EventEmitter<Book>();

  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: formBuilder.control({value: null, disabled: true}),
      iban: formBuilder.control('', [Validators.required]),
      title: formBuilder.control('', [Validators.required]),
      authors: formBuilder.array([])
    });
    this.addAuthor('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.reset();
    if (this.book != null) {
      this.book.authors.forEach(author => this.addAuthor(author));
      this.form.setValue(this.book);
    }
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    const value = this.form.getRawValue();
    this.onSubmit.emit(value);
  }

  get authors(): FormArray {
    return this.form.get('authors') as FormArray;
  }

  addAuthor(author = '') {
    this.authors.push(this.formBuilder.control(author, [Validators.required]));
  }

  removeAuthor(index: number) {
    this.authors.removeAt(index);
  }
}
