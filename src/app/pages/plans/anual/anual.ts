import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anual',
  imports: [Hero, CommonModule, RouterLink],
  templateUrl: './anual.html',
})
export class Anual {

}
