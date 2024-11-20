import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-asia',
  templateUrl: './desc-continent-asia.component.html',
  styleUrls: ['./desc-continent-asia.component.css']
})
export class DescContinentAsiaComponent {
  desc = [
    {
      title:'in Asia',
      p:"Dalla Grande Muraglia Cinese alle spiagge dello Sri Lanka, dal monte Fuji in Giappone fino all'Annapurna in Nepal, dall'etereo Taj Mahal indiano fino ad immergersi nel caos delle grandi città asiatiche, da Pechino a Tokyo e infine a Nuova Delhi: in Asia c’è tutto quello che si può desiderare da un viaggio. Quale destinazione scegli?",
      button1: "Giappone",
      button2:'India',
      button3:'Nepal',
      button4:'Sri Lanka',
      button5:'Uzbekistan',
      button6:'Corea del Sud',
      button7:'Cina',
      button8:'Maldive'     
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
