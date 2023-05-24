import { Component, OnInit } from '@angular/core';
import { ProductService } from "../productService";

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css'],
  providers: [ProductService]

})
export class ResgistrationComponent implements OnInit {

  public Gender = ['Male','Female'];
    constructor (private productService: ProductService) {

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
      },RegForm.Username ,RegForm.Password, RegForm.Usertype).subscribe(
          (response)=>{console.log(response);
          alert('Successfully Registered!! Your profile details are: '+ JSON.stringify(response))}
      );   
    }
  }


