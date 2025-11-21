import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Whatsapp } from "../../icons/whatsapp/whatsapp";
import { Outlook } from "../../icons/outlook/outlook";
import { Instagram } from "../../icons/instagram/instagram";
import { Twitter } from "../../icons/twitter/twitter";
import { Facebook } from "../../icons/facebook/facebook";

@Component({
  selector: 'app-contact',
  imports: [Hero, Whatsapp, Outlook, Instagram, Twitter, Facebook],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
