import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes events
import { ShowEventsComponent } from './pages/show-events/show-events.component';

// Componentes user
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [
   // Rutas de Events
   {path: '', component: ShowEventsComponent},
  

   // Rutas de User
   {path: 'createUser', component: CreateUserComponent},
   {path: 'editUser/:id', component: EditUserComponent},
 
   // General
   {path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
