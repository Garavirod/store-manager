import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';

const material_components = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  FlexLayoutModule,  
  MatIconModule,
  MatMenuModule,
  MatChipsModule,
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
