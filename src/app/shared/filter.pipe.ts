import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../shared/model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, currentType: string, types: Set<string>): Place[] {
    const selectedType = currentType ? currentType : types.values().next().value;

    return value.filter(({ type }) => type === selectedType);
  }

}
