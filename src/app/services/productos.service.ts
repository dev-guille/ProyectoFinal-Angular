import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Producto{
  id: number;
  nombre: string;
  imagenURL: string;
  descripcion: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    {id: 1, nombre: 'Cable #12', imagenURL: 'https://elarenal.com.gt/cdn/shop/products/ILU-GEN-CABLE_6acecee0-8bcd-4372-8955-c97a5c798855.jpg?v=1642544060',descripcion: 'Rojo', precio: 350},
    {id: 2, nombre: 'Cable #12', imagenURL: 'https://acdn.mitiendanube.com/stores/002/897/767/products/cable-unipolar-azul-1-5mm1-2281556d385e32128016783720748270-640-0.png', descripcion: 'Azul', precio: 350},
    {id: 3, nombre: 'Cinta de Aislar', imagenURL: 'https://cdn.celasa.com.gt/productos/CIN05.jpg',descripcion: 'Scotch', precio: 75},
    {id: 4, nombre: 'Bombilla', imagenURL: 'https://cdn.celasa.com.gt/productos/B0175.jpg', descripcion:'LED', precio: 15}
  ];

  obtenerProductos(): Observable<Producto[]>{
    return of(this.productos);
  }
  
  obtenerProductosId(idP: number): Observable<Producto | undefined>{
    return of(this.productos.find(productos => productos.id === idP));
  }
}
