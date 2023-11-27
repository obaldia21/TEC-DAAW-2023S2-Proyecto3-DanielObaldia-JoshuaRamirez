import { Component, OnInit } from '@angular/core';

// Importar el servicio
import { CrudService } from '../../services/crud.service';

// Importar Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importar Router
import { Router, ActivatedRoute } from '@angular/router';

// Importar el modelo
import { User } from '../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables de login
  loginForm: FormGroup;
  loginError: string = '';
  loginSuccess: string = '';

  // Definir variables a utilizar
  id!: any;
  user: User;

  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['',[Validators.required,Validators.email]],
      userPassword: ['',[Validators.required]]
    });
  }

  onLogin() {
    if(this.loginForm.valid){
      this.crudService.userLogin(this.loginForm.value).subscribe({
        next: (res) => {
          // Mensaje de éxito
          this.loginSuccess = 'Inicio de sesión exitoso';

          // Guardar el token en el localStorage
          localStorage.setItem('token',res.token);

          // Guardar id del usuario en el localStorage
          localStorage.setItem('id',res.user._id);
          console.log(res.user._id);
          

          // Redirigir al home
          this.router.navigate(['/']);


        },
        error: (err) => {
          // Mensaje de error
          this.loginError = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
          
        }
      });
    }

  }

}
