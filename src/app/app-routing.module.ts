import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerModule } from './manager/manager.module';
import { CredentialsComponent } from './views/credentials/credentials.component';

const routes: Routes = [
  {
    path:'manager',
    loadChildren: ()=> import('./manager/manager.module').then(m => ManagerModule)
  },
  {path:'', component:CredentialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
