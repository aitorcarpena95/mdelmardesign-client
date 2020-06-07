import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatDividerModule, MatListModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,

    ],

    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,

]
})


export class MaterialModule {}
