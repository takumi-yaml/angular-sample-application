import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {AuthService} from '../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    loginForm = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    errMsg = '';

    isSent = false;

    constructor(private fb: FormBuilder, private auth: AuthService, private rt: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.isSent = true;
        this.auth.authenticate({
            'mail': this.mail.value,
            'password': this.password.value,
        }).subscribe(
            (result) => {
                console.log(result);
            },
            (err) => {
                console.log(err.error.error.message);
                this.errMsg = err.error.error.message;
            });
    }

    get mail() {
        return this.loginForm.get('mail');
    }

    get password() {
        return this.loginForm.get('password');
    }

}
