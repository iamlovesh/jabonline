import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitWord'
})
export class SplitWordPipe implements PipeTransform {

  transform(value: any): any {
    let value1 = value.split(" ").length;
    value = value.split(" ",((value1 - (value1 % 2)) / 2)).join(" ");
    return value;
  }

}
