import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule,
        MatAutocompleteModule ,  MatTabsModule
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule,
        MatAutocompleteModule ,  MatTabsModule
    ]
})

export class MaterialModule { }
