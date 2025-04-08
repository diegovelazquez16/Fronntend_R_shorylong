import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:4040/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) { }

 
  crearPersona(persona: any): Observable<any> {
    return this.http.post(API_URL, persona);
  }


  obtenerPersonas(): Observable<any> {
    return this.http.get(API_URL);
  }


  contarGeneros(): Observable<any> {
    return this.http.get(`${API_URL}/conteo-genero`);
  }


  contarGenerosLongPolling(): Observable<any> {
    return this.http.get(`${API_URL}/conteo-genero-longpoll`);
  }
}
