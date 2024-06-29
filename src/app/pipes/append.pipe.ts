import{Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'append'})


export class AppendPipe implements PipeTransform{


    transform(value: any, args?: any){
    if(!length){
        length =20;
    }

    return value.substring(0, length);
}
    
}
