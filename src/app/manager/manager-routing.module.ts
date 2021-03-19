import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductosComponent } from './views/productos/productos.component';

const routes: Routes = [
  {path:'productos', component:ProductosComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
