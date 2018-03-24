import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    const forbidden = nameRe.test(control.value);
    return of(forbidden ? { 'forbiddenName': { value: control.value } } : null).delay(5000);
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }]
})
export class ForbiddenNameDirective implements Validator {
  @Input() appForbiddenName: string;
  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } {
    return this.appForbiddenName ? forbiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(control)
      : null;
  }
}
