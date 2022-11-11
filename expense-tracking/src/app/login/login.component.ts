import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public flag:boolean = false;
  constructor(public global:GlobalService,public router:Router) { }

  ngOnInit(): void {
  }

  onLoginHandler(form:NgForm){
    this.flag = true;
    if(form.invalid){
      return;
    }
    console.log(form.value);
    this.global.postLoginDetails(form.value).subscribe(()=>{
      this.global.loginSuccess = true;
      this.router.navigateByUrl("/dashboard");
    },()=>{
      alert("no matches found");
    })
 
  }

}
