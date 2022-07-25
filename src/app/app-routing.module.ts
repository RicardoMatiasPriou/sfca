import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DetailsComponente } from './pages/equipo/details/details.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { DetailsComponent } from './pages/servicios/details/details.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:'', pathMatch: 'full' , component:HomeComponent},
  {path:'servicios',component: ServiciosComponent},
  {path:'servicios/:id',component: DetailsComponent},
  {path:'equipo',component: EquipoComponent},
  {path:'equipo/:id',component: DetailsComponente},
  {path:'clientes',component: ClientesComponent},
  {path:'novedades',component: NovedadesComponent},
  {path:'contactenos',component: ContactoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
