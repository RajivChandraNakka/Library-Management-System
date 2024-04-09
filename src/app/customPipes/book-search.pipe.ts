import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../adminmodule/books/books';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(books: IBook[], bookSearch: string): IBook[] {
    if (bookSearch) {
      return books.filter(IBook => {
        return IBook.btitle.toLowerCase().includes(bookSearch.toLowerCase())
          || IBook.bauthor.toLowerCase().includes(bookSearch.toLowerCase())
          || IBook.bisbn.toLowerCase().includes(bookSearch.toLowerCase())
          || IBook.bcatag.toLowerCase().includes(bookSearch.toLowerCase())

      });

    }
    else {
      return books;
    }
  }

}
