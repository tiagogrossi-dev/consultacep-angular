import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private readonly apiUrl = 'https://viacep.com.br/ws';
  http: any;

  constructor(private httpClient: HttpClient) { }
  
  getEndereco(cep: string): Observable<any> {
    const url = `${this.apiUrl}/${cep}/json/`;

    return this.httpClient.get(url);
  }
}
