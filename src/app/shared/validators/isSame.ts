import {ValidatorFn, AbstractControl} from '@angular/forms';

export function isSame(field: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const campareVal = control.parent.get(field).value;
        const same = (campareVal === control.value);
        return same ? null : {'isSame': {value: control.value}};
    };
}
