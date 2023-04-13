import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../../components/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  loader = false
  formLogin!: FormGroup
  message = '';
  constructor(private route: Router, private fb:FormBuilder, private spinner: NgxSpinnerService,
    private httpService: AuthenticationService) { }

  ngOnInit(): void {
    this.formLogin = this.initFormLogin()
  }

  ngAfterViewInit(): void {
    
  }

  onLogin(){
    const datos: Login = {
      UserName:  this.UserName.value,
      Password: this.PWD.value
    }

    this.httpService.login(datos).subscribe((data:any) => {
      this.spinner.show();
      if(data.message === 'Ok'){
        localStorage.setItem("user-info",JSON.stringify(datos.UserName))
        this.httpService.saveToken(data.data.token);
        setTimeout(()=>{
          this.spinner.hide()
          this.route.navigate(['dashboard/admin/inicio']);
        },2000);
      }

      if(data.message === 'Error'){
        this.message === data.data;
      }
    },(error:any) => {
      this.message = 'Credenciales invalidas';
      console.log(error);
  })

    
  }

  get UserName(): FormControl {
    return this.formLogin.get('username') as FormControl;
  } 
  get PWD(): FormControl {
    return this.formLogin.get('contrasenia') as FormControl;
  }


  initFormLogin():FormGroup{
    return this.fb.group({
      username: ['',[Validators.required]],
      contrasenia: ['',[Validators.required,]]
    })
  }
}
