import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mensual',
  imports: [Hero, CommonModule, RouterLink],
  templateUrl: './mensual.html',
})
export class Mensual {

}
