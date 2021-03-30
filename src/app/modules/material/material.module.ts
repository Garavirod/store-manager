import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

const material_components = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,  
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
