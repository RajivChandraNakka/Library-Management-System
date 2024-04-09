import { Component, OnInit } from '@angular/core';
import { AdminMembersService } from 'src/app/adminServices/admin-members.service';
import { IMember } from '../members/members';
import { AdminBooksService } from 'src/app/adminServices/admin-books.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private memberSer: AdminMembersService, private bookSer: AdminBooksService) { }
  public reqUsers;
  public recUsers;
  user
  reqBooks;
  recBooks = [];
  recBooks2;
  ngOnInit() {
    this.get();

  }



  get() {
    this.memberSer.getMemReq().subscribe(data => {
      this.reqUsers = data;
      console.log(this.reqUsers);
    });
    this.memberSer.getMemRec().subscribe(data2 => {
      this.recUsers = data2
    });

  }

  view(user: IMember) {
    console.log(user.ureqj)
    this.reqBooks = JSON.parse(user.ureqj);
    this.recBooks = JSON.parse(user.urecj);
    this.takeUser(user);
  }

  viewAcc(user: IMember) {
    this.recBooks2 = JSON.parse(user.urecj);
  }


  ace(m) {

    let index = this.reqBooks.findIndex(obj => obj.btitle == m.btitle);
    console.log(index);
    this.recBooks.push(this.reqBooks[index]);
    if (this.recBooks.length == 0) {
      this.user.urecstatus = 0;
    } else {
      this.user.urecstatus = 1;
    }
    this.user.urecj = JSON.stringify(this.recBooks);
    this.memberSer.updateMember(this.user).subscribe();


    this.reqBooks.splice(index, 1);
    this.user.ureqj = JSON.stringify(this.reqBooks);
    this.memberSer.updateMember(this.user).subscribe();

    if (this.reqBooks.length == 0 || this.reqBooks.length == null) {
      this.user.ustatus = 0;
    } else {
      this.user.ustatus = 1;
    }
    this.memberSer.updateMember(this.user).subscribe();


  }
  rej(borrow) {
    console.log(borrow.id);
    let index = this.reqBooks.findIndex(obj => obj.btitle == borrow.btitle);
    console.log(index);
    this.reqBooks.splice(index, 1);

    this.user.ureqj = JSON.stringify(this.reqBooks);
    this.memberSer.updateMember(this.user).subscribe();

    let temp;
    this.bookSer.getBookbyId(borrow.id).subscribe(data => {
      temp = data;
      temp.bcopies += 1;
      console.log(temp);
      this.bookSer.updateBook(temp).subscribe();
    });


    if (this.reqBooks.length == 0 || this.reqBooks.length == null) {
      this.user.ustatus = 0;
    } else {
      this.user.ustatus = 1;
    }
    this.memberSer.updateMember(this.user).subscribe();

  }


  takeUser(user) {
    this.memberSer.getMembyId(user.id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }


}
