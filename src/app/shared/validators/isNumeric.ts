import {ValidatorFn, AbstractControl} from '@angular/forms';

export function isNumeric(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const numeric = /[^0-9]/.test(control.value);
        return numeric ? {'isNumeric': {value: control.value}} : null;
    };
}
