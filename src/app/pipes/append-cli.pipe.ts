import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI'
})
export class AppendCLIPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "City Name CLI: "+value;;
  }

}
