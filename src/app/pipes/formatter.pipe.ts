import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any, callback: Function,args:any={}): any {
  	return callback(value,args);
  }

}
