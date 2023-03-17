import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cargando: boolean = true;

  constructor(){
    setTimeout(()=>{
      this.cargando = false;
    },3000)
  }
}
