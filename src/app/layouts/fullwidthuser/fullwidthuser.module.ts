import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GensharedModule } from 'src/app/genshared/genshared.module';
import { FullwidthuserComponent } from './fullwidthuser.component';
import { UserComponent } from 'src/app/genuser/user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FullwidthuserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GensharedModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FullwidthuserComponent,
    UserComponent
  ]
})
export class FullwidthuserModule { }
