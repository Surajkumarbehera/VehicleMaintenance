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
       return this._httpClient.post('https://ivms-hackathon2023-intelligent-vehicle-maintenance.mycluster-wdc04-b3c-16x64-bcd9381b2e59a32911540577d00720d7-0000.us-east.containers.appdomain.cloud/myapp/user/login', JSON.stringify(userObj),{headers:this.httpHeaders});
     //   return this._httpClient.post('http://localhost:9090/myapp/user/login', JSON.stringify(userObj),{headers:this.httpHeaders}); 
    }

    registerUser(userProfileObj : any):Observable<Object>
    {
        console.log('registrationObject:', userProfileObj);
      return this._httpClient.post('https://ivms-hackathon2023-intelligent-vehicle-maintenance.mycluster-wdc04-b3c-16x64-bcd9381b2e59a32911540577d00720d7-0000.us-east.containers.appdomain.cloud/myapp/user/register', JSON.stringify(userProfileObj), {headers:this.httpHeaders});
       // return this._httpClient.post('http://localhost:9090/myapp/user/register', JSON.stringify(userProfileObj), {headers:this.httpHeaders});
    }
    getUserDeatils(userId:String):Observable<Object>
    {   
      return this._httpClient.post('https://ivms-hackathon2023-intelligent-vehicle-maintenance.mycluster-wdc04-b3c-16x64-bcd9381b2e59a32911540577d00720d7-0000.us-east.containers.appdomain.cloud/myapp/user/data',{params:{'user_id':userId}});
        //return this._httpClient.post('http://localhost:9090/myapp/user/data',{params:{'user_id':userId}});
        //return this._httpClient.post('https://run.mocky.io/v3/677ada57-1641-43fa-83e8-219082959bc0',{headers:this.httpHeaders});
     


    }
}
