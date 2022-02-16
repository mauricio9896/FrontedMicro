import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private get_url1 = "http://localhost:8080/getDatos";
  private get_url = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  public getDatos(): Observable<any>{
    return this.http.get(this.get_url);
  }
  public info(mensaje: String){
    alert(mensaje);
  }
}
