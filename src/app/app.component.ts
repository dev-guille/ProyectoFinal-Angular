import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from "./components/productos/productos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '9-proyecto1';
}
