import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usuariologueado:boolean = false;
constructor(public autenticacion: AuthService,private router: Router){}

  ngOnInit(){
    this.autenticacion.changeLoginStatus$.subscribe((Logged:boolean) => {
      this.usuariologueado = Logged;
    });
  }
  logout(){
    this.autenticacion.logout();
    this.usuariologueado = false;
    this.router.navigate(['/login']);

    }
}
