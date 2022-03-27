import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { RegistroUsuarioModel } from 'src/app/public/models/registro-usuario';
import { ModalRegistroComponent } from '../modals/modal-registro/modal-registro.component';


declare const crearAlert: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});


  constructor(
    private fb: FormBuilder
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
      email: ["", [Validators.required]],
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
      //let registro = new RegistroUsuarioModel();
      //registro.username = this.GetForm.username.value;


    }

  }

 

}
