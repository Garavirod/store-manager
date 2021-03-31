import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ProductosComponent } from './views/productos/productos.component';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from '../modules/material/material.module';
import { DailysalesComponent } from './components/dailysales/dailysales.component';
import { MonthlysalesComponent } from './components/monthlysales/monthlysales.component';
import { AnnualsalesComponent } from './components/annualsales/annualsales.component';



@NgModule({
  declarations: [ProductosComponent, HomeComponent, DailysalesComponent, MonthlysalesComponent, AnnualsalesComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
  ]
})
export class ManagerModule { }
