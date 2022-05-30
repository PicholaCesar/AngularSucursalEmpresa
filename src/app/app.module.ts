import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';
import { MenuvarComponent } from './componentes/menuvar/menuvar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SucursalIndiComponent } from './componentes/sucursal-indi/sucursal-indi.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    SucursalesComponent,
    MenuvarComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ProductosComponent,
    SucursalIndiComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
    
    

 


 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
