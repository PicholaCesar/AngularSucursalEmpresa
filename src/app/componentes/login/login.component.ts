import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [EmpresaService]
})
export class LoginComponent implements OnInit {

  public empresaModel: Empresa

  constructor(public _empresaService: EmpresaService) {

    this.empresaModel = new Empresa('','','','','','')
   }

  ngOnInit(): void {
  }

  getToken(){
    this._empresaService.login(this.empresaModel,"true").subscribe(
      (response)=>{
        console.log(response.token)
        localStorage.setItem('token', response.token)
      },(error)=>{
       console.log(<any>error)
      }
    )
  }

  login(){
    this._empresaService.login(this.empresaModel).subscribe((response)=>{
       console.log(response)
       localStorage.setItem('identidad', JSON.stringify(response.usuario))
       this.getToken();

       this.empresaModel.nombreEmpresa = '',
       this.empresaModel.tipoEmpresa = '',
       this.empresaModel.email = '',
       this.empresaModel.password = ''
    },
    (error)=>{

    })
  }
}
