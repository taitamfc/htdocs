import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { FormsModule }            from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FilesComponent } from './components/files.component';
import { FilesRoutingModule }     from './files-routing.module';
import { ElementsModule }  from './../elements/elements.module';

@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    CodemirrorModule,
    ElementsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ElementsModule,
    //HighlightDirective
  ]
})
export class FilesModule { }
