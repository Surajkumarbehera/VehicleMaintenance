import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class ProductService{
    public httpHeaders:HttpHeaders;

   constructor(private _httpClient:HttpClient){
     this.httpHeaders=new HttpHeaders()
       .set('allow-origin-access-control','*')
       .set('Content-type','application/json');
   }

   //login
   loginUser(userObj: { username: any; password: any; }):Observable<Object>
    {
        console.log('loginObject',  userObj);
        return this._httpClient.post('http://localhost:9090/myapp/user/login', JSON.stringify(userObj),{headers:this.httpHeaders}); 
    }

    registerUser(userProfileObj : any, username:string, password:string, usertype:string):Observable<Object>
    {
        console.log('registrationObject:', userProfileObj);
        return this._httpClient.post('http://localhost:9090/myapp/user', JSON.stringify(userProfileObj),
    {headers:this.httpHeaders, params:{'username':username, 'password':password, 'usertype':usertype}});
    }
}