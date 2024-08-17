import { Routes } from '@angular/router';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
    {
        path: 'productos',
        component: ListaProductoComponent //Ruta para la lista de productos
    },
    {
        path: 'producto/:id',
        component: DetalleProductoComponent //Ruta para los detalles de productos
    },
    {
        path: 'carrito',
        component: CarritoComponent //Ruta para el carrito de compras
    }
];
