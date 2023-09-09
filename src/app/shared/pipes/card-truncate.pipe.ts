import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTruncate',
})
export class CardTruncatePipe implements PipeTransform {
  transform(description: string): string {
    return description.length < 200 ? description : description.slice(0, 200).trim() + '...';
  }
}
