import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {

  public empresaModel: Empresa

  constructor(public _registroService: RegistroService) {
     
    this.empresaModel = new Empresa('','','','','','');

   }

  ngOnInit(): void {
  }

  agregarEmpresa(){

    this._registroService.agregarEmpresa(this.empresaModel).subscribe(
    (response)=>{
      console.log(response)
      this.empresaModel.nombreEmpresa = '',
      this.empresaModel.tipoEmpresa = '',
      this.empresaModel.email = '',
      this.empresaModel.password = ''
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Empresa Agregada  Corractamente',
        showConfirmButton: false,
        timer: 1500
      })
    },(error)=>{
      console.log(<any>error)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El correo ya existe',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
