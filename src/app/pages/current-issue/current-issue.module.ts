import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentIssueRoutingModule } from './current-issue-routing.module';
import { CurrentIssueComponent, DialogImages } from './current-issue.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';
import { ContentCarouselllComponent, tocDialoog } from './content-carouselll/content-carouselll.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrentIssueComponent,
    DialogImages,
    ContentCarouselllComponent,
    tocDialoog
  ],
  imports: [
    CommonModule,
    CurrentIssueRoutingModule,
    MaterialModule,
    ExportPipeModule,
    FormsModule,
  ]
})
export class CurrentIssueModule { }
