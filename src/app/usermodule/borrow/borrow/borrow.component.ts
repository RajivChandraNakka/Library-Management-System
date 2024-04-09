import { Component, OnInit } from '@angular/core';
import { AdminBooksService } from 'src/app/adminServices/admin-books.service';
import { IMember } from 'src/app/adminmodule/members/members';
import { UserOwnedService } from 'src/app/userServices/user-owned.service';
import { IBook } from 'src/app/adminmodule/books/books';
import { AdminMembersService } from 'src/app/adminServices/admin-members.service';


@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  constructor(private bookSer: AdminBooksService, private userDet: UserOwnedService, private memberSer: AdminMembersService, ) {

  }
  ngAfterViewInit() {

    // console.log("eennnn myeeeyeyeyeyeye")
    // this.badge = this.requestedBooks.length;
  }

  user;
  dodge;
  badge;
  public requestedBooks = [];
  public recievedBooks = [];
  userid;
  public books = [];

  rec() {
    this.recievedBooks = JSON.parse(this.user.urecj);
    if (this.recievedBooks.length == null || this.recievedBooks.length == 0) {
      this.dodge = null;
    }
    else if (this.recievedBooks.length != 0) {
      this.dodge = this.recievedBooks.length;
    }
  }
  ngOnInit() {

    console.log(this.badge)
    this.getbyStatus("Old&bstatus=New&bstatus=Damaged");
    if (sessionStorage) {
      this.userid = sessionStorage.getItem("userid");
      if (this.userid != null) { }
    }
    this.memberSer.getMembyId(this.userid).subscribe(
      data => {
        this.user = data
        console.log(this.user);
        this.rec();
        this.requestedBooks = JSON.parse(this.user.ureqj);
        // this.requestedBooks = obj
        // this.badge = this.requestedBooks.length;
        if (this.requestedBooks.length == null || this.requestedBooks.length == 0) {
          this.badge = null;
        }
        else if (this.requestedBooks.length != 0) {
          this.badge = this.requestedBooks.length;
        }
      }
    );

    //111111
    // this.requestedBooks = JSON.parse(localStorage.getItem("user" + this.userid + ""));
    // if (this.requestedBooks.length == null || this.recievedBooks.length == 0) {
    //   this.badge = null;
    // }
    // else {
    //   this.badge = this.requestedBooks.length;
    // }

  }

  //2222
  // jsonSet() {
  //   // this.user.ureqj = JSON.stringify(this.requestedBooks);
  //   this.requestedBooks = JSON.parse(this.user.ureqj);
  //   // this.requestedBooks = obj
  //   this.badge = this.requestedBooks.length;
  // }

  getbyStatus(fil: string) {
    console.log(fil);
    this.bookSer.getBookbyStatus(fil)
      .subscribe(data => this.books = data);
  }



  addtoReq(book: IBook) {

    // this.jsonSet();
    if (book.bcopies > 0) {

      if (this.requestedBooks == null) {
        console.log("Vattayee")

        this.requestedBooks = this.requestedBooks || [];
        this.requestedBooks.push(book);
        this.reqSave();
        // localStorage.setItem("user" + this.userid + "", JSON.stringify(this.requestedBooks));

        book.bcopies -= 1;
        this.bookSer.updateBook(book).subscribe();




      }
      else {
        console.log("moonji");
        if ((this.requestedBooks.length + this.recievedBooks.length) < 3 || (this.requestedBooks.length + this.recievedBooks.length) == null) {
          this.requestedBooks.push(book);
          this.reqSave();
          // localStorage.setItem("user" + this.userid + "", JSON.stringify(this.requestedBooks));
          book.bcopies -= 1;
          this.bookSer.updateBook(book).subscribe();

        } else {
          alert("You can not take more than 3 books...")
        }
      }


      // this.badge = this.requestedBooks.length;
    }
    else {
      if (book.bcopies == 0) {
        alert("Book is not available now..")
      }
      else {
        alert("You cant take more than 3 books")
      }
    }
  }

  delfrmReq(borrow) {
    let index = this.requestedBooks.findIndex(obj => obj.btitle == borrow.btitle);
    console.log(index);
    this.requestedBooks.splice(index, 1);
    // this.badge = this.requestedBooks.length;
    this.reqSave();
    // localStorage.setItem("user" + this.userid + "", JSON.stringify(this.requestedBooks));

    let tempcp;
    this.books.forEach(element => {
      if (borrow.id == element.id) {
        tempcp = element.bcopies;
      }
    });

    console.log(tempcp);
    tempcp += 1;
    borrow.bcopies = tempcp;
    this.bookSer.updateBook(borrow).subscribe();


  }
  //333333
  delsave() {
    this.user.ustatus = 1;
    this.user.ureqj = JSON.stringify(this.requestedBooks);
    this.memberSer.updateMember(this.user).subscribe();
    console.log(this.user);
    // this.badge = this.requestedBooks.length;
  }

  reqSave() {
    if (this.requestedBooks.length == 0) {
      this.user.ustatus = 0;
    } else {
      this.user.ustatus = 1;
    }
    this.user.ureqj = JSON.stringify(this.requestedBooks);
    this.memberSer.updateMember(this.user).subscribe();
    // this.badge = this.requestedBooks.length;
  }
  recSave() {
    if (this.recievedBooks.length == 0) {
      this.user.urecstatus = 0;
    } else {
      this.user.urecstatus = 1;
    }
    this.user.urecj = JSON.stringify(this.recievedBooks);
    this.memberSer.updateMember(this.user).subscribe();
  }
  delfrmRec(borrow) {
    let index = this.recievedBooks.findIndex(obj => obj.btitle == borrow.btitle);
    console.log(index);
    this.recievedBooks.splice(index, 1);
    this.recSave();

    let tempcp;
    this.books.forEach(element => {
      if (borrow.id == element.id) {
        tempcp = element.bcopies;
      }
    });

    console.log(tempcp);
    tempcp += 1;
    borrow.bcopies = tempcp;
    this.bookSer.updateBook(borrow).subscribe();
  }

}
