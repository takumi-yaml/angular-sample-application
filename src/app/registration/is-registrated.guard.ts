import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RegistrateService} from './registrate.service';

@Injectable({
    providedIn: 'root'
})
export class IsRegistratedGuard implements CanActivate {

    constructor(private router: Router, private rs: RegistrateService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.rs.getStatus()) {
            return true;
        } else {
            // todo: create dest
            // todo: または登録ページでエラーを表示させる方法
            this.router.navigate(['/bigfavor']);
        }
    }
}
