import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUrl'
})
export class ReplaceUrlPipe implements PipeTransform {

  transform(value: any): any {
    let url  = location.href.split("#")[0];
    let value1 = url.includes("&ids=1");
    if (value1) {
      value = value?.replaceAll('href="#ref', 'href="' + url + '#ref').replaceAll('href="#table', 'href="' + url + '#table');
    }else{
      value = value?.replaceAll('href="#ref', 'href="' + url + '&ids=1#ref').replaceAll('href="#table', 'href="' + url + '#table');
    }

    return value;
  }

}
