import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components imports
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule,} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRippleModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRippleModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ]
})
export class MaterialModuleModule { }
