import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoObservable: BehaviorSubject<Producto>;

  productoSeleccionado: Producto = {
    nombre:'',
    categoria:''
  }

  constructor() {
    this.productoObservable = new BehaviorSubject(this.productoSeleccionado);
  }



  setProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
    this.productoObservable.next(producto);
  }

  getProducto(): Producto{
    return this.productoSeleccionado;
  }
}
