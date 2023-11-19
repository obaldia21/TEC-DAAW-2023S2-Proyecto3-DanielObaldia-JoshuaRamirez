import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { LoginComponent } from './components/login/login.component';
import { ShowEventsComponent } from './pages/show-events/show-events.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Importar HttpClientModule para hacer peticiones a nuestro backend
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { GetEventComponent } from './pages/get-event/get-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    LoginComponent,
    ShowEventsComponent,
    GenericFormComponent,
    HomeComponent,
    CreateUserComponent,
    EditUserComponent,
    GetEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
