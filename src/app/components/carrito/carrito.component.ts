import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito: any[] = [];

  constructor(private servicioCarrito: CarritoService){}

  ngOnInit():void{
    this.servicioCarrito.obtenerCarrito().subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  removerObjeto(productoIdP: number): void{
    this.servicioCarrito.moverCarrito(productoIdP);
  }

  limpiarCarrito(): void{
    this.servicioCarrito.limpiarCarrito();
  }
}
