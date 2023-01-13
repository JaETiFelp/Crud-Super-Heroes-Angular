import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from'@angular/material/form-field';
import { MatInputModule } from'@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';





@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule
  ]
  
})
export class MaterialModule { }
