import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  

  constructor() {}

  ngOnInit(): void {
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
