import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetallelibroComponent } from './detallelibro/detallelibro.component';
import { ListaejemplarComponent } from './listaejemplar/listaejemplar.component';
import { FormularioEjemplarComponent } from './formulario-ejemplar/formulario-ejemplar.component';
import { ResponsiveComponent } from './responsive/responsive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListalibrosComponent, FormularioLibroComponent,DetallelibroComponent, ListaejemplarComponent, FormularioEjemplarComponent, ResponsiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
