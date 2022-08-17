import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { DetailsComponente } from './pages/equipo/details/details.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DetailsComponent } from './pages/servicios/details/details.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipoComponent,
    DetailsComponent,
    ServiciosComponent,
    DetailsComponente,
    ClientesComponent,
    NovedadesComponent,
    ContactoComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
