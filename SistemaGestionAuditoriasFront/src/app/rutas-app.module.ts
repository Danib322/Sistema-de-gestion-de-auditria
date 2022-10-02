import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario/agregar-editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const rutas:Routes=[
    { path: '', component:UsuariosComponent},
    {path:'agregar-editar-usuario', component:AgregarEditarUsuarioComponent},
    
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:
  [
    RouterModule
  ]
})
export class RutasAppModule { }
