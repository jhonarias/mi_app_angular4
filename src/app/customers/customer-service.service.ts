import { Injectable } from '@angular/core';
import { Customer } from "./customer";

@Injectable()
export class CustomerService {

  customerList:Array<Customer>;

  constructor() { 
        
  }

  private initializeCustomerList() {
    this.customerList = [
      {
        name: "John",
        address: "Cra 11 Nro 5-24 Betania Viejo",
        gender: "0",
        stratum: "1"
      },
      {
        name: "Carlos",
        address: "Cra 11 Nro 5-24 Betania Viejo",
        gender: "1",
        stratum: "3"
      }
    ];
  }

  loadCustomers() {
    this.initializeCustomerList();
  }

  saveCustomer(customer: Customer) {
    this.customerList.push(customer);
  }

}
