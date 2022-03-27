import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { CrearRegistroComponent } from './registro/crear-registro/crear-registro.component';


@NgModule({
  declarations: [
    RegistroComponent,
    CrearRegistroComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
