import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-africa',
  templateUrl: './down-cover-africa.component.html',
  styleUrls: ['./down-cover-africa.component.css']
})
export class DownCoverAfricaComponent  implements OnInit{
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11219/africa-desktop.webp',
      Citation:'“Il respiro del panorama era immenso. Ogni cosa dava un senso di grandezza, di libertà, di nobiltà suprema.”',
      Author:'Karen Blixen',
      p:"Pensi all’Africa e subito davanti ai tuoi occhi si aprono paesaggi immensi, deserti, savane, leoni ed elefanti – e probabilmente nella tua testa stai anche cantando “alle falde del Kilimamgiaro, paraponzi ponzi po'”. In effetti in Africa tutto è vasto: il continente innanzitutto, che ricopre più del 20% delle terre emerse del pianeta, il deserto del Sahara, il più esteso del mondo, il fiume più lungo, il Nilo, le temperature più calde e centinaia di dialetti e culture diffuse fra un miliardo di abitanti. Ma nonostante questa “grandezza”, resterai stupito dal senso di intimità che si prova una volta che avrai esplorato e capito l’Africa – l’ultima grande frontiera dell’avventura."
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobileView = result.matches;
      });
  }

}
