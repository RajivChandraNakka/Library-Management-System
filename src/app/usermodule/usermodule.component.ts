import { Component, OnInit } from '@angular/core';

import { UserOwnedService } from '../userServices/user-owned.service';
import { IMember } from '../adminmodule/members/members';
import { AdminMembersService } from '../adminServices/admin-members.service';

@Component({
  selector: 'app-usermodule',
  templateUrl: './usermodule.component.html',
  styleUrls: ['./usermodule.component.css']
})
export class UsermoduleComponent implements OnInit {

  userid;
  userProfile;
  constructor(private userDet: UserOwnedService, ) { }

  ngOnInit() {
    if (sessionStorage) {
      this.userid = sessionStorage.getItem("userid");
      if (this.userid != null) { }
    }
    this.get(this.userid);



  }



  get(id: number) {
    this.userDet.getUser(id)
      .subscribe(data => this.userProfile = data);

  }

  resetSession() {
    sessionStorage.removeItem("userid");

  }

}
