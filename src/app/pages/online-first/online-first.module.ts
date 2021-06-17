import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineFirstRoutingModule } from './online-first-routing.module';
import { DialogImages, OnlineFirstComponent } from './online-first/online-first.component';
import { ContentCarousellllComponent, tocDialoog } from './content-carousellll/content-carousellll.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OnlineFirstComponent, ContentCarousellllComponent, DialogImages, tocDialoog],
  imports: [
    CommonModule,
    OnlineFirstRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
    
  ]
})
export class OnlineFirstModule { }
