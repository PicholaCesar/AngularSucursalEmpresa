import { Component, OnInit , Input} from '@angular/core';
import { SucursalUniService } from 'src/app/services/sucursal-uni.service';

@Component({
  selector: 'app-sucursal-indi',
  templateUrl: './sucursal-indi.component.html',
  styleUrls: ['./sucursal-indi.component.scss'],
  providers: [SucursalUniService]
})
export class SucursalIndiComponent implements OnInit {

  public productoSucursal


  constructor(public _sucursalesUni: SucursalUniService) { 

  

   this.productoSucursal = _sucursalesUni.productoSucursalUni

  }



  ngOnInit(): void {
  }





}
