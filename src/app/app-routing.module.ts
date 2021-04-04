import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ManagerModule } from './manager/manager.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => AuthModule)
  },
  {
    path:'home',
    loadChildren: ()=> import('./manager/manager.module').then(m => ManagerModule)
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => ProductsModule)
  },
  {
    path:'**', redirectTo:'home',
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
