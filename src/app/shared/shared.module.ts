import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@app/shared/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [],
  exports: [
    AngularMaterialModule
  ]
})
export class SharedModule { }
