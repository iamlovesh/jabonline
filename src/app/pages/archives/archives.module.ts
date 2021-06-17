import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivesRoutingModule } from './archives-routing.module';
import { ArchivesComponent } from './archives.component';
import { MaterialModule } from 'src/app/material.module';
import { ExportPipeModule } from 'src/app/export-pipe.module';


@NgModule({
  declarations: [
    ArchivesComponent,
  ],
  imports: [
    CommonModule,
    ArchivesRoutingModule,
    MaterialModule,
    ExportPipeModule
  ]
})
export class ArchivesModule { }
