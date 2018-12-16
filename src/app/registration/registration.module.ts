import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SentComponent} from './sent/sent.component';
import {RegistrationHomeComponent} from './registration-home/registration-home.component';

@NgModule({
    declarations: [
        RegistrationComponent,
        SentComponent,
        RegistrationHomeComponent,
    ],
    imports: [
        RegistrationRoutingModule,
        SharedModule,
    ]
})
export class RegistrationModule {
}

