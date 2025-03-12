import { Component } from '@angular/core';
import { Ejemplar } from '../ejemplar';
import { EjemplarRestService } from '../ejemplar-rest.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplar',
  imports: [FormsModule],
  templateUrl: './formulario-ejemplar.component.html',
  styleUrl: './formulario-ejemplar.component.scss'
})
export class FormularioEjemplarComponent {

  
  ejemplar:Ejemplar = {} as Ejemplar;
   // {} SIGNIFICA OBJETO VACIO
  
   constructor(private ejemplarRestService:EjemplarRestService, private router:Router) {
  
   }
    public insertar (){
      
  
      this.ejemplarRestService.insertar(this.ejemplar).subscribe((datos)=>{
        console.log("insertado");
        this.router.navigate(["/listaejemplar"]);
      })
      
    }
  
}
