import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private httpClient: HttpClient) { }

  //Recebimento da API ViaCEP por Json
  buscar(cep:string){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
