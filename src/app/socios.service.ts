import { Injectable } from '@angular/core';
import { Socio } from './socio';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  listaSocios: Socio[]= [];

  constructor() {
    this.listaSocios.push(new Socio("Pepe", "Perez", 20));
    this.listaSocios.push(new Socio("Manolo", "Saurio", 49));
    this.listaSocios.push(new Socio("Zacarias", "Satrustegui", 68));
 }

 public buscarTodos () :Socio[]{
  return this.listaSocios;
 }
}
