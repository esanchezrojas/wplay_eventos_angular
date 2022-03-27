import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  url:string = GeneralData.URL_REGISTRO;

  constructor(
    private http: HttpClient
  ) { }

register(modelo:RegistroUsuarioModel): Observable<any>{
  return this.http.post(`${this.url}/registro-eventos`);
}


}
