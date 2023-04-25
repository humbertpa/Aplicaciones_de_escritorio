import { Component } from '@angular/core';
import { Credenciales } from 'src/app/shared/interfaces/credenciales';
import { Token } from 'src/app/shared/interfaces/token';
import { LoginService } from 'src/app/shared/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credenciales: Credenciales = {
    email:'',
    password:''
  }
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router){}

  logIn(){
    this.loginService.login(this.credenciales).subscribe((response: Token)=>{
      this.authService.setToken(response.token);
      this.router.navigate(['/'])
    });
  }

}
