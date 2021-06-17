import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingArticlesRoutingModule } from './trending-articles-routing.module';
import { DialogImages, TrendingArticlesComponent } from './trending-articles/trending-articles.component';
import { ContentCarousellllComponent, tocDialoog } from './content-carousellll/content-carousellll.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrendingArticlesComponent, ContentCarousellllComponent, DialogImages, tocDialoog],
  imports: [
    CommonModule,
    TrendingArticlesRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
    
  ]
})
export class TrendingArticlesModule { }
