//Here we learn about PIPES

import { Pipe, PipeTransform } from '@angular/core';
//Pipes are pure and impure
// Pure :: The transform function is invoked only if there is change detected in Primitive values and the reference of Objects.
// Impure :: The transform function is invoked after every change detection cycle tha Angular follows like mousemove,keyenter etc.
// So Impure PIPE are called rigorously.Avoid making use of heavy functionality in Impure PIPES.
@Pipe({
  name: 'pipeSQRT',
  pure: true
})
export class PipeSQRTPipe implements PipeTransform {
  //Multiple parameters can be passed in a PIPE and the same is handled in comma separated form in trnsform method
  //PiperTransform class is implemented and transform method is overridden .The first value it takes is the value on which
  // the pipe is called .The rest are the parameters we can send in the PIPE operation
  //in template write as {{ value|pipeName :param1:param2:param3}}
  transform(value: number, exponent: number, exponent2: number): number {
    if (isNaN(value) || isNaN(exponent)) return -1
    else {
      return Math.pow(Math.pow(value, (exponent || 1)), (exponent2 || 1));
    }
  }

}
//Important note is to always use PURE FUNCTIONS for PIPES. Given the same input the PURE FUNCTION will always return the same 
// output
