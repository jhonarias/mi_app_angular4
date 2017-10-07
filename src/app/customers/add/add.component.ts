import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer-service.service";

@Component({
  selector: 'customer-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  stratums = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];

  customer:Customer;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();
  }

  onSaveClick() {
    alert('Se guardo el cliente '+ this.customer.name + ' satisfactoriamente');      
    this.customerService.saveCustomer(this.customer);
    this.customer = new Customer();
  }

  onNewClick() {
    this.customer = new Customer();
  }

}
