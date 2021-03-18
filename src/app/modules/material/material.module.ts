import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'

const material_componentes = [
  MatToolbarModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material_componentes,
  ],
  exports:[
    ...material_componentes
  ]
})
export class MaterialModule { }
