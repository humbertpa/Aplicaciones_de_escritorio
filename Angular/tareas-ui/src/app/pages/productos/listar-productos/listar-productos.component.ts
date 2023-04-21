import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/interfaces/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent{

  constructor(private productoService: ProductoService){};

  producto: Producto = {
    nombre: '',
    categoria: ''
  }
  productos: Producto[] = [
    {
      id:1,
      nombre: 'Peras',
      categoria: 'comidas'
    },
    {
      id:2,
      nombre: 'Vino',
      categoria: 'bebidas'
    },
    {
      id:3,
      nombre: 'Manzanas',
      categoria: 'comidas'
    }
  ]

  /* ngOnInit(): void {
    setTimeout(() => {
      this.productos = [{
        nombre: 'Agua',
        categoria: 'bebidas'
      }]
    }, 5000); */


  mostrarItem(producto: Producto) {
    this.producto = producto;
    this.productoService.setProducto(producto);
  }
}
