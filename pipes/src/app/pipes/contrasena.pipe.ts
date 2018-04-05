import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean=true): string {
    let result:string="";
    if(activar)
    {
      for(let i=0;i<value.length;i++){
        result+="*";
      }
      return result;
    }
    else
    return value;
    
  }

}
