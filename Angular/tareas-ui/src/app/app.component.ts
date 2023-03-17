import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tareas-ui';
  nombre:string = 'Humberto'

  constructor(){
    setTimeout(()=>{
      this.nombre = 'Peñuelas';
    },3000);
  }
}
