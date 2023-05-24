import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from "../productService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ProductService]
})
export class LoginComponent implements OnInit {

  constructor (private productService: ProductService,private route:Router){ }

  ngOnInit(): void {
  }
  onSubmit(LoginForm:any) 
  {
      console.log(LoginForm);
      this.productService.loginUser({"username": LoginForm.Username,"password": LoginForm.Password}).subscribe(
          (response)=>{
                 let obj= JSON.parse(JSON.stringify(response));
                 console.log(obj);
                 if(obj.usertype==='admin')
                 {
                  sessionStorage.setItem("sessionId",String(obj.authtoken));
                  this.route.navigateByUrl("/adminhome")
                 }
                 else
                 {
                     // sessionStorage.setItem("sessionId",String(obj.authtoken));
                      //sessionStorage.setItem("flag","login");
                      this.route.navigateByUrl("/ResgistrationPage");
                 }
          });
  }
}
