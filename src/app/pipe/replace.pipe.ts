import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any){
    let data = value.replaceAll(/(\d+)&(?=\d)/g, '$1,');
    //data = value.replaceAll(/[\u{0080}-\u{FFFF}]/gu, "");
    return data;
  }

}
