import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';

/**
 * Grid Module
 *
 * Provides structure for layouts on webpage.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent,
  ]
})
export class GridModule { }
