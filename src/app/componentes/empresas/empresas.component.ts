import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { GeneralService } from 'src/app/services/general.service';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [GeneralService,EmpresaService, RegistroService]


})


export class EmpresasComponent implements OnInit {

  public EmpresasModel: Empresa
  public EmpresaModelopost: Empresa
  public token

  constructor(public _general: GeneralService, public _empresaService: EmpresaService, public _regEmpre :RegistroService) {

    this.EmpresaModelopost = new Empresa('','','','','','')
   
    this.token = this._empresaService.getToken()
  }

  ngOnInit(): void {
    this.obtnerEmpresas()

  }

  obtnerEmpresas(){
    this._general.obtenerEmpresa(this.token).subscribe((response)=>{
   this.EmpresasModel = response.empresas
   console.log(response.empresas)
    },(error)=>{

    })
  }

  agregarEmpresa(){
    this._regEmpre.agregarEmpresa(this.EmpresaModelopost).subscribe((response)=>{
     console.log(response)
     this.obtnerEmpresas();
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Empresa Agragada Corractamente',
      showConfirmButton: false,
      timer: 1500
    })
    },(err)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'error al agragar producto',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  delteEmpresa(idempresa){
    this._general.eliminarEmpresa(idempresa, this.token).subscribe((response)=>{
     console.log(response)
     this.obtnerEmpresas()
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Empresa Eliminada Corractamente',
      showConfirmButton: false,
      timer: 1500
    })
    },(error)=>{
console.log(<any>error)
this.obtnerEmpresas()
Swal.fire({
 position: 'top-end',
 icon: 'error',
 title: 'Empresa Eliminada error',
 showConfirmButton: false,
 timer: 1500
})
    })
  }




}
