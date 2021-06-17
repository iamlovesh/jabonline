import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastIssueRoutingModule } from './past-issue-routing.module';
import { PastIssueComponent, DialogImages } from './past-issue.component';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { MaterialModule } from 'src/app/material.module';
import { ContentCarousellComponent, tocDialog } from './content-carousell/content-carousell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PastIssueComponent,DialogImages, ContentCarousellComponent, tocDialog],
  imports: [
    CommonModule,
    PastIssueRoutingModule,
    ExportPipeModule,
    MaterialModule,
    FormsModule,
  ]
})
export class PastIssueModule { }
