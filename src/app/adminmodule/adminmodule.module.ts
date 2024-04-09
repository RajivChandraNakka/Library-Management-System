import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminmoduleComponent } from './adminmodule.component';
import { RouterModule } from '@angular/router';
import { GensharedModule } from '../genshared/genshared.module';
import { FullwidthadminModule } from '../layouts/fullwidthadmin/fullwidthadmin.module';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MemberSearchPipe } from '../customPipes/member-search.pipe';
import { BookSearchPipe } from '../customPipes/book-search.pipe';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    AdminmoduleComponent,
    BooksComponent,
    MembersComponent,
    MemberSearchPipe,
    BookSearchPipe,
    TransactionComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    GensharedModule,
    FullwidthadminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [
    AdminmoduleComponent,
    BooksComponent,
    MembersComponent,

  ]
})
export class AdminmoduleModule { }
