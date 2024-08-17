import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  producto: any;

  constructor(
    private ruta: ActivatedRoute, 
    private servicioProducto: ProductosService,
    private servicioCarrito: CarritoService
  ){}

  ngOnInit(): void{
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.servicioProducto.obtenerProductosId(id).subscribe(producto => {
      this.producto = producto;
    });
  }

  agregarACarrito(productoP: any): void{
    this.servicioCarrito.agregarCarrito(productoP);
  }

}
