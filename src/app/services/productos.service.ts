import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../models/producto.model';
import { productoSucursalUnis } from '../models/sucursalUni.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('content-Type', 'application/json')

  constructor(public _http: HttpClient) { }

  obtenerProducto(token): Observable<any>{
   
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url +'/obtenerproducto',{ headers: headersToken })

  }

  agregarProducto(modeloproducto: producto, token): Observable<any>{
    let parametros = JSON.stringify(modeloproducto)
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.post(this.url+'/agregarproducto',parametros,{ headers: headersToken })
  }

  obtenerProductoID(idProducto): Observable<any>{

    return this._http.get(this.url+'/obteberproduc/'+idProducto,{ headers: this.headersVariable})
  }

  editarProducto(modeloproducto: producto, token): Observable<any> {
    
    let parametros = JSON.stringify(modeloproducto)
    let headersToken = this.headersVariable.set('Authorization', token )
    
    return this._http.put(this.url+'/editarproducto/'+ modeloproducto._id  ,parametros,{ headers: headersToken})
  }

  eliminarProducto(token, idProducto): Observable<any>{
    
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.delete(this.url+'/eliminarproducto/'+idProducto,{headers: headersToken})
  }

  obtenerSucursal(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenersucursales', { headers: headersToken });
  }

  enviarProducto(modeloSucursalPro: productoSucursalUnis, token): Observable<any>{
    let parametros = JSON.stringify(modeloSucursalPro);
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.post(this.url+'/enviarproducto', parametros,{headers: headersToken })

  }

  
}
