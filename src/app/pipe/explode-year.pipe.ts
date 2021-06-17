import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explodeYear'
})
export class ExplodeYearPipe implements PipeTransform {

  transform(value: any) {
    const value1 = value.split(',');
    return value1[1].trim();
  }

}
