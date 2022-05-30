import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  public url: string = 'http://localhost:3000/api';
  public headersvariable = new HttpHeaders().set('content-type','application/json')
  public token;
  public identidada

  constructor(public _http: HttpClient) { }

    login(empresa, obtenerToken = null): Observable<any>{
      if(obtenerToken != null){
        empresa.obtenerToken = obtenerToken;
      }

      let params = JSON.stringify(empresa);

      return this._http.post(this.url +'/login', params,{headers: this.headersvariable})
      
    }


  getToken(){
    var token2 = localStorage.getItem('token')
    if(token2 != undefined){
        this.token = token2;
    }else{
      this.token ='';
    }

    return this.token;
  }

  getIdentidad(){
    var identidada2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidada2 != undefined){
      this.identidada = identidada2
    }else{
      this.identidada = null
    }

    return this.identidada
  }

  
}
