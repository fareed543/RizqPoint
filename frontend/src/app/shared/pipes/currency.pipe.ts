import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(amount: number, symbol: string = '₹'): string {
    if (Number.isNaN(amount)) {
      return '0';  
    }

    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });

    return formatter.format(amount).replace('₹', symbol).replace('.00', '');
  }
}
