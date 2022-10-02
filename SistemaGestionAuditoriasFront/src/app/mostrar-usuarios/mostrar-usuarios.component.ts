import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuditoriasAPIService } from 'src/app/auditorias-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  UsuariosList$!:Observable<any[]>;

  constructor(private service: AuditoriasAPIService , private location:Location, private router: Router) { }

  ngOnInit(): void {
    this.UsuariosList$=this.service.getUsuariosList();
  }

  Ir(nombre:string):void
  {
    this.router.navigate([`$(nombre)`]);
  }

}
