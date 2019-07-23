import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number): any {
    const valueStr = String(value);
    return `+7 (${valueStr.slice(1, 4)}) ${valueStr.slice(4, 7)}-${valueStr.slice(7, 9)}-${valueStr.slice(9)}`;
  }

}
