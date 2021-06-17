import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostViewedRoutingModule } from './most-viewed-routing.module';
import { DialogImages, MostViewedComponent } from './most-viewed/most-viewed.component';
import { ContentCarousellllComponent, tocDialoog } from './content-carousellll/content-carousellll.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MostViewedComponent, ContentCarousellllComponent, DialogImages, tocDialoog],
  imports: [
    CommonModule,
    MostViewedRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
    
  ]
})
export class MostViewedModule { }
