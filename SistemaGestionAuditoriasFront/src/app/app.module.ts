import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MostrarUsuariosComponent } from './mostrar-usuarios/mostrar-usuarios.component';
import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario/agregar-editar-usuario.component';
import{AuditoriasAPIService} from './auditorias-api.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MostrarUsuariosComponent,
    AgregarEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuditoriasAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
