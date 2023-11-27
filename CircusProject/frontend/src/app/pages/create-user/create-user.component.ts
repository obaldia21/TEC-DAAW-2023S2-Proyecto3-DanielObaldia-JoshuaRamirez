import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Importar FormBuilder para crear formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importar CrudService para hacer peticiones a la API
import { CrudService } from '../../services/crud.service';

// Importar Router para redireccionar a otras vistas
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
    
    ) {}

  

  formUser: FormGroup;

  @Input()
  userModel: User;

  @Output()
  submitValues: EventEmitter<User> = new EventEmitter<User>();


  ngOnInit(): void {
    this.formUser =  this.formBuilder.group({
      userName: ['',Validators.required],
      userEmail: ['',Validators.required],
      userPassword: ['',Validators.required],
      userDirection: ['',Validators.required],
      userCreditCard: ['',Validators.required]
    })

    if(this.userModel !== undefined){
      this.formUser.patchValue(this.userModel);
    }

  }

  onSubmit(user: any){
    
    this.crudService.createUser(user).subscribe({
      next: () => {
        alert("Usuario creado correctamente");
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        alert("Error al crear el usuario");
        console.error(error);
      }
    })

  }
  
}
