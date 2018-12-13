import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class RegistrateService {
    private isRegistrate = false;
    // my error url private url = 'http://www.mocky.io/v2/5c126bb63300000236998f58';
    private url = 'http://www.mocky.io/v2/5c126e7c3300000236998f73';

    constructor(private http: HttpClient) {
    }

    registrate(data): Observable {
        return this.http.post(this.url, data).pipe(map(result => {
            return result;
        }));
    }

    registrated() {
        this.isRegistrate = true;
    }

    close() {
        this.isRegistrate = false;
    }

    getStatus(){
        return this.isRegistrate;
    }

}
