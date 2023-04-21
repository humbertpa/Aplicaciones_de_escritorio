import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoSeleccionado: Producto = {
    nombre:'',
    categoria:''
  }

  constructor() { }

  setProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  getProducto(): Producto{
    return this.productoSeleccionado;
  }
}
