import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { DetalleProductoComponent } from './pages/productos/detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'galeria', component: GaleriaComponent },
  {
    path: 'productos', component: ProductosComponent, children: [
      { path: '', component: ListarProductosComponent },
      { path: 'nuevo', component: CrearProductosComponent },
      { path: ':id', component: DetalleProductoComponent }

    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
