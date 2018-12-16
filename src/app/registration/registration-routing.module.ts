import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration.component';
import {SentComponent} from './sent/sent.component';
import {IsRegistratedGuard} from './is-registrated.guard';
import {RegistrationHomeComponent} from './registration-home/registration-home.component';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent,
        children: [
            {path: '', component: RegistrationHomeComponent},
            {path: 'sent', component: SentComponent, canActivate: [IsRegistratedGuard]},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
