import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { CustomerUpdateComponent } from './customer/form/customer-update.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';

const routes: Routes = [
  {
    path : 'nav',
    component: NavComponent
  },
  {
    path : 'customer-list',
    component: CustomerListComponent
  },
  {
    path : 'customer-form',
    component: CustomerFormComponent
  },
  {
    path : 'customer-update',
    component: CustomerUpdateComponent
  },
  {
    path : 'account-list',
    component: AccountListComponent
  },
  {
    path : 'account-form',
    component: AccountFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
