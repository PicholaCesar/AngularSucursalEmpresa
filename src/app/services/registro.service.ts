import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }



  agregarEmpresa(modeloEmpresa: Empresa) : Observable<any> {
    let parametros = JSON.stringify(modeloEmpresa);


    return this._http.post(this.url+'/agregarempresa', parametros,{headers: this.headersVariable})
  }




}
