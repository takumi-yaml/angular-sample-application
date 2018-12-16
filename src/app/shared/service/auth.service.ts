import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pipe, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';


interface Auth {
    'mail': string;
    'password': string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isAuthenticated = false;
    url = 'http://www.mocky.io/v2/5c15b6a92e00004b0937c699';
    // fail
    // url = 'http://www.mocky.io/v2/5c15bc792e0000d70937c6a3';

    constructor(private http: HttpClient) {
    }

    authenticate(data: Auth): Observable<any> {
        return this.http.post(this.url, data).pipe(map(result => {
            this._store(result);
            return result;
        }));
    }

    private _store(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    get() {
        return localStorage.getItem('user');
    }

    private _remove() {
        localStorage.removeItem('user');
    }

    authed() {
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
        this._remove();
    }

    getStatus() {
        if (!this.get()) {
            return this.isAuthenticated;
        }
        return true;
    }

}
