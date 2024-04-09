import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminMembersService } from 'src/app/adminServices/admin-members.service';
import { RouterModule, Router } from '@angular/router';
import { from } from 'rxjs';
import { IMember } from 'src/app/adminmodule/members/members';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private memberSer: AdminMembersService, private router: Router) { }
  user;
  public members = [];
  temp;

  userSubmit(form: NgForm) {
    this.user = form.value;
    // console.log(this.user);
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.temp = false;
    console.log(this.temp);

    this.members.forEach(member => {
      if (member.umail == this.user.username) {
        if (member.upassword == this.user.password) {
          console.log("Success!!");

          console.log(member.id);

          alert("You have been successfully logged in...");

          //local storage
          sessionStorage.setItem("userid", member.id);
          this.router.navigate(['user/profile']);
          this.temp = true;
          form.reset();

        }
        else {
          alert("Invalid password...");
          this.temp = true;

        }
      } else {
        form.reset();
      }

    });
    if (this.temp == false) {
      alert("Invalid user id or password...");

    }
  }


  get() {
    this.memberSer.getMember()
      .subscribe(data => this.members = data);
  }


  ngOnInit() {
    this.get();

  }

}
