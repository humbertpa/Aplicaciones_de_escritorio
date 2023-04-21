import { Component,Input,OnChanges,SimpleChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  @Input() items: any[] = [] ;
  @Output() seleccion:EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void{
    console.log('Se actualizaron los datos',this.items)
  }

  selectItem(item: any){
    console.log('Seleccionaste el item',item);
    this.seleccion.emit(item);
  }

}
