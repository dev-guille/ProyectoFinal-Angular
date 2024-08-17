import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Producto{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Producto[] = [];
  private carritoObjeto = new BehaviorSubject<Producto[]>(this.carrito);

  obtenerCarrito(): Observable<Producto[]>{
    return this.carritoObjeto.asObservable();
  }

  agregarCarrito(productoP: Producto): void{
    this.carrito.push(productoP);
    this.carritoObjeto.next(this.carrito);
  }

  moverCarrito(productoIDP: number): void{
    this.carrito = this.carrito.filter(productoP => productoP.id !== productoIDP);
    this.carritoObjeto.next(this.carrito);
  }

  limpiarCarrito():void{
    this.carrito = [];
    this.carritoObjeto.next(this.carrito);
  }
}
