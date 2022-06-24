import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialsModule } from '../app-materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const commonModules = [
  CommonModule,
  HttpClientModule,
  AppMaterialsModule,
  ReactiveFormsModule,
  RouterModule
]

@NgModule({
  imports: [commonModules],
  exports: [commonModules]
})
export class SharedModule { }
