import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface Zip {
    zip: string;
    ads: string;
}

@Injectable({
    providedIn: 'root'
})
export class ZipService {

    private zipUrl = 'http://www.mocky.io/v2/5c0e70792e00006500043eb8';

    constructor(private http: HttpClient) {
    }

    getZip(zip: string) {
        return this.http.get(`${this.zipUrl}`);
    }
}
