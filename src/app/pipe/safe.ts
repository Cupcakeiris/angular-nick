//this is custom pipe to ensure connecting security, used existing codes
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}//sanitizer provides secure connection
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}