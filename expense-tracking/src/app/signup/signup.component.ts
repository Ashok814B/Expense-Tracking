import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {GlobalService} from '../global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public route:Router,public global:GlobalService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
     if(form.invalid){
      return;
     }
     this.global.postRegisterDetails(form.value).subscribe((response)=>{
        this.route.navigateByUrl("/login");
     },(error)=>{

     })

  }

}
