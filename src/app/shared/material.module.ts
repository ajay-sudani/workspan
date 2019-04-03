import { NgModule } from '@angular/core';
import {
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
} from '@angular/material';

@NgModule({
    declarations: [
        MatCard,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
    ],
    exports: [
        MatCard,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
    ],
    providers: [],
})

export class MaterialModule { }
