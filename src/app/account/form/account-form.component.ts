import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/service/customer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { Account } from '../service/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  accountFormGroup: FormGroup;

  constructor(private accountService:AccountService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      accountNumber: [''],
      balance: [''],
      openDate: [''],
      customer: ['']
    });
  }

  submitData() {
    let account:Account = new Account();

    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;

    let customer = new Customer();
    customer.customerNumber = this.accountFormGroup.controls['customer'].value;
    account.customer = customer;

    this.accountService.create(account).subscribe((Response)=> {
      console.log(JSON.stringify(Response));
      this.router.navigate(['/account-list']);
    }, (err)=>{
      alert('error: '+ JSON.stringify(err))
    });
  }

}
