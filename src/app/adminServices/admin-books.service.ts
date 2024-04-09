import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../adminmodule/books/books';

@Injectable({
  providedIn: 'root'
})
export class AdminBooksService {

  private urlBook: string = "http://localhost:3000/books";


  constructor(private http: HttpClient) { }

  getBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.urlBook);
  }
  getBookbyStatus(fil: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.urlBook + '?bstatus=' + fil);
  }

  getBookbyId(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.urlBook + '/' + id);
  }




  putBook(book: IBook) {
    return this.http.post<IBook>(this.urlBook, book)
  }
  deleteBook(id: number): Observable<IBook> {
    return this.http.delete<IBook>(this.urlBook + '/' + id);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.urlBook + '/' + book.id, book);
  }


  currentBook: IBook = {

    id: null,
    btitle: '',
    bcatag: '',
    bauthor: '',
    bcopies: null,
    bpub: '',
    pubname: '',
    bisbn: '',
    byear: null,
    bdate: null,
    bstatus: '',
  }

}
