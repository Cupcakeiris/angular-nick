import { Pipe, PipeTransform } from '@angular/core';
let profanity = require('leo-profanity');

@Pipe({
    name: 'profanity'
})
export class Profanity implements PipeTransform {
  transform(value: any): string {
      
    return profanity.clean(value)
  }
}