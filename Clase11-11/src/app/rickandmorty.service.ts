import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from './interfaces/rickandmorty.interfaces';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private url:string="https://rickandmortyapi.com/api";

  constructor(private readonly http:HttpClient) { }

  obtenerunPersonaje(id:number):Observable<Personaje>{
    return this.http.get<Personaje>(`${this.url}/character/${id}`);
  
  };

  
}
