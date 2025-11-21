import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [Hero, RouterOutlet, CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
isServicesRoot: boolean = true;

  // Lista de planes para generar el HTML automáticamente
  plans = [
    { name: 'Plan semanal', link: '/servicios/semanal' },
    { name: 'Plan mensual', link: '/servicios/mensual' },
    { name: 'Plan trimestral', link: '/servicios/trimestral' },
    { name: 'Plan anual', link: '/servicios/anual' },
    { name: 'Plan institucional', link: '/servicios/institucional' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRoute();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  private checkRoute() {
    // Muestra el contenido solo si estamos en /servicios exacto
    this.isServicesRoot = this.router.url === '/servicios';
  }
}
