import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-sud-est-asiatico',
  templateUrl: './desc-continent-sud-est-asiatico.component.html',
  styleUrls: ['./desc-continent-sud-est-asiatico.component.css']
})
export class DescContinentSudEstAsiaticoComponent {
  desc = [
    {
      title:'nel Sud Est Asiatico',
      p:"Dal delta del Mekong in Vietnam alle lagune segrete delle Filippine, fino alle isole paradisiache dell'Indonesia e alle rumorose città thailandesi. Il Sud Est Asiatico è una terra ricca di contrasti tra modernità e tradizioni, luoghi dove regna la pace e città dove si respira il caos: zaino in spalla, siamo pronti a immergerci a capofitto in questi viaggi!",
      button1: "Indonesia",
      button2:'Thailandia',
      button3:'Vietnam',
      button4:'Malesia e Singapore',
      button5:'Filippine',
      button6:'Laos e Cambogia'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
