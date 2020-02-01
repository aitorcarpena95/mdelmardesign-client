import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatListModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';



@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,

    ],

    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
]
})


export class MaterialModule {}