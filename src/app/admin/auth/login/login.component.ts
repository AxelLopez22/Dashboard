import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  loader = false
  formLogin!: FormGroup
  constructor(private route: Router, private fb:FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formLogin = this.initFormLogin()
  }

  ngAfterViewInit(): void {
    
  }

  onLogin(){
    this.spinner.show();
    const datos = {
      id: 4,
      nombreUsuario:"admin",
      correo: "admin@gmail.com"
    }
    localStorage.setItem("user-info",JSON.stringify(datos))
    setTimeout(()=>{
      this.spinner.hide()
      this.route.navigate(['dashboard/admin/inicio']);
    },2000)
  }


  initFormLogin():FormGroup{
    return this.fb.group({
      correo: ['admin@gmail.com',[Validators.required, Validators.email]],
      contrasenia: ['admin123',[Validators.required,]]
    })
  }
}
