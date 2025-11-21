import { Component } from '@angular/core';
import { Services } from "../services/services";
import { Hero } from "../../hero/hero";
import { CardsHome } from "../../cards-home/cards-home";

@Component({
  selector: 'app-home',
  imports: [ Hero, CardsHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
