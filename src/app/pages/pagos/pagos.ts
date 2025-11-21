import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagos',
  imports: [Hero, RouterModule,CommonModule],
  templateUrl: './pagos.html',
  styleUrl: './pagos.css',
})
export class Pagos {

}
