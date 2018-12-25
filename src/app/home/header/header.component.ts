import {Component, OnInit} from '@angular/core';
import {faEnvelope, faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    faEnvelope = faEnvelope;
    faUser = faUser;
    faShoppingCurt = faShoppingCart;

    constructor() {
    }

    ngOnInit() {
    }

}
