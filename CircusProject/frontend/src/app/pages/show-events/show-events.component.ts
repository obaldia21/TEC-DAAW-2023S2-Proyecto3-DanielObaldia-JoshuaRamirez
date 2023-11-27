import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

// Importar Modelos
import { Events } from 'src/app/models/events.model';



@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit{

  events: Events[] = [];


  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.getEvents().subscribe((res:Events[]) => {
    
      this.events = res;
    })
  }

  


}
