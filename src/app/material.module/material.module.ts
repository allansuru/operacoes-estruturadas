import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {

    MatTabsModule,

} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  exports: [
    MatTabsModule,

  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MaterialModule { }
