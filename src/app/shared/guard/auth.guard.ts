import {Injectable} from '@angular/core';
import {CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {Route} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private auth: AuthService) {
    }


    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.getStatus();
    }

    canLoad(route: Route): boolean {
        const url = `/${route.path}`;
        return this.auth.getStatus();
    }
}
