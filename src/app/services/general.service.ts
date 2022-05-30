import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('content-Type', 'application/json')
  constructor(public _http: HttpClient) { }

  obtenerEmpresa(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerempreas', { headers: headersToken });
  }

  agregarEmpres(modeloEmpresa: Empresa): Observable<any> {

    let parametros = JSON.stringify(modeloEmpresa)

    return this._http.post(this.url+'/agregarempresa'+ parametros,{ headers: this.headersVariable})
  }

  eliminarEmpresa(idEmpresa, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.delete(this.url+'/eliminarEmpresa/'+ idEmpresa,{headers: headersToken})
  }
}
