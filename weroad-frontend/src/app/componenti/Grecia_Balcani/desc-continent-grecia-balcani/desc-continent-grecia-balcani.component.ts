import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-grecia-balcani',
  templateUrl: './desc-continent-grecia-balcani.component.html',
  styleUrls: ['./desc-continent-grecia-balcani.component.css']
})
export class DescContinentGreciaBalcaniComponent {
  desc = [
    {
      title:' in Grecia e nei Balcani',
      p:"Qui troverai itinerari per tutti i gusti nei paesi dell'europa orientale affacciati sul Mar Mediterraneo, ma non solo! Le isole greche non hanno quasi bisogno di introduzione: Corfù e Zante sono le mete per eccellenza di chi cerca mare e divertimento 24/7 in estate; Milos, Santorini, Kos invece sono isole meno dedite alla vita notturna, ma con panorami mozzafiato, paesi da fotografare e ristorantini in cui passare piacevolissime serate dopo averne esplorato tutte le spiagge! Risalendo la costa a ovest, troviamo Montenegro, Croazia e Slovenia: tre paesi ancora poco conosicuti dai turisti, ma che custodiscono belle naturali e pezzi di storia contemporanea che colpiscono. Ah, e per i veri amanti del mare, trovate tutti gli itinerari Sail Adventure in barca a vela, pronti a salpare marinai?",
      button1: "Grecia",
      button2:'Balcani'
    }
  ]

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }

}
