import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';
import { RegistroUsuarioModel } from 'src/app/models/registro-usuario';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  url: string = GeneralData.URL_REGISTRO;
  modelo: any = {};

  constructor(
    private http: HttpClient
  ) { }

  register(modelo: RegistroUsuarioModel): Observable<any> {
    return this.http.post(`${this.url}`, {

      //  nombre: modelo.username,
      //  apellido: modelo.lastname,
      //  cedula: modelo.identity,
      //  celular: modelo.mobile,
      //  email: modelo.email,
      //  evento: modelo.evento

      
       
       nombre: modelo.firstname,
       apellido: modelo.lastname,
       cedula: modelo.identity,
       celular: modelo.mobile,
       email: modelo.email,
       evento: modelo.evento

       
    });
    

  }


}
