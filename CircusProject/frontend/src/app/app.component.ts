import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// OnInit para inicializar el componente
export class AppComponent implements OnInit{
  title = 'frontend';


  // Nuevo consructor para inyecciones (Patron de diseño POO)
  constructor(private crudService: CrudService) { 

  }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe((res) => {
      console.log(res);
    });

  }

}
