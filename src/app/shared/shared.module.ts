import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [],
    imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ]
})
export class SharedModule {
}
