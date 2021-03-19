import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';



const material_components = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material_components,
  ],
  exports:[
    ...material_components
  ]
})
export class MaterialModule { }
