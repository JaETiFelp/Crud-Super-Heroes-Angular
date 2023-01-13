import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../heroe-type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) {  
  }
  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }
  getHeroeById(id: string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  getSuggestion(termino: string): Observable<Heroe[]>{//sugerir
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
  addHeroe(heroe :Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe);
  }
  putHeroe(heroe :Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
  }
  deleteHeroe(id :string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
  
}
