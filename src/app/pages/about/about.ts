import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-about',
  imports: [Hero],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
