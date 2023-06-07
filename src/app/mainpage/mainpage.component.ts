import { Component, OnInit } from '@angular/core';
import { ProductService } from "../productService";




@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [ProductService]
})

export class MainpageComponent implements OnInit {
   

  constructor(private productService: ProductService) { 
  }
  

  
  activeTab: string = 'home';
  loginStatus1=true;
  userProfileData: any ;
  user:any;
  vehicles:any;
  tableData:any;
  curentVehicledata:any;
  streamingData:any;
  activedTab: string = 'tab1';
  statusOfService:any=true;
  
  ngOnInit(): void {
    console.log("here");
    this.userdata();
  }
 userdata(){

  let userIDStored: string | null = sessionStorage.getItem("userId");
if (userIDStored){
this.productService.getUserDeatils("userIDStored").subscribe((response: any) =>{console.log(response) ;});
}
this.productService.getUserDeatils('1').subscribe((response: any) =>{console.log(response) ;
  let jsonfile=JSON.parse(JSON.stringify(response));
  console.log(jsonfile);
  this.user = {
    firstName: jsonfile.dataUserDetails.firstname,
    lastName: jsonfile.dataUserDetails.lastname,
    dob: jsonfile.dataUserDetails.dob,
    gender: jsonfile.dataUserDetails.gender,
    street: jsonfile.dataUserDetails.street,
    location: jsonfile.dataUserDetails.location,
    city: jsonfile.dataUserDetails.city,
    state: jsonfile.dataUserDetails.state,
    pincode: jsonfile.dataUserDetails.pincode,
    mobileNumber: jsonfile.dataUserDetails.mobileno,
    email: jsonfile.dataUserDetails.emailId,
    vehicleNumber: jsonfile.dataUserDetails.vechileNumber,
    registrationNumber: jsonfile.dataUserDetails.registrationNumber,
    yearOfPurchase: jsonfile.dataUserDetails.yop,
    driverLicense: jsonfile.dataUserDetails.driverLicense,
    dealer: jsonfile.dataUserDetails.dealer
  };

  this.vehicles = [
    {
      fuelType: jsonfile.dataVehicleDetails.fuelType,
      maker: jsonfile.dataVehicleDetails.maker,
      model: jsonfile.dataVehicleDetails.model,
      numberPlate: jsonfile.dataVehicleDetails.numberPlate,
      ownerName: jsonfile.dataVehicleDetails.ownerName,
      price: jsonfile.dataVehicleDetails.price,
      registrationDate: jsonfile.dataVehicleDetails.registrationDate,
      vehicleColor: jsonfile.dataVehicleDetails.vehicleColour,
      vehicleType: jsonfile.dataVehicleDetails.vehicleType,
      vehicleNumber: jsonfile.dataVehicleDetails.vehicleNumber,
      year: jsonfile.dataVehicleDetails.year,
    },
    // Add more vehicle objects as needed
  ];
  this.tableData = [
    {
      fieldName: 'AirBags',
      value: jsonfile.dataStdThreshold.AirBags
    },
    {
      fieldName: 'AirFiltersMonths',
      value: jsonfile.dataStdThreshold.AirFiltersMonths
    },
    {
      fieldName: 'EngineOilPeriodMonths',
      value: jsonfile.dataStdThreshold.EngineOilPeriodMonths
    },
    {
      fieldName: 'GearPressure',
      value: jsonfile.dataStdThreshold.GearPressure
    },
    {
      fieldName: 'ServicePeriodMonths',
      value: jsonfile.dataStdThreshold.ServicePeriodMonths
    },
    {
      fieldName: 'VehicleBattery',
      value: jsonfile.dataStdThreshold.VehicleBattery
    },
    {
      fieldName: 'vehicleNumber',
      value: jsonfile.dataStdThreshold.vehicleNumber
    }
  ];

  this.curentVehicledata = [
    {
      fieldName: 'AirBags_alarm',
      value: jsonfile.outFindings.AirBags_alarm
      
    },
    {
      fieldName: 'AirFlt_alarm',
      value: jsonfile.outFindings.AirFlt_alarm
    },
    {
      fieldName: 'AirFlt_due_date',
      value: jsonfile.outFindings.AirFlt_due_date
    },
    {
      fieldName: 'AirFlt_no_of_days',
      value: jsonfile.outFindings.AirFlt_no_of_days
    },
    {
      fieldName: 'BatteryPercentage_alarm',
      value: jsonfile.outFindings.BatteryPercentage_alarm
    },
    {
      fieldName: 'EngOil_alarm',
      value: jsonfile.outFindings.EngOil_alarm
    },
    {
      fieldName: 'EngOil_due_date',
      value: jsonfile.outFindings.EngOil_due_date
    },
    {
      fieldName: 'EngOil_no_of_days',
      value: jsonfile.outFindings.EngOil_no_of_days
    },
    {
      fieldName: 'GearPr_alarm',
      value: jsonfile.outFindings.GearPr_alarm
    },
    {
      fieldName: 'service_alarm',
      value: jsonfile.outFindings.service_alarm
    },
    {
      fieldName: 'service_due_date',
      value: jsonfile.outFindings.service_due_date
    },
    {
      fieldName: 'service_no_of_days',
      value: jsonfile.outFindings.service_no_of_days
    }
  ];
  this.streamingData =[
    {
      fieldName: 'Air_bags',
      value: jsonfile.dataStreamingData.Air_bags
    },
    {
      fieldName: 'Air_filters_SvcDate',
      value: jsonfile.dataStreamingData.Air_filters_SvcDate
    },
    {
      fieldName: 'Engine_Oil_Date',
      value: jsonfile.dataStreamingData.Engine_Oil_Date
    },
    {
      fieldName: 'GearPressure',
      value:  jsonfile.dataStreamingData.GearPressure
    },
    {
      fieldName: 'Last_Service_Date',
      value:  jsonfile.dataStreamingData.Last_Service_Date
    },
    {
      fieldName: 'VehicleBattery',
      value:  jsonfile.dataStreamingData.VehicleBattery
    },
    {
      fieldName: 'received_dateTime',
      value:  jsonfile.dataStreamingData.received_dateTime
    },
    {
      fieldName: 'vehicleNumber',
      value:  jsonfile.dataStreamingData.vehicleNumber
    }
  ];
  


});   
 }
 
}
