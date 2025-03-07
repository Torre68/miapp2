import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroRestService {

  constructor(private httpClient:HttpClient) {

   }
  
  public buscarTodos (): Observable<Libro[]> {

    return this.httpClient.get<Libro[]>("http://localhost:8080/webapi/libros");
  }

  public insertar(libro:Libro): Observable<Libro> {

    return this.httpClient.post<Libro>("http://localhost:8080/webapi/libros",libro);

  }
}
