import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-centro-america',
  templateUrl: './desc-continent-centro-america.component.html',
  styleUrls: ['./desc-continent-centro-america.component.css']
})
export class DescContinentCentroAmericaComponent {
  desc = [
    {
      title:'in Centro America',
      p:"Vulcani, isolette sperdute, lagune, spiagge, palme: qui ci si gode la vita, e il comune denominatore è sempre l’effervescente spirito latino! Ci facciamo travolgere? Partiamo per Cuba, Messico, Repubblica Dominicana, Nicaragua, Belize, Costa Rica e le isole dei Caraibi!",
      button1: "Cuba",
      button2:'Messico',
      button3:'Costa Rica',
      button4:'Rep. Domenicana',
      button5:'Panama',
      button6:'Altri paesi',
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
