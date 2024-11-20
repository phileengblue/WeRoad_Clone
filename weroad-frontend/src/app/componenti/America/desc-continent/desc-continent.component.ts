import { Component } from '@angular/core';

@Component({
  selector: 'app-desc-continent',
  templateUrl: './desc-continent.component.html',
  styleUrls: ['./desc-continent.component.css']
})
export class DescContinentComponent {

  desc = [
    {
      title:'in Nord America',
      subtitle: "Tra Canada e Stati Uniti d'America",
      p:'Dai grandi deserti del Far West alla Grande Mela, dai parchi dell’Alaska alla costa della California: il Nord America è la terra dei grandi spazi aperti! Noi siamo pronti ad esplorarli, tu vieni con noi?',
      button1: "Stati Uniti d'America",
      button2:'Canada'
    }
  ]

}
