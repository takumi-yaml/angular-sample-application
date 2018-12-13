import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration.component';
import {SentComponent} from './sent/sent.component';
import {IsRegistratedGuard} from './is-registrated.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: RegistrationComponent},
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
