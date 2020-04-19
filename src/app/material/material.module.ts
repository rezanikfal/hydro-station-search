import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
