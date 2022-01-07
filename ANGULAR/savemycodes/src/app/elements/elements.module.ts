import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { ElementsSidebarComponent } from './sidebar/sidebar.component';
import { ElementsHeaderComponent } from './header/header.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    ElementsSidebarComponent,
    ElementsHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ElementsSidebarComponent,
    ElementsHeaderComponent
  ]
})
export class ElementsModule { }
