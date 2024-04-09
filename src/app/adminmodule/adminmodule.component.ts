import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AdminAuthService } from '../adminServices/admin-auth.service';
import { AdminMembersService } from '../adminServices/admin-members.service';
import { IAdmin } from './admins';

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.css']
})
export class AdminmoduleComponent implements OnInit {

  adminid;
  adminProfile;
  reqUsers;
  badge;
  constructor(private adminDat: AdminAuthService, private memberSer: AdminMembersService) { }

  ngOnInit() {
    if (sessionStorage) {
      this.adminid = sessionStorage.getItem("adminid");
      if (this.adminid != null) {
        console.log("Ayyo moonjipooye");
      }
    }
    this.get(this.adminid);
    this.getReq();

  }


  get(id: number) {
    console.log(id);
    this.adminDat.getAdmin().subscribe(
      (admin: IAdmin) => { // Corrected to IAdmin instead of IAdmin[]
        if (admin) {
          console.log(admin);
          this.adminProfile = admin;
        } else {
          console.error('Admin not found');
          // Handle the case where admin with the specified ID is not found
        }
      },
      (error) => {
        console.error('Error fetching admin:', error);
        // Handle error as needed, e.g., show an error message to the user
      }
    );
  }
  

  resetSession() {
    sessionStorage.removeItem("adminid");

  }

  getReq() {
    this.memberSer.getMemReq().subscribe(data => {
      this.reqUsers = data;
      console.log(this.reqUsers);
      if (this.reqUsers.length == null || this.reqUsers.length == 0) {
        this.badge = null;
      }
      else if (this.reqUsers.length != 0) {
        this.badge = this.reqUsers.length;
      }

    })
  }
}
