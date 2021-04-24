import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsviewComponent } from './views/productsview/productsview.component';
import { MaterialModule } from '../modules/material/material.module';


@NgModule({
  declarations: [ProductsviewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
  ]
})
export class ProductsModule { }
