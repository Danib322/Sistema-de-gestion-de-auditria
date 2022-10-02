import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators, Form } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuditoriasAPIService } from '../auditorias-api.service';



@Component({
  selector: 'app-agregar-editar-usuario',
  templateUrl: './agregar-editar-usuario.component.html',
  styleUrls: ['./agregar-editar-usuario.component.css']
})
export class AgregarEditarUsuarioComponent implements OnInit {

  form:FormGroup=this.formbuilder.group(
    {
      nombreUsuario: ['', Validators.required],
      cedula: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      claveUsuario: ['', Validators.required]
    }
  )

  constructor(private formbuilder:FormBuilder,  private service: AuditoriasAPIService, 
    toastr:ToastrService) { 
    
  }

  ngOnInit(): void {

  }

  GuardarUsuario(){
    const usuario= {
      nombreUsuario: this.form.get('nombreUsuario')!.value,
      cedula:this.form.get('cedula')!.value,
      tipoUsuario:this.form.get('tipoUsuario')!.value,
      claveUsuario:this.form.get('claveUsuario')!.value
    }
  
    this.service.addUsuario(usuario).subscribe( data =>
      {
      
       this.form.reset();
       
       
      })
  }

}
