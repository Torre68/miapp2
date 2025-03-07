import { Routes } from '@angular/router';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetallelibroComponent } from './detallelibro/detallelibro.component';

export const routes: Routes = [
{path:"listalibros", component:ListalibrosComponent},
{path: "formulariolibros", component: FormularioLibroComponent},
{path:"detallelibro/:isbn", component: DetallelibroComponent},
{path: "", component:ListalibrosComponent}



];
