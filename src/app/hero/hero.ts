import { Component, Input } from '@angular/core'; // 1. Importar Input
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
})
export class Hero {
  // 2. Definir las variables que pueden cambiar
  @Input() image: string = '';          // La ruta de la imagen
  @Input() title: string = '';          // El título principal (Ej: JOBING o Acerca de nosotros)
  @Input() subtitle: string = '';       // El texto de abajo
  @Input() showButton: boolean = false; // Para decidir si mostrar el botón o no
  @Input() buttonLink: string = '';
  @Input() buttonText: string = '';

}
