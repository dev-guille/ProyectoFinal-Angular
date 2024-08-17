import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  productos: any[] = [];

  constructor(private servicioProducto: ProductosService, private servicioCarrito: CarritoService){}

  ngOnInit():void{
    this.servicioProducto.obtenerProductos().subscribe(productos => {
      this.productos = productos;
    })
  }

  agregarACarrito(productoP : any): void{
    this.servicioCarrito.agregarCarrito(productoP);
  }
}
