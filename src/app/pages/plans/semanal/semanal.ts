import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-semanal',
  imports: [Hero, CommonModule, RouterLink],
  templateUrl: './semanal.html',
})
export class Semanal {

}
