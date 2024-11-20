import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-sud-america',
  templateUrl: './desc-continent-sud-america.component.html',
  styleUrls: ['./desc-continent-sud-america.component.css']
})
export class DescContinentSudAmericaComponent {
  desc = [
    {
      title:'in Sud America',
      p:"Da Macchu Picchu alle Cascate di Iguazù, dalla Ciudad Maravillosa a Ushuaia, la città alla fine del mondo: natura incontaminata e un popolo accogliente ci stanno chiamando. Rispondiamo e pariamo per Perù, Brasile, Colombia, Argentina, Ecuador... ?",
      button1: "Perù",
      button2:'Brasile',
      button3:'Colombia',
      button4:'Argentina',
      button5:'Cile',
      button6:'Ecuador',
      button7:'Bolivia'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
