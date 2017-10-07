import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer-service.service";

@Component({
  selector: 'customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  genderOptions = ["Masculino","Femenino"]

  constructor(private customerService:CustomerService) {         
  }

  ngOnInit() {
    this.customerService.loadCustomers();
  }

}
