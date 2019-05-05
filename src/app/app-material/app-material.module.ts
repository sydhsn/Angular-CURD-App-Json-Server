import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import {
  MatSelectModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDialogModule, 
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule, 
  MatTableModule,
  MatProgressSpinnerModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule, 
  MatTableModule,
  MatProgressSpinnerModule
  ]
})
export class AppMaterialModule {}
