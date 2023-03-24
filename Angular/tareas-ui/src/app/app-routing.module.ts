import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TareasComponent } from './pages/tareas/tareas.component';

const routes: Routes = [
  { path: '', redirectTo: 'tareas',pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
