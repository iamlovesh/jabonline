import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeywordsRoutingModule } from './keywords-routing.module';
import { DialogImages, KeywordsComponent } from './keywords.component';
import { FormsModule } from '@angular/forms';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { ContentCarousellllComponent, tocDialoog } from './content-carousellll/content-carousellll.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [KeywordsComponent, ContentCarousellllComponent,DialogImages, tocDialoog],
  imports: [
    CommonModule,
    KeywordsRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
  ]
})
export class KeywordsModule { }
