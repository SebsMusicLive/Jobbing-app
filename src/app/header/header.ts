import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  scrolled = false;
  isMenuOpen = false; // <--- Variable para controlar el menú móvil

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100; // Cuando baja más de 50px
  }

  // Función para abrir/cerrar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Función para cerrar el menú cuando se hace clic en un enlace
  closeMenu() {
    this.isMenuOpen = false;
  }

}
