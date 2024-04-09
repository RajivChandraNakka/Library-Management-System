import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminAuthService } from 'src/app/adminServices/admin-auth.service';
import { AdminMembersService } from 'src/app/adminServices/admin-members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Nowdate = Date.now();
  registerForm;
  admins: import("c:/Users/nakka/Desktop/Library-Management-System-Angular-master/Angular Project/LibraryMS/src/app/adminmodule/admins").IAdmin[];
  constructor(private adminMembersService:AdminMembersService,private adminAuthService:AdminAuthService,  private fb: FormBuilder,private fbd: FormBuilder) { }

  ngOnInit() {
    this.adminAuthService.getAdmins().subscribe(
      (data) => {
if(data){
  console.log(data);
  
  this.admins=data;
}
      });
    this.registerForm = this.fb.group({
      // regAs: ['', [Validators.required, Validators.minLength(5)]],
      id: [''],

      aname: ['', [Validators.required,]],
      amail: ['', [Validators.required,]],
      apassword: ['', [Validators.required, Validators.min(1)]],
      
      // uname: ['', [Validators.required,]],
      // uadmid: ['', [Validators.required,]],
      // umail: ['', [Validators.required, Validators.min(1)]],
      // upassword: ['', [Validators.required,]],
      // udep: ['', [Validators.required,]],
      
      
    })
  }
  put() {
    
this.registerForm.get('id').setValue((this.admins) ? this.admins.length.toString() : '0');
    this.adminAuthService.createAdmins(this.registerForm.value).subscribe(
      data =>{
         console.log('Success!', data)
         this.ngOnInit();
        },
      error => console.error('Error!', error)
    );
      
   
    
  }
  onSubmit() {
    let cnf = confirm("Press Ok to save the form..");
    if (cnf == true) {
      /*post method calling*/
      this.put();

      this.registerForm.reset();
    } else {

    }
  }

}
