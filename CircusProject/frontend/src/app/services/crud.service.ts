import { Injectable } from '@angular/core';

// IMPORTAR MODELOS
import { User } from '../models/user.model';
import { Events } from '../models/events.model';


// HACER PETICIONES A NUESTRO BACKEND
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// IMPORTAR observables
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  // Http Headers
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  

  constructor(private httpClient: HttpClient) { }

  // Manejo de errores
  handleError(error: HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // Manejar error del lado del cliente
      errorMessage = error.error.message;
    }else{
      // Manejar error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage
    });
  }


  // -------------------------------------------- USERS --------------------------------------------

  // DEFINIR VARIABLE API USER
  private REST_API_USERS: string = 'http://localhost:8000/api/users';
  


  // Ver todos los usuarios en el sistema
  getUsers(){
    return this.httpClient.get(this.REST_API_USERS,{headers: this.httpHeaders});
  }

  //Ver un único usuario en específico

  getUser(id:any){
    return this.httpClient.get(`this.REST_API_USERS/${id}`,{headers: this.httpHeaders}).pipe(
      map((res:any)=>{
        return res || {}
      }));
  }

  // Crear un nuevo usuario

  createUser(data:User): Observable<any>{
    return this.httpClient
    .post(this.REST_API_USERS,data,{headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }


  // Actualizar un usuario

  updateUser(id:any,data:any){
    return this.httpClient
    .put(`this.REST_API_USERS/${id}`,data,{headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
    
  }

  deleteUser(id:any){
    return this.httpClient
    .delete(`this.REST_API_USERS/${id}`,{headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  // -------------------------------------------- TICKETS --------------------------------------------

  // DEFINIR VARIABLE API TICKETS
  private REST_API_TICKETS: string = 'http://localhost:8000/api/tickets';


  // -------------------------------------------- EVENTS --------------------------------------------

  // DEFINIR VARIABLE API EVENTS
  private REST_API_EVENTS: string = 'http://localhost:8000/api/events';

  // Ver todos los eventos en el sistema
  getEvents(){
    return this.httpClient.get(this.REST_API_EVENTS,{headers: this.httpHeaders});
  }

  //Ver un único evento en específico
  getEventbyId(id:any){
    return this.httpClient.get(`this.REST_API_EVENTS/${id}`,{headers: this.httpHeaders})
    .pipe(
      map((res:any)=>{
        return res || {}
      }));
  }


}
