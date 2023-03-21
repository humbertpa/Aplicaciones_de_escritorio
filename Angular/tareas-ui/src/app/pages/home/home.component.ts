import { Component, OnInit } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion?: string; // el signo de interrogación significa que es opcional
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tarea: Tarea = {
    titulo: '',
    descripcion: '',
    status: 'new'
  };

  tareas: Array<Tarea> = [];

  titulo: string = '';

  ngOnInit(): void {
    console.log('Listo para iniciar la peticion');
    this.getTareas();
  }

  cargando: boolean = true;


  getTareas() {
    setTimeout(() => {
      this.tareas = [
        {
          titulo: 'tarea 1',
          descripcion: 'Lorem Ipsum 1',
          status: 'new'
        },
        {
          titulo: 'tarea 2',
          descripcion: 'Lorem Ipsum 2',
          status: 'in progress'
        }
      ];
      this.cargando = false;
      console.log(this.tareas);
    }, 1000);
  }

  newTarea(): void{
    this.tareas.push(this.tarea)
  }

  setTitulo(e: KeyboardEvent):void{
    this.tarea.titulo = (e.target && e.target.value) ? e.target.value : '';

  }


  constructor() {
   /*  console.log('Constructor');
    setTimeout(() => {
      this.cargando = false;
      console.log('Dejo de cargar');
    }, 3000) */
  }

}
