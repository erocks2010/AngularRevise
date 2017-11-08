import { ValidatorFn,ReactiveFormsModule,AbstractControl } from '@angular/forms'

export function CheckName(name:RegExp):ValidatorFn{
    return function(control:AbstractControl):{[key:string]:any}{
        return (name.test(control.value))?{'nameValidation':{value:control.value}}:null;
    }
}
