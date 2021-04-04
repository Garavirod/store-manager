import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsviewComponent } from './views/productsview/productsview.component';

const routes: Routes = [
  {path:'', component:ProductsviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
