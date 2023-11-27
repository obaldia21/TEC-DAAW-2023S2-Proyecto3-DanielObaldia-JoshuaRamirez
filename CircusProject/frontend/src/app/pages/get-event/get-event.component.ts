import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Events, Event } from 'src/app/models/events.model';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-event.component.html',
  styleUrls: ['./get-event.component.css']
})

export class GetEventComponent implements OnInit{

  //Declare variables

  id!: any;
  event: Event;
  
  loading: boolean = false;

  constructor(
    private crudService: CrudService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.id);

    this.crudService.getEventbyId(this.id).subscribe((res)=>{
      this.event = {
        _id: res.id,
        eventName: res.eventName,
        eventSynopsis: res.eventSynopsis,
        eventLocation: res.eventLocation,
        eventDate: res.eventDate,
        eventPrice: res.eventPrice,
        eventArtist: res.eventArtist,
        picture: res.picture
      }
      
    })
  }

  


}
