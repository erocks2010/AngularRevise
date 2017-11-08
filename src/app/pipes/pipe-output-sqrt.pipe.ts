import { Pipe, PipeTransform } from '@angular/core';
//This pipe is chained to the output of the pipeSQRT.The put of pipeSQRT is the input::value to this pipe
@Pipe({
  name: 'pipeOutputSQRT',
  pure:false
})
export class PipeOutputSQRTPipe implements PipeTransform {

  transform(value: number): string {
    if(isNaN(value) || value<0) return 'Please enter valid Number'
    else{
      return 'The result of the Mathematical Operation is = '+value;
    }
  }

}
