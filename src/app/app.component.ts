import { ListaTareas, Tarea } from './model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = new ListaTareas();

  agregarNuevaTarea(nombreTarea) {
      if (nombreTarea != "") {
          this.tareas.agregar(new Tarea(nombreTarea, false));
      }
  }

  obtenerTareas(){
    return this.tareas.items;
  }
}
