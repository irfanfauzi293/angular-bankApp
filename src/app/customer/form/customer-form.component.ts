import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../service/customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerFormGroup: FormGroup;

  constructor(private customerService:CustomerService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customerNumber: [''],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      birthDate:['',Validators.required],
      phoneType:['',Validators.required],
      phoneNumber:['',Validators.required]
    });
  }

  submitData() {
    let customer: Customer = new Customer();
    customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value;
    customer.firstName = this.customerFormGroup.controls['firstName'].value;
    customer.lastName = this.customerFormGroup.controls['lastName'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value;
    customer.phoneType = this.customerFormGroup.controls['phoneType'].value;
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value;

    this.customerService.create(customer).subscribe((response)=> {
      console.log(JSON.stringify(response));
      this.router.navigate(['/customer-list']);
    },(err)=> {
      alert('error: ' + JSON.stringify(err))
    });
  }

}
