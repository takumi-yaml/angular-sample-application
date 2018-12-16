import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import * as lastDayOfMonth from 'date-fns/last_day_of_month';
import {range} from '../../shared/util/range';
import {registerRegex} from '../../shared/validators/register-regex';
import {isSame} from '../../shared/validators/isSame';
import {isNumeric} from '../../shared/validators/isNumeric';
import {ZipService, Zip} from '../../shared/service/zip.service';
import {RegistrateService} from '../registrate.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration-home',
    templateUrl: './registration-home.component.html',
    styleUrls: ['./registration-home.component.scss'],
    providers: [ZipService],
})
export class RegistrationHomeComponent implements OnInit {

    registForm = new FormGroup({
        displayName: new FormControl('', [Validators.required, registerRegex()]),
        pw: new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(8), registerRegex()]),
            password_conf: new FormControl('', Validators.required),
        }),
        ml: new FormGroup({
            mail: new FormControl('', [Validators.required, Validators.email]),
            mail_conf: new FormControl('', Validators.required),
        }),
        birthDate: new FormGroup({
            bd_year: new FormControl('', Validators.required),
            bd_month: new FormControl('', Validators.required),
            bd_day: new FormControl('', Validators.required),
        }),
        zip: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(7), isNumeric()]),
        ads: new FormGroup({
            ads1: new FormControl('', Validators.required),
            ads2: new FormControl('')
        }),
        tel: new FormControl('', Validators.required)
    });


    private _yearStart = 1960;
    private _yearEnd = new Date().getFullYear() - 10;

    years = range(this._yearStart, this._yearEnd);
    months = range(1, 12);
    days: number[];
    registrateErr = false;
    errMsg: string;

    isSent = false;

    constructor(private zipService: ZipService, private rs: RegistrateService, private router: Router) {
    }

    ngOnInit() {
        this.password_conf.setValidators(isSame('password'));
        this.mail_conf.setValidators(isSame('mail'));
        this.onChanges();
    }

    onSubmit() {
        this.rs.registrate({
            display_name: this.displayName.value,
            password: this.password.value,
            mail: this.mail.value,
            birth_date: `${this.bd_year}-${this.bd_month}-${this.bd_day}`,
            zip: this.zip.value,
            address: `${this.ads1}${this.ads2}`,
            tel: this.tel.value
        }).subscribe((result) => {
            console.log(result);
            this.rs.registrated();
            this.router.navigate(['/registration/sent']);
            this.isSent = true;
        }, (err) => {
            this.registrateErr = true;
            this.errMsg = err.error.messages;
        });
    }

    onChanges() {
        this.registForm.get('birthDate').valueChanges.subscribe(val => {
            if (val.bd_year && val.bd_month) {
                this.days = [];
                this.days = range(1, lastDayOfMonth(new Date(val.bd_year, val.bd_month - 1)).getDate());
            }

        });
    }

    getAds(zip: string) {
        this.zipService.getZip(zip).subscribe((data: { 'data': Zip[] }) => {
            this.ads1.setValue(data['data'][0]['ads']);
        });
    }

    get displayName() {
        return this.registForm.get('displayName');
    }

    get password() {
        return this.registForm.get('pw').get('password');
    }

    get password_conf() {
        return this.registForm.get('pw').get('password_conf');
    }

    get mail() {
        return this.registForm.get('ml').get('mail');
    }

    get mail_conf() {
        return this.registForm.get('ml').get('mail_conf');
    }

    get bd_year() {
        return this.registForm.get('birthDate').get('bd_year');
    }

    get bd_month() {
        return this.registForm.get('birthDate').get('bd_month');
    }

    get bd_day() {
        return this.registForm.get('birthDate').get('bd_day');
    }

    get zip() {
        return this.registForm.get('zip');
    }

    get ads1() {
        return this.registForm.get('ads').get('ads1');
    }

    get ads2() {
        return this.registForm.get('ads').get('ads2');
    }

    get tel() {
        return this.registForm.get('tel');
    }

}
