import { Injectable } from '@angular/core';
import { Customer } from "./customer";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CustomerDataServerService {

  customerList:Array<Customer>;
  
  constructor(private http: HttpClient) { }

  loadCustomers() {
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.      
      this.customerList = data as Array<Customer>;
    });
  }

  saveCustomer(newCustomer: Customer) {
    this.http.post('/api/developers/add',newCustomer).subscribe(data => {

    });
  }

}
