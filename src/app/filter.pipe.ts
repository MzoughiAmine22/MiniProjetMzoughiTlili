import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,libelle:string): any[] 
  {
    const result:any = [];
    if(!value || filterString==='' || libelle ==='')
    {
      return value;
    }
    value.forEach((crit:any)=>
    {
      if(crit[libelle].trim().toLowerCase().includes(filterString.toLowerCase()))
      {
        result.push(crit);
      }
    });
    return result;
  }

}
