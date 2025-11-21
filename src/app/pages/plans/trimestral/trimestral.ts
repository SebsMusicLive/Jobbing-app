import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-trimestral',
  imports: [Hero, CommonModule, RouterLink],
  templateUrl: './trimestral.html',
})
export class Trimestral {

}
