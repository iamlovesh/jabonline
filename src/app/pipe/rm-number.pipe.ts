import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmNumber'
})
export class RmNumberPipe implements PipeTransform {

  transform(value: any): string {
    value = value?.replaceAll(/[0-9],[0-9],[0-9],[0-9],[0-9]/g, '');
    value = value?.replaceAll(/[0-9],[0-9],[0-9],[0-9]/g, '');
    value = value?.replaceAll(/[0-9],[0-9],[0-9]/g, '');
    value = value?.replaceAll(/[0-9],[0-9]/g, '');
    value = value?.replaceAll(/[0-9]/g, '');
    // value = value.replaceAll(/[\u{0080}-\u{FFFF}]/gu, "");
    return value;
  }

}
