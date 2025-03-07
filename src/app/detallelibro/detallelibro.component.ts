import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../libro';
import { LibroRestService } from '../libro-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallelibro',
  imports: [FormsModule],
  templateUrl: './detallelibro.component.html',
  styleUrl: './detallelibro.component.scss'
})
export class DetallelibroComponent {

  libro:Libro = {} as Libro;
   
  
   constructor(private libroRestService:LibroRestService, private route:ActivatedRoute) {
  
      libroRestService.buscarUno
   }

   ngOnInit (){

  console.log(this.route.snapshot.paramMap.get("isbn"));
  let isbn=this.route.snapshot.paramMap.get("isbn");
  if (isbn) {
    this.libroRestService.buscarUno(isbn).subscribe((datoslibro)=>{
      this.libro=datoslibro;
    })
  }

   }

  
  
}
