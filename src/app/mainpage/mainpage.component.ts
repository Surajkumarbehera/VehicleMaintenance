import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public userProfileForm!: FormGroup;
  public user: any;
  public userUpdate: any;
  public loginStatus: any;
  first_name! :string;
    last_name!: string;
    dob!:Date;
    email!:string;
    pincode!:string;
    city!:string;
    state!:string;
    street!:string;
    location!: string;
    mobile!:string;
    password!:string;
    password2!:string;
    gender!:string;

  constructor(private formBuilder: FormBuilder) { }

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

  userProfiles = [
    { key: 'First Name', value: 'John' },
    { key: 'Last Name', value: 'Doe' },
    { key: 'Date of Birth', value: '1990-01-01' },
    { key: 'Gender', value: 'Male' },
    { key: 'Street', value: '123 Main Street' },
    { key: 'Location', value: 'Near Park' },
    { key: 'City', value: 'City' },
    { key: 'State', value: 'State' },
    { key: 'Pincode', value: '12345' },
    { key: 'Mobile Number', value: '1234567890' },
    { key: 'Email', value: 'johndoe@example.com' },
    { key: 'Vehicle Number', value: 'ABC123' },
    { key: 'Registration Number', value: 'XYZ456' },
    { key: 'Year of Purchase', value: '2020' },
    { key: 'Driver License', value: '' },
    { key: 'Dealer', value: 'Moto Services Inc.' }
  ];
  
  dataSource = new MatTableDataSource<any>(this.userProfiles);
 
}
