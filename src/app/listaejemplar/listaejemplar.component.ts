import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ejemplar } from '../ejemplar';
import { EjemplarRestService } from '../ejemplar-rest.service';

@Component({
  selector: 'app-listaejemplar',
  imports: [RouterLink],
  templateUrl: './listaejemplar.component.html',
  styleUrl: './listaejemplar.component.scss'
})
export class ListaejemplarComponent {

  listaEjemplar: Ejemplar[]=[];
    constructor (private ejemplarRestService:EjemplarRestService){
  
      ejemplarRestService.buscarTodos().subscribe((datos)=>{
        this.listaEjemplar=datos;
      })
    }
    public borrar (isbn:string, numero:number){
      
  this.ejemplarRestService.borrar(isbn, numero).subscribe(()=>{
    this.ejemplarRestService.buscarTodos().subscribe((datos)=>{

      this.listaEjemplar=datos;2
    })
  });
    }

}
