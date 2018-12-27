import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../service/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerFormGroup: FormGroup;

  @Input()
  customer:Customer;

  @Output()
  result = new EventEmitter();

  constructor(private customerService:CustomerService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group( {
      customerNumber: [''],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      birthDate:['',Validators.required],
      phoneType:['',Validators.required],
      phoneNumber: ['',Validators.required]
    });
    this.updateData();
  }

  submitData() {
    let customer:Customer = new Customer();
    customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value;
    customer.firstName = this.customerFormGroup.controls['firstName'].value;
    customer.lastName = this.customerFormGroup.controls['lastName'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value;
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value;
    customer.phoneType = this.customerFormGroup.controls['phoneType'].value;

    this.customerService.update(customer).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    }, (err)=> {
      alert('error : '+ JSON.stringify(err))
    });
  }

  updateData() {
    this.setDataForm(this.customer);
  }

  setDataForm(customer) {
    if(customer) {
      this.customerFormGroup.controls['customerNumber'].setValue(customer.customerNumber);
      this.customerFormGroup.controls['firstName'].setValue(customer.firstName);
      this.customerFormGroup.controls['lastName'].setValue(customer.lastName);
      this.customerFormGroup.controls['username'].setValue(customer.username);
      this.customerFormGroup.controls['password'].setValue(customer.password);
      this.customerFormGroup.controls['birthDate'].setValue(customer.birthDate);
      this.customerFormGroup.controls['phoneNumber'].setValue(customer.phoneNumber);
      this.customerFormGroup.controls['phoneType'].setValue(customer.phoneType)
    }
  }

}
