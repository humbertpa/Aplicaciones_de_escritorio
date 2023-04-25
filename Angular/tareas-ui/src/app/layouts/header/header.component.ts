import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/shared/interfaces/producto';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  producto: Producto = {
    nombre: '',
    categoria: ''
  };

  loginStatus: boolean = false;

  constructor(
    private productoService: ProductoService,
    private authService: AuthService,
    private router: Router) {
    this.productoService.productoObservable.subscribe(producto => {
      this.producto = producto;
    });
  
    this.authService.loginStatus.subscribe((status: boolean)=> {
      this.loginStatus = status;
    })
  };

  logOut(){
    this.authService.clearToken();
    this.router.navigate(['/login']);
  };
  


}
