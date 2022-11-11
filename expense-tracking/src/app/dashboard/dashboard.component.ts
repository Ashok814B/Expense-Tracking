import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public expense:string="Expense Title";
  public expenseButton:string = "submit";
  public expenseClass:string="btn btn-success";
  public searchName:string="";
  public list:any=[];
  public flag:boolean = true;
  public editIndex:number =-1;
  public title:string='';
  public category:string='';
  public amount:number=0;
  public date:any;

  constructor(public global:GlobalService) {
    
   }

   onEditHandler(i:any){
    this.title = this.list[i].title;
    this.category = this.list[i].category;
    this.amount = this.list[i].amount;
    this.date = this.list[i].date;
    this.editIndex = i;
   }

   onDeleteHandler(i:any){
      alert(i);
      let id = this.list[i]._id;
      // this.list.splice(i,1);
      // sessionStorage.setItem("list",JSON.stringify(this.list));
      this.global.deleteExpenseDetails(id).subscribe((success:any)=>{
        this.onFetchDetails();
},(failure)=>{
       console.log("error",failure);
})
     
   }

   onFinalSubmitHandler(){
    let id = this.list[this.editIndex]._id;
    let obj={
      title:this.title,
      category:this.category,
      amount:this.amount,
      date:this.date
    };
    this.global.updateExpenseDetails(id,obj).subscribe((success:any)=>{
     this.onFetchDetails();
},(failure)=>{
     console.log("error",failure);
})
    // this.list[this.editIndex].title = this.title;
    // this.list[this.editIndex].category = this.category;
    // this.list[this.editIndex].amount = this.amount;
    // this.list[this.editIndex].date = this.date;
    // sessionStorage.setItem("list",JSON.stringify(this.list));
   }

  ngOnInit(): void {
     this.onFetchDetails();
  }

  onFetchDetails(){
    this.global.getExpenseDetails().subscribe((success:any)=>{
             console.log(success.list);
             if(success && success.list.length>0){
              let details:any = success.list;
              this.list=[];
              this.list.push(...details);
             }
    },(failure)=>{
            console.log("error",failure);
    })
    // if(sessionStorage.getItem('list')){
    //   let input:any = sessionStorage.getItem("list");
    //   input = JSON.parse(input);
    //   this.list =[...input];
    // }
    // else{
    //   this.list=[];
    // }
  }
  
  onSubmitHandler(event:any){
    event.preventDefault();
     alert("onsubmit");
  }

  onShowHandler(){
    this.flag = !this.flag;
  }

}
