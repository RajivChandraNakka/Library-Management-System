import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMember } from '../adminmodule/members/members';

@Injectable({
  providedIn: 'root'
})
export class AdminMembersService {

  private urlMember: string = "http://localhost:3000/members";

  constructor(private http: HttpClient) { }

  getMember(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.urlMember);
  }
  putMember(member: IMember) {
    return this.http.post<IMember>(this.urlMember, member)
  }

  deleteMember(id: number): Observable<IMember> {
    return this.http.delete<IMember>(this.urlMember + '/' + id);
  }
  updateMember(member: IMember): Observable<IMember> {
    return this.http.put<IMember>(this.urlMember + '/' + member.id, member);
  }

  getMembyId(id: number): Observable<IMember> {
    return this.http.get<IMember>(this.urlMember + '/' + id);
  }

  // updateMemSt1(member: IMember): Observable<IMember> {
  //   member.ustatus = 1;
  //   return this.http.put<IMember>(this.urlMember + '/' + member.id, member);
  // }

  getMemReq() {
    return this.http.get<IMember[]>(this.urlMember + '?ustatus=1');
  }

  getMemRec() {
    return this.http.get<IMember[]>(this.urlMember + '?urecstatus=1');
  }

  currentMember: IMember = {
    id: null,
    uname: '',
    uadmid: null,
    umail: '',
    udep: '',
    upassword: '',
    ustatus: null,
    urecstatus: null,
    ureqj: '',
    urecj: ''

    // uborrow: [null],
    // uowned: [null],

  }

}
