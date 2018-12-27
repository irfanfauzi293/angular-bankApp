import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/customer/service/customer';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { AccountFormComponent } from '../form/account-form.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  customer:Customer;

  @ViewChild('formAccount')
  formAccount:AccountFormComponent;

  listAccount : Account[] = [];
  showDetail = false;
  selectedAccount : Account = new Account();

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.accountService.getList().subscribe((Response)=> {
      console.log(JSON.stringify(Response));
      Object.assign(this.listAccount, Response);
    }, (err)=>{
      alert('error : ' + JSON.stringify(err))
    });
  }

  selectAccount(account:Account) {
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;
    this.selectedAccount = copyAccount;
    this.showDetail = true;
  }

  prosesResult(result) {
    if(result) {
 
      this.showDetail = false;
      this.loadData();
    }
  }

  deleteData(event) {
    this.accountService.delete(event).subscribe((Response)=>{
    console.log(JSON.stringify(Response));
    location.reload();
    },(err)=>{
    alert('error : ' + JSON.stringify(err))
    });
  }

}
