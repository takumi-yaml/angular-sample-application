import {ValidatorFn, AbstractControl} from '@angular/forms';

export function registerRegex(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = /[^a-zA-Z\d\.\-\+]/.test(control.value);
        return forbidden ? {'registerRegex': {value: control.value}} : null;
    };
}
