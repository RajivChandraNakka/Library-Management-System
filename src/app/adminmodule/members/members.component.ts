import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminBooksService } from 'src/app/adminServices/admin-books.service';
import { AdminMembersService } from 'src/app/adminServices/admin-members.service';
import { IMember } from './members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  constructor(private fb: FormBuilder, private memberSer: AdminMembersService, private fbd: FormBuilder) {




  }
  public members = [];
  // public members: IMember[] = [];
  adminMembers;
  adminMembersUp;
  temp;
  update(member: IMember) {
    this.memberSer.updateMember(member).subscribe();
  }

  get() {
    this.memberSer.getMember()
      .subscribe(data => this.members = data);
      console.log(this.members);
      
  }

  put() {
this.adminMembers.get("id").setValue((this.members) ? this.members.length.toString() : '0');

    this.temp = this.adminMembers.value;
    // this.temp.uborrow = [];
    // this.temp.owned = [];
    this.temp.ustatus = 0;
    this.temp.urecstatus = 0;
    this.temp.urecj = '[]';
    this.temp.ureqj = '[]';


    this.memberSer.putMember(this.temp).subscribe(
      data => {
        console.log('Success!', data);
        this.ngOnInit();
      },
      error => console.error('Error!', error)
    );


  }

  delete(id: number) {
    console.log(id);
    let cnf = confirm("Press Ok to delete the user..");
    if (cnf == true) {
      this.memberSer.deleteMember(id).subscribe(
        (data: IMember) => {
          // this.get();
        }
      );
    }
    else {

    }
  }

  edit(member: IMember) {
    this.memberSer.currentMember = Object.assign({}, member)
  }


  onSubmit() {
    /*Checking email and admission id is already exist*/
    let mailCheck: Boolean;
    let admidCheck: Boolean;
    this.members.forEach(member => {
      if (member.umail == this.adminMembers.value.umail) {
        mailCheck = false;
      } else { }
      if (member.uadmid == this.adminMembers.value.uadmid) {
        admidCheck = false;
        console.log(admidCheck);
      } else { }
    })
    if (mailCheck == false || admidCheck == false) {
      if (mailCheck == false && admidCheck == false) {
        alert("Email id and admission id are already existing...");
      }
      else if (admidCheck == false) {
        alert("Admission id is already existing...");
      }
      else {
        alert("Email id is already existing...");
      }
    } else {
      /*logic for to add member details*/
      let cnf = confirm("Press Ok to save the form..");
      if (cnf == true) {
        this.put();
        this.adminMembers.reset();
      } else {
      }
    }

  }
  ngOnInit() {
    this.get();


    this.adminMembers = this.fb.group({
      id:'',
      uname: ['', [Validators.required, Validators.minLength(5)]],
      uadmid: ['', [Validators.required, Validators.minLength(5)]],
      umail: ['', [Validators.required, Validators.email]],
      udep: ['', [Validators.required]],
      upassword: ['', [Validators.required, Validators.minLength(8),]],

    })

    this.adminMembersUp = this.fbd.group({
      id:'',
      uname: ['', [Validators.required, Validators.minLength(5)]],
      uadmid: ['', [Validators.required, Validators.minLength(5)]],
      umail: ['', [Validators.required, Validators.email]],
      udep: ['', [Validators.required]],
      upassword: ['', [Validators.required, Validators.minLength(8),]],

    })
  }

  OnUpdate(currentMember) {
    console.log(currentMember.id);
    if (currentMember.id != null) {
      console.log("Update!!");
      console.log("Update!!");


      let mailCheck: Boolean;
      let admidCheck: Boolean;
      this.members.forEach(member => {
        console.log(currentMember.umail)
        console.log(member.umail)
        if (member.umail == currentMember.umail && member.id != currentMember.id) {
          mailCheck = false;
        } else { }
        if (member.uadmid == currentMember.uadmid && member.id != currentMember.id) {
          admidCheck = false;
        } else { }
      })
      if (mailCheck == false || admidCheck == false) {
        if (mailCheck == false && admidCheck == false) {
          alert("Email id and admission id are already existing...");
        }
        else if (admidCheck == false) {
          alert("Admission id is already existing...");
        }
        else {
          alert("Email id is already existing...");
        }
      } else {
        /*logic for to add member details*/
        let cnf = confirm("Press Ok to update the user..");
        if (cnf == true) {
          this.update(currentMember);
        }
        else { }
      }

      // let cnf = confirm("Press Ok to update the user..");
      // if (cnf == true) {
      //   this.update(currentMember);
      // }
      // else { }
    }
    else { }
  }
}
