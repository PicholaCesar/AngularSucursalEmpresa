import { Component, OnInit } from '@angular/core';
import { sucursal } from 'src/app/models/sucursale.model';
import { productoSucursalUnis } from 'src/app/models/sucursalUni.model';
import { venta } from 'src/app/models/venta.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { SucursalUniService } from 'src/app/services/sucursal-uni.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [EmpresaService, SucursalesService,SucursalUniService]
})

export class SucursalesComponent implements OnInit {

  public sucursalesmodelget: sucursal
  public sucursalesmodelpost:sucursal
  public sucursalesmodelput: sucursal
  public prodSucuuni: productoSucursalUnis
  public modelventa: venta
  
 


  public token

  constructor(public _empresaService: EmpresaService, public _sucursalesService: SucursalesService, public _sucursaleUni:SucursalUniService ) {
 
        this.sucursalesmodelpost = new sucursal('','','')
        this.sucursalesmodelput = new sucursal('','','')
        this.modelventa = new venta('','',0)

    this.token = this._empresaService.getToken();
   }

  ngOnInit(): void {
    this.getSucursales()
  }

  getSucursales(){
    this._sucursalesService.obtenerSucursal(this.token).subscribe(
    (response)=>{
        this.getSucursales()
        this.sucursalesmodelget = response.sucursales
    },(error)=>{
      console.log(<any>error)
    })
  }

  postSucursales(){
    this._sucursalesService.agrgarSucursal(this.sucursalesmodelpost, this.token).subscribe(
      (response)=>{
        this.getSucursales();
        this.sucursalesmodelpost.nombreSucursal = ''
        this.sucursalesmodelpost.direccion= ''
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sucural agregada  Corractamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
    (error)=>{
      console.log(<any>error)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'error al agregar Sucursal',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  getSucursalUniid(idSucursal){
     this._sucursaleUni.obtenerProducto(idSucursal, this.token).subscribe((response)=>{
     this.prodSucuuni = response.sucursales
     this._sucursaleUni.productoSucursalUni = response.sucursales
     console.log(this._sucursaleUni.productoSucursalUni)

     },(error)=>{

     })
  }

  getSucursalesID(idSucursal){

    this._sucursalesService.obtenerSucursalid(idSucursal).subscribe(
      (response)=>{
        console.log(response.Sucursal)
        this.sucursalesmodelput = response.Sucursal;
        
      },(error)=>{

      })
  }


   putSucursaler(){
    this._sucursalesService.editarSucursales(this.sucursalesmodelput).subscribe(
      (response)=>{
        this.getSucursales();
        this.sucursalesmodelput.nombreSucursal=''
        this.sucursalesmodelput.direccion=''  
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empresa actualizada  Corractamente',
          showConfirmButton: false,
          timer: 1500
        })
      },(error)=>{
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'error al actulizar sucursal',
          showConfirmButton: false,
          timer: 1500
        })
      })
  } 
 

  deleteSucursal(id){
        this._sucursalesService.eliminarSucursale(id, this.token).subscribe(
        (response)=>{
          console.log(response)
          this.getSucursales()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sucursal eliminada Corractamente',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error)=>{
         console.log(<any>error)
         Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'error al eliminar',
          showConfirmButton: false,
          timer: 1500
        })
        })
  }

  venders(){
    this._sucursaleUni.venta(this.modelventa, this.token).subscribe((response)=>{
      console.log(response)
      this.modelventa.nombreProducto = ""
      this.modelventa.cantidad = 0
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Venta correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      
    },(error)=>{
      console.log(<any>error)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'La cantidad no esta en Stock',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
