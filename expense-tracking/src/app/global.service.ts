import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public loginSuccess:boolean = false;
  constructor(public http:HttpClient) {

   }

  getExpenseDetails(){
    return this.http.get<{success:any}>('http://localhost:3000/api/posts');
  }

  postExpenseDetails(body:any){
    return this.http.post<{success:any}>('http://localhost:3000/api/posts',body);
  }

  deleteExpenseDetails(id:any){
    return this.http.delete<{success:any}>('http://localhost:3000/api/posts/'+id);
  }

  updateExpenseDetails(id:any,payload:any){
    return this.http.patch<{success:any}>('http://localhost:3000/api/posts/'+id,payload);
  }

  postRegisterDetails(body:any){
    return this.http.post<{success:any}>('http://localhost:3000/api/auth/register',body);
  }

  postLoginDetails(body:any){
    return this.http.post<{success:any}>('http://localhost:3000/api/auth/login',body);
  }
}
