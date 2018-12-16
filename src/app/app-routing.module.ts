import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'registration', loadChildren: './registration/registration.module#RegistrationModule'},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
