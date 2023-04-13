import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  usernameAuthenticated:string = ''

  constructor(private authService:AuthenticationService, private spinner:NgxSpinnerService,
    private router:Router){}

  ngOnInit(): void {
    this.usernameAuthenticated = this.authService.getUsernameAuthenticated()
  }

  SideNavToggled(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout(): void{
    this.spinner.show()
    localStorage.removeItem('token');
    setTimeout(()=>{
      this.spinner.hide()
      this.authService.logout()
      this.router.navigateByUrl("dashboard/auth");
    },2000)
  }

  clearLocalStorage(){
    localStorage.removeItem('notification')
    location.reload();
  }
}
