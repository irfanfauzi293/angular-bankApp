import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { CustomerUpdateComponent } from './customer/form/customer-update.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { AccountUpdateComponent } from './account/form/account-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerUpdateComponent,
    AccountListComponent,
    AccountFormComponent,
    AccountUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
