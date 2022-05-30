import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sucursal } from '../models/sucursale.model';

@Injectable({
  providedIn: 'root'
})

export class SucursalesService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerSucursal(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenersucursales', { headers: headersToken });
  }

  agrgarSucursal(modeloSucursal: sucursal, token): Observable<any> {
     let parametros = JSON.stringify(modeloSucursal);
     let headersToken = this.headersVariable.set('Authorization', token)
    
    return this._http.post(this.url +'/agrgarsucursal', parametros,{headers: headersToken})
  }

  eliminarSucursale(idSucursal, token){
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.delete(this.url+'/eliminarsucursal/'+ idSucursal,{ headers: headersToken })
  }

  obtenerSucursalid(idSucursal): Observable<any>{
    
    return this._http.get(this.url+'/obtenersucursalid/'+ idSucursal,{ headers: this.headersVariable})

  }

 editarSucursales(modeloSucursal: sucursal): Observable<any>{
    let parametros = JSON.stringify(modeloSucursal);


    return this._http.put(this.url +'/editarsucursal/'+ modeloSucursal._id, parametros,{headers: this.headersVariable})
  }   

}
