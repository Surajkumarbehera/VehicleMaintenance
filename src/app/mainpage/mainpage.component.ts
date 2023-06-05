import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from "../productService";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [ProductService]
})
export class MainpageComponent implements OnInit {
   

  constructor(private productService: ProductService,  private route:Router) { }
  

  ngOnInit(): void {
    const userIDStored: string | null = sessionStorage.getItem('userId');
    if (userIDStored){
      this.productService.getUserDeatils(userIDStored).subscribe((response: any) =>{console.log(response) ;});
    }
    
  }
  activeTab: string = 'home';
  loginStatus1=true;
 


 
  
  userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '1990-01-01',
    gender: 'Male',
    street: '123 Main Street',
    location: 'Near Park',
    city: 'City',
    state: 'State',
    pincode: '12345',
    mobileNumber: '1234567890',
    email: 'johndoe@example.com',
    vehicleNumber: 'ABC123',
    registrationNumber: 'XYZ456',
    yearOfPurchase: '2020',
    driverLicense: '',
    dealer: 'Moto Services Inc.'
  };

 

 
}
