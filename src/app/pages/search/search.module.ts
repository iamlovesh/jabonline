import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { DialogImages, SearchComponent } from './search/search.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { ContentCarousellllComponent, tocDialoog } from './content-carousellll/content-carousellll.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent, ContentCarousellllComponent,DialogImages, tocDialoog],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
  ]
})
export class SearchModule { }
