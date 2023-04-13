import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../../components/models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url='https://localhost:7100/api/';

  constructor(private http:HttpClient, private router:Router, private jwt: JwtHelperService) { }

  login(user: Login){
    return this.http.post(this.url + 'Login', user);
  }

  logout():void{
    localStorage.removeItem('user-info')
    this.router.navigate(['cms/auth'])
  }

  saveToken(token:string):void{
    localStorage.setItem('token', token)
  }

  isAuthenticated(){
    // @ts-ignore
    return localStorage.getItem('token') ? true : false;
  }

  getUsernameAuthenticated():string{
    const user_info = JSON.parse( localStorage.getItem('user-info') || '{}' );
    return user_info;
  }
}
