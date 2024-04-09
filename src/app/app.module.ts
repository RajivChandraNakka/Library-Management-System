import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthadminModule } from './layouts/fullwidthadmin/fullwidthadmin.module';
import { FullwidthuserModule } from './layouts/fullwidthuser/fullwidthuser.module';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { BorrowSearchPipe } from './customPipes/borrow-search.pipe';
import { RegisterComponent } from './genmodules/about/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthuserModule,
    FullwidthadminModule,
    AdminmoduleModule,
    UsermoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
