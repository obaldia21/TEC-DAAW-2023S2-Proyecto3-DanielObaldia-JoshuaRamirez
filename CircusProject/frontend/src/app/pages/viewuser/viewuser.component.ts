import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  id!: any;
  user: User;

  constructor(
    private crudService: CrudService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    
    ) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.id);

    this.crudService.getUser(this.id).subscribe((res)=>{
      this.user = {
        _id: res.id,
        userName: res.userName,
        userEmail: res.userEmail,
        userPassword: res.userPassword,
        userDirection: res.userDirection,
        userCreditCard: res.userCreditCard

      }
      
    })
  }

}
