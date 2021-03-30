import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ProductosComponent } from './views/productos/productos.component';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from '../modules/material/material.module';


@NgModule({
  declarations: [ProductosComponent, HomeComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
  ]
})
export class ManagerModule { }
