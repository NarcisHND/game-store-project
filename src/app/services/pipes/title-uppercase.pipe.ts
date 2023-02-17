import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titleUppercase'
})
export class TitleUppercasePipe implements PipeTransform {

  transform(value: string): unknown {
    let finalValue!: string;
    if (value.includes('-')) {
      const searchEL = value.indexOf('-');
      if (searchEL > 0) {
        const firstWord: string = value.slice(0, searchEL);
        const secondWord: string = value.slice(searchEL + 1, value.length);
        const finalFWord: string = firstWord[0].toUpperCase().concat(firstWord.slice(1, firstWord.length));
        const finalSWord: string = secondWord[0].toUpperCase().concat(secondWord.slice(1, secondWord.length));
        const finalWordForm: string = finalFWord.concat('-').concat(finalSWord);
        finalValue = finalWordForm;
      }
    } else {
      const upperC: string = value[0].toUpperCase().concat(value.slice(1, value.length));
      finalValue = upperC;
    }

    return finalValue;
  }
}
