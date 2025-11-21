import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Whatsapp } from "../../icons/whatsapp/whatsapp";
import { Outlook } from "../../icons/outlook/outlook";

@Component({
  selector: 'app-contact',
  imports: [Hero, Whatsapp, Outlook],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
