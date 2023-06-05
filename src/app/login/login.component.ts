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
  loginStatus:any= true;

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
                      if(obj.result=="success"){
                        sessionStorage.setItem("user_id",String(obj.user_id));
                        this.route.navigateByUrl("/HomePage");
                        this.loginStatus= true;
                      }
                      else if (obj.result=="failed"){
                        this.route.navigateByUrl("/login");
                        this.loginStatus= false;
                        alert('Wrong username or  password!! Please try again with the correct details! ')
                      }
                     
                 }
          });
  }
}
