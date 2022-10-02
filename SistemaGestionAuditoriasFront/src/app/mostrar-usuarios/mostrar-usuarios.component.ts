import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuditoriasAPIService } from 'src/app/auditorias-api.service';
@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  UsuariosList$!:Observable<any[]>;

  constructor(private service: AuditoriasAPIService ) { }

  ngOnInit(): void {
    this.UsuariosList$=this.service.getUsuariosList();
  }

}
