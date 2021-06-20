import { isPlatformBrowser } from '@angular/common';
import { Inject, Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';

@Pipe({
  name: 'htmlEntityDecode'
})
export class HtmlEntityDecodePipe implements PipeTransform {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  transform(value: string) {
    if (isPlatformBrowser(this.platformId)) {
      return new DOMParser().parseFromString(value, "text/html").documentElement.textContent;
    }
  }

}
