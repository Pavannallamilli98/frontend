import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors } from '../../../node_modules/@angular/forms';


@Directive({
  selector: '[appSize]',
  providers:[{
    provide : NG_VALIDATORS,
    useExisting : SizeDirective,
    multi : true
  }]
})
export class SizeDirective implements Validators{

  validate(control:AbstractControl):ValidationErrors|null{

    if(control.value=='--choose--'){
      return {"appSize":true};
    }
    return null;
  }

}