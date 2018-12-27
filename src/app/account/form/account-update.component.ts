import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { Customer } from 'src/app/customer/service/customer';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  accountFormGroup : FormGroup;

  @Input()
  account:Account;

  @Output()
  result = new EventEmitter();

  constructor(private accountService:AccountService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group( {
      accountNumber: [''],
      openDate:[''],
      balance:[''],
      customer:['']
    })
    this.updateData();
  }

  submitData() {
    let account:Account = new Account();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;

    let customer = new Customer();
    customer.customerNumber = this.accountFormGroup.controls['customer'].value;
    account.customer = customer;

    this.accountService.update(account).subscribe((Response)=> {
      console.log(JSON.stringify(Response));
      this.result.emit(true);
    },(err)=> {
      alert('error : '+JSON.stringify(err))
    });
  }

  updateData() {
    this.setDataForm(this.account);
  }

  setDataForm(account) {
    if(account) {
      this.accountFormGroup.controls['accountNumber'].setValue(account.accountNumber);
      this.accountFormGroup.controls['openDate'].setValue(account.openDate);
      this.accountFormGroup.controls['balance'].setValue(account.balance);
      this.accountFormGroup.controls['customer'].setValue(account.customer.customerNumber);
    }
  }

}
