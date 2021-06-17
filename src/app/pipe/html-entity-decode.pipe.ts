import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlEntityDecode'
})
export class HtmlEntityDecodePipe implements PipeTransform {
  transform(value: string) {
    return new DOMParser().parseFromString(value, "text/html").documentElement.textContent;
  }

}
