import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-spagna-portogallo',
  templateUrl: './desc-continent-spagna-portogallo.component.html',
  styleUrls: ['./desc-continent-spagna-portogallo.component.css']
})
export class DescContinentSpagnaPortogalloComponent {
  desc = [
    {
      title:'Che zona vuoi esplorare?',
      p:"Puoi scegliere tra itinerari nella penisola iberica, dai Paesi Baschi all'Algarve passando per l'Andalusia oppure le isole nel Mar Mediterraneo o nell'Oceano Atlantico; le prima famose per le loro spiagge meravigliose e la vita notturna, le seconde per la vita da surf e i paesaggi naturalistici quasi lunari!",
      button1: "Spagna",
      button2:'Portogallo'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
