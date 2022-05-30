import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sucursal } from '../models/sucursale.model';
import { productoSucursalUnis } from '../models/sucursalUni.model';
import { venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalUniService {

  public productoSucursalUni: productoSucursalUnis

  public url:String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('content-Type','application/json')

  constructor(public _http: HttpClient) { }

  obtenerProducto(idSucursal, token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token )
    console.log(this.productoSucursalUni)

    return this._http.get(this.url +'/obtenerProductoSucur/'+ idSucursal,{headers: headersToken })

  }

  venta(modeloventa: venta, token): Observable<any>{

    let parametros = JSON.stringify(modeloventa)
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.post(this.url+'/vender', parametros,{headers: headersToken })
  }



}


