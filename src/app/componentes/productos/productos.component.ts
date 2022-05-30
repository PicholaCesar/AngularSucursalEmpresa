import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto.model';
import { sucursal } from 'src/app/models/sucursale.model';
import { productoSucursalUnis } from 'src/app/models/sucursalUni.model';

import { EmpresaService } from 'src/app/services/empresa.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [EmpresaService, ProductosService, SucursalesService]
})
export class ProductosComponent implements OnInit {

  public modeloProducto: producto
  public modeloProductoPost: producto
  public modeloProductoPut: producto
  public modeloSucursal: sucursal
  public modelproductoSucursal: productoSucursalUnis

  public token

  constructor(public _empresaService: EmpresaService, public _productoService: ProductosService, public _sucursalesService: SucursalesService) {
    this.modelproductoSucursal = new productoSucursalUnis('','','',0,0)
    this.modeloProductoPost = new producto('','','',0,0)
    this.modeloProductoPut= new producto('','','',0,0)
 


    this.token = this._empresaService.getToken()
   }

  ngOnInit(): void {
    this.getProducto()
    this.getSucursales()
  }


  getProducto(){
    this._productoService.obtenerProducto(this.token).subscribe(
      (response)=>{
        console.log(response.producto)
        this.modeloProducto = response.producto
        
      },(error)=>{
        console.log(<any>error)
      })
  }

  postProducto(){
    this._productoService.agregarProducto(this.modeloProductoPost, this.token).subscribe(
      (response)=>{
        console.log(response)
        this.getProducto();
        this.modeloProductoPost.nombreProducto= ''
        this.modeloProductoPost.nombreProveedor= ''
        this.modeloProductoPost.cantidad=0
        this.modeloProductoPost.precio=0
          Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Agregado Corractamente',
          showConfirmButton: false,
          timer: 1500
        })
      },(error)=>{
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al agregar Producto',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }


  getProductoID(idProducto){
    this._productoService.obtenerProductoID(idProducto).subscribe(
      (response)=>{
      this.modeloProductoPut = response.producto
      },(error)=>{
       console.log(<any>error)
      })
  }

  putProductos(){
    this._productoService.editarProducto(this.modeloProductoPut, this.token).subscribe(
      (Response)=>{
       this.getProducto()
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Actualizado Corractamente',
        showConfirmButton: false,
        timer: 1500
      })
      },
      (error)=>{
     console.log(<any>error)
     Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Erro al actualizar Producto',
      showConfirmButton: false,
      timer: 1500
    })
      })
  }


  deleteProducto(idProducto){
    this._productoService.eliminarProducto(this.token, idProducto).subscribe(
      (response)=>{
      this.getProducto()
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto eliminado Corractamente',
        showConfirmButton: false,
        timer: 1500
      })
      },(error)=>{
      console.log(<any>error)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'error al eliminar Producto',
        showConfirmButton: false,
        timer: 1500
      })
      })
  }

  getSucursales(){
    this._sucursalesService.obtenerSucursal(this.token).subscribe(
    (response)=>{
        
        this.modeloSucursal = response.sucursales
    },(error)=>{
      console.log(<any>error)
    })
  }

  posEnviarProducto(){

    this._productoService.enviarProducto(this.modelproductoSucursal, this.token).subscribe(
      (response)=>{
        this.getProducto()
        this.modelproductoSucursal._id = ""
        this.modelproductoSucursal.nombreSucursal = ""
        this.modelproductoSucursal.nombreProducto=''
        this.modelproductoSucursal.cantidadVentas =0
        this.modelproductoSucursal.cantidad=0
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Envidado Corractamente',
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
