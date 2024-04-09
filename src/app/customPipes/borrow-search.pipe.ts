import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../adminmodule/books/books';

@Pipe({
  name: 'borrowSearch'
})
export class BorrowSearchPipe implements PipeTransform {

  transform(books: IBook[], borrowSearch: string): IBook[] {
    if (borrowSearch) {
      return books.filter(IBook => {
        return IBook.btitle.toLowerCase().includes(borrowSearch.toLowerCase())
      });
    }
    else {
      return books;
    }
  }
}
