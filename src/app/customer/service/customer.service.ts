import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getList () {
    // return this.httpClient.get('http://localhost:8080/customer/getList');
    return this.httpClient.get('http://localhost:3000/customers');
  }

  create(customer:Customer) {
    // return this.httpClient.post('http://localhost:8080/customer/input',customer);
    return this.httpClient.post('http://localhost:3000/customer',customer);
  }

  update(customer:Customer) {
    // return this.httpClient.put('http://localhost:8080/customer/update',customer);
    return this.httpClient.put('http://localhost:3000/customer',customer);
  }

  delete(id:String) {
    // return this.httpClient.delete('http://localhost:8080/customer/deleteData/'+id);
    return this.httpClient.delete('http://localhost:3000/customers/'+id);
  }
}
