import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonRemove'
})
export class CommonRemovePipe implements PipeTransform {

  transform(value: any): string {
    value = value.replaceAll(',', '');
    return value;
  }

}
