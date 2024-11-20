import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-medio-oriente',
  templateUrl: './desc-continent-medio-oriente.component.html',
  styleUrls: ['./desc-continent-medio-oriente.component.css']
})
export class DescContinentMedioOrienteComponent {
  desc = [
    {
      title:' in Medio Oriente',
      p:"Scopri la terra dove sorge il sole: dal deserto del Wadi Rum in Giordania ai moderni grattacieli di Dubai, dalla Moschea di Santa Sofia di Istanbul al contrasto tra tradizione e modernità di Riad in Arabia Saudita",
      button1: "Turchia",
      button2:'Giordania',
      button3:'Emirati Arabi',
      button4:'Oman',
      button5:'Altri paesi'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
