import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmin } from '../adminmodule/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private urlAdmin: string = "http://localhost:3000/admins";

  constructor(private http: HttpClient) { }

  createAdmins(book) {
    return this.http.post<IAdmin>(this.urlAdmin, book)

  }
  getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.urlAdmin);
  }

  getAdmin(): Observable<IAdmin> {
    const adminUrl = `${this.urlAdmin}`;
    return this.http.get<IAdmin>(adminUrl);
  }

}
