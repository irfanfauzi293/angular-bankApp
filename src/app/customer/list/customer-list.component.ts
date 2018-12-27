import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../service/customer';
import { CustomerService } from '../service/customer.service';
import { CustomerUpdateComponent } from '../form/customer-update.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @ViewChild('formCustomer')
  formCustomer:CustomerUpdateComponent;

  listCustomer : Customer[]=[];
  showDetail : boolean = false;
  selectedCustomer: Customer = new Customer();

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.customerService.getList().subscribe((Response)=> {
      console.log(JSON.stringify(Response));
      this.listCustomer=[];
      Object.assign(this.listCustomer, Response);
    },(err)=> {
      alert('error: ' + JSON.stringify(err))
    });
  }

  selectCustomer(customer:Customer) {
    let copyCustomer = new Customer();
    copyCustomer.customerNumber = customer.customerNumber
    copyCustomer.firstName = customer.firstName
    copyCustomer.lastName = customer.lastName
    copyCustomer.birthDate = customer.birthDate
    copyCustomer.username = customer.username
    copyCustomer.password = customer.password
    copyCustomer.phoneType = customer.phoneType
    copyCustomer.phoneNumber = customer.phoneNumber
    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
    this.formCustomer.updateData();
  }

  prosesResult(result) {
    if(result) {
 
      this.showDetail = false;
      this.loadData();
    }
  }

  deleteData(event) {
    this.customerService.delete(event).subscribe((Response)=> {
      console.log(JSON.stringify(Response));
    location.reload();
  },(err)=>{
    alert('error : ' + JSON.stringify(err))
    });
  }


}
