import { Component, OnInit } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion?: string; // el signo de interrogación significa que es opcional
  status: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent implements OnInit {

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

  newTarea(): void {
    const clon = { ...this.tarea }
    this.tareas.push(clon)
    console.log(clon.titulo)
    this.tarea.titulo = '';
  }

  setTitulo(e: Event): void {
    this.tarea.titulo = (e.target as HTMLInputElement).value;
  }
}
