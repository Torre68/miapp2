import { Component } from '@angular/core';
import { Socio } from '../socio';

@Component({
  selector: 'app-listasocios',
  imports: [],
  templateUrl: './listasocios.component.html',
  styleUrl: './listasocios.component.scss'
})
export class ListasociosComponent {

  listaSocios:Socio[]=[];

  constructor(private socioRestService:SocioRESTService) {

    socioRestService.buscarTodos().subscribe((datos)=> )
  }

}
