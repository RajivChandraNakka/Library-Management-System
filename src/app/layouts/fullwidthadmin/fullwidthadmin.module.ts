import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GensharedModule } from 'src/app/genshared/genshared.module';
import { FullwidthadminComponent } from './fullwidthadmin.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/genadmin/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DefaultModule } from '../default/default.module';



@NgModule({
  declarations: [
    FullwidthadminComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GensharedModule,
    FormsModule,
    HttpClientModule,
    


  ],
  exports: [
    FullwidthadminComponent,
    AdminComponent,
    
  ]
})
export class FullwidthadminModule { }
