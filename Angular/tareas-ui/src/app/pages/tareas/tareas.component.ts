import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Tarea } from 'src/app/shared/interfaces/tarea';

import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {
    this.traerTareas;
  }

  ngOnInit(): void {
    this.traerTareas();
  }

  traerTareas() {
    this.tareaService.find().subscribe(res => {
      this.tareas = res;
    });
  }

}
