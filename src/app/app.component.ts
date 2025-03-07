import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetallelibroComponent } from './detallelibro/detallelibro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListalibrosComponent, FormularioLibroComponent,DetallelibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
