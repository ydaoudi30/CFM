import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/Button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
];


@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
