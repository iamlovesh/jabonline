import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any){
    // NodeJS doesn't support String replaceAll method

    let data = value?.replace(/(\d+)&(?=\d)/g, '$1,');
    //data = value.replaceAll(/[\u{0080}-\u{FFFF}]/gu, "");
    return data;
  }

}
