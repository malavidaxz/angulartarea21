import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username:string="";
  password:string="";
 
 
  constructor(private autenticacion : AuthService, private router: Router) { }


  

  login(){
    if(this.autenticacion.login( this.username,this.password)){
      this.router.navigate(['/home']);
     
    }else{
      console.log("Credenciales incorrectas");
    }
  }
  

}
