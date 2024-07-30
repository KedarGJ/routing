import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const matModArr=[
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModArr
  ],
  exports:[
    ...matModArr
  ]
})
export class MaterialModule { }
