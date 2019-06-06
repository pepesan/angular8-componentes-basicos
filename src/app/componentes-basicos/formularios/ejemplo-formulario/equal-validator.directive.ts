import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appValidateEqual][formControlName],' +
    '[appValidateEqual][formControl],[appValidateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
  ]
})
export class EqualValidator implements Validator {
  constructor( @Attribute('appValidateEqual') public appValidateEqual: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    let v = c.value;

    // control value (e.g. password)
    let e = c.root.get(this.appValidateEqual);

    // value not equal
    if (e && v !== e.value) return {
      appValidateEqual: false
    };
    return null;
  }
}
