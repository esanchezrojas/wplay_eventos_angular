import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { RegistroUsuarioModel } from 'src/app/models/registro-usuario';
import { ModalRegistroComponent } from '../modals/modal-registro/modal-registro.component';
import {RegisterUserService} from 'src/app/services/register-user.service';


declare const crearAlert: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  data:any = {};


  constructor(
    private fb: FormBuilder,
    private registerService: RegisterUserService
    )
    {}
   

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      identity: ["",[Validators.required]],
      username: ["",[Validators.required,]],
      lastname: ["",[Validators.required]],
      email: ["", [Validators.required,Validators.email]],
      mobile: ["",[Validators.required,Validators.minLength(GeneralData.MOVILE_MIN_LENGTH)]]

    });
  }

  get GetForm(){
    return this.form.controls;
  }

  registro(){

    if(this.form.invalid){
      alert(GeneralData.MESSAGE_INVALID)
      //crearAlert(GeneralData.MESSAGE_INVALID);
    }else{
      alert(GeneralData.MESSAGE_VALID)
      //crearAlert(GeneralData.MESSAGE_VALID);
      // let register = new RegistroUsuarioModel();
      // register.identity = this.GetForm.lastname.value;
      // register.username = this.data.username;
      // register.lastname = this.data.lastname;
      // register.email = this.data.email;
      // register.mobile = '5657686886';
      // register.evento = 'Eliminatorias Catar';
    }

  }

  enviar(form:any){
      this.data = form;

      let register = new RegistroUsuarioModel();
      register.identity = form.identity;
      register.firstname = form.username;
      register.lastname = form.lastname;
      register.email = form.email;
      register.mobile = form.mobile;
      register.evento = 'Eliminatorias Catar';

      console.log(JSON.stringify(register)+' este es el registro')

      this.registerService.register(register).subscribe({
        next: (data:any) => {
          alert('se ejecuto correctamente')
          console.log(JSON.stringify(data.lastname)+ ' este es el nombre')
          alert(JSON.stringify(data));
        },
        error:(error:any) =>{
          alert(error+GeneralData.ERROR_GENERAL_MESSAGE);
        }
      });
      
     // register.username = this.GetForm.username.value;
     // alert(register.username)
}

 

}
