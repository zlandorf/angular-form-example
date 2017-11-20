import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../book';

export class InMemoryBookService implements InMemoryDbService {

  createDb() {
    const books: Book[] = [
      {id: 1, title: 'In memory book', iban: 'greihgieuh', authors: ['Martin Fowler']}
    ];
    return {books};
  }
}
