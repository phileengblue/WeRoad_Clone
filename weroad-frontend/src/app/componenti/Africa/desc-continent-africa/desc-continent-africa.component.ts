import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-africa',
  templateUrl: './desc-continent-africa.component.html',
  styleUrls: ['./desc-continent-africa.component.css']
})
export class DescContinentAfricaComponent {
  desc = [
    {
      title:'in Africa',
      p:"Vuoi esplorare le medine marocchine, fare un salto nella storia tra le piramidi d'Egitto o entrare in contatto con la natura immergendoti nella savana? Qui trovi tutti i viaggi di gruppo dal Marocco al Sudafrica per vivere un'avventura africana con un gruppo di coetanei.",
      button1: "Marocco",
      button2:'Egitto',
      button3:'Tanzania',
      button4:'Kenya',
      button5:'Namibia',
      button6:'Sudafrica',
      button7:'Altri paesi'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
