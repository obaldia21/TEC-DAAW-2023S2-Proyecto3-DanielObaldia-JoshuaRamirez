import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {


  id = localStorage.getItem('id');

  constructor(private router: Router) { }
  

  isLoggedIn(): boolean {
    
    return !!localStorage.getItem('token');
  }

  // función para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    
    this.router.navigate(['/']);
  }

}
