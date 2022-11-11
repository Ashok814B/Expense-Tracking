import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router";
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public title:string='';
  public category:string='';
  public amount:number=0;
  public date:any;

  constructor(public router:Router,public global:GlobalService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(event:any){
        event.preventDefault();
        this.global.postExpenseDetails({
          title:this.title,
          category:this.category,
          amount:this.amount,
          date:this.date
        }).subscribe((success:any)=>{
          this.router.navigateByUrl("/dashboard");
 },(failure)=>{
         console.log("error",failure);
 })


        // if(sessionStorage.getItem("list")){
        //     let globalList:any = (sessionStorage.getItem("list"));
        //     globalList = JSON.parse(globalList);
        //     globalList.push({
        //       title:this.title,
        //       category:this.category,
        //       amount:this.amount,
        //       date:this.date
        //     });
        //     sessionStorage.setItem("list",JSON.stringify(globalList));
        // }
        // else{
        //   let list:any=[];
        //   list.push({
        //     title:this.title,
        //     category:this.category,
        //     amount:this.amount,
        //     date:this.date
        //   });
        //   sessionStorage.setItem("list",JSON.stringify(list));
        // }
        // this.router.navigateByUrl("/dashboard");
  }

}
