import { Injectable } from '@angular/core';
import {CanActivate,Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuradService implements CanActivate{

  constructor(public router:Router,public global:GlobalService) { }

  canActivate(route: any): boolean{
    if(this.global.loginSuccess){
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
    
  }
}
