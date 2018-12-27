import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/accounts');
  }

  create(account:Account) {
    return this.httpClient.post('http://localhost:3000/account',account);
  }

  update(account:Account) {
    return this.httpClient.put('http://localhost:3000/account',account);
  }

  delete(id:String) {
    return this.httpClient.delete('http://localhost:3000/account/'+id);
  }
}
