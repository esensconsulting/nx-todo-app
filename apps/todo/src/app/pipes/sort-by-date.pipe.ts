import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(value: any, field: string): any {
    if (!Array.isArray(value)) {
      return null;
    }

    value.sort((a: any, b: any) => {
      return new Date(a[field]).getTime() - new Date(b[field]).getTime();
    });

    return value;
  }
}
