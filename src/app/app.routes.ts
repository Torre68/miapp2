import { Routes } from '@angular/router';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetallelibroComponent } from './detallelibro/detallelibro.component';
import { ListaejemplarComponent } from './listaejemplar/listaejemplar.component';
import { FormularioEjemplarComponent } from './formulario-ejemplar/formulario-ejemplar.component';
import { ResponsiveComponent } from './responsive/responsive.component';

export const routes: Routes = [
{path:"listalibros", component:ListalibrosComponent},
{path: "formulariolibros", component: FormularioLibroComponent},
{path:"detallelibro/:isbn", component: DetallelibroComponent},
{path:"listaejemplar", component:ListaejemplarComponent},
{path:"formularioejemplar", component:FormularioEjemplarComponent},
{path: "", component:ResponsiveComponent}



];
