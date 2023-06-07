import { Component, OnInit } from '@angular/core';
import { ProductService } from "../productService";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css'],
  providers: [ProductService]

})
export class ResgistrationComponent implements OnInit {

  public Gender = ['Male','Female'];
    constructor (private productService: ProductService, private route:Router) {

    }

  ngOnInit() {
  }
  onSubmit(RegForm:any) 
  {
      console.log(RegForm);
      this.productService.registerUser({
          "firstname": RegForm.Firstname,
          "lastname": RegForm.Lastname,
          "dob": RegForm.Dob,
          "gender": RegForm.gender,
          "street": RegForm.Street,
          "location": RegForm.Location,
          "city": RegForm.City,
          "state": RegForm.State,
          "pincode": RegForm.Pincode,
          "mobileno": RegForm.Mobile,
          "emailId": RegForm.Email,
          "vechileNumber":RegForm.vechileNumber,
          "registrationNumber":RegForm.registrationNumber,
          "yop":RegForm.yop,
          "driverLicense":RegForm.driverLicense,
          "vehicleType":RegForm.vehicleType,
          "dealer":RegForm.dealer,
          "fuelType":RegForm.fuelType,
          "username": RegForm.username,
          "password": RegForm.password
      }).subscribe(
          (response)=>{console.log(response);
          alert('Successfully Registered!! Your profile details are: '+ JSON.stringify(response))}
      ); 
      this.route.navigateByUrl("/login");  
    }
  }


