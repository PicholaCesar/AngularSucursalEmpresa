import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SucursalIndiComponent } from './componentes/sucursal-indi/sucursal-indi.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';

const routes: Routes = [
  {path: "empresas", component: EmpresasComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent },
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'sucursalindi', component:SucursalIndiComponent},
  {path: "graficas", component:GraficaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
