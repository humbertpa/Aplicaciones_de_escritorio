import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    GaleriaComponent,
    TareasComponent,
    NotFoundComponent,
    ProductosComponent,
    ListarProductosComponent,
    CrearProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
