import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './genmodules/home/home.component';
import { AboutComponent } from './genmodules/about/about.component';
import { FullwidthadminComponent } from './layouts/fullwidthadmin/fullwidthadmin.component';
import { AdminComponent } from './genadmin/admin/admin.component';
import { FullwidthuserComponent } from './layouts/fullwidthuser/fullwidthuser.component';
import { UserComponent } from './genuser/user/user.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { BooksComponent } from './adminmodule/books/books.component';
import { MembersComponent } from './adminmodule/members/members.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';
import { OwnedComponent } from './usermodule/owned/owned/owned.component';
import { BorrowComponent } from './usermodule/borrow/borrow/borrow.component';
import { ProfileComponent } from './usermodule/profile/profile.component';
import { DemoComponent } from './usermodule/demo/demo.component';
import { TransactionComponent } from './adminmodule/transaction/transaction.component';





const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [{ path: '', component: HomeComponent }, { path: 'about', component: AboutComponent, }]
  },
  // {
  //   path: 'about', component: FullwidthadminComponent, children: [{ path: 'admin', component: AdminComponent, }]
  // },


  {
    path: ' ', component: FullwidthadminComponent, children: [{
      path: 'admin', component: AdminComponent,
    }]
  },

  {
    path: 'about', component: FullwidthuserComponent, children: [{ path: 'user', component: UserComponent }]
  },


  {
    path: '', component: FullwidthadminComponent, children: [{ path: 'admin', component: AdminComponent, }]
  },
  {
    path: '', component: FullwidthuserComponent, children: [{ path: 'user', component: UserComponent }]
  },

  {
    path: 'admin', component: AdminmoduleComponent, children: [
      { path: 'books', component: BooksComponent },
      { path: 'members', component: MembersComponent },
      { path: 'transaction', component: TransactionComponent }
    ]
  },

  {
    path: 'about', component: FullwidthadminComponent, children: [{
      path: 'admin', component: AdminComponent, children: [{

        path: 'admin', component: AdminmoduleComponent, children: [
          { path: 'books', component: BooksComponent },
          { path: 'members', component: MembersComponent },
          { path: 'transaction', component: TransactionComponent }
        ]

      }]


    }]
  },


  {
    path: 'user', component: UsermoduleComponent,
    children: [
      { path: 'borrow', component: BorrowComponent },
      { path: 'owned', component: OwnedComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'demo', component: DemoComponent },



    ]
  },

  {
    path: 'about', component: FullwidthuserComponent, children: [{
      path: 'user', component: UserComponent, children: [{

        path: 'user', component: AdminmoduleComponent, children: [
          { path: 'borrow', component: BorrowComponent },
          { path: 'owned', component: OwnedComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'demo', component: DemoComponent },

        ]
      }]


    }]
  },











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
