import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripTag'
})
export class StripTagPipe implements PipeTransform {

  transform(value: String) {
    return value?.replace(/<.*?>/g, '');
  }

}
