import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-europa',
  templateUrl: './down-cover-europa.component.html',
  styleUrls: ['./down-cover-europa.component.css']
})
export class DownCoverEuropaComponent implements OnInit{
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/19585/grecia-viaggi-weroad.webp',
      Citation:'"O vecchio continente! Carica d’anni, scabra, santa, eccelsa maestra dello spirito, che filtri profumi e sensi!"',
      Author:'Dezső Kosztolányi',
      p:'È la culla delle grandi civiltà antiche, di Imperi che hanno navigato nell’oro e sono caduti nelle ceneri; patria di scrittori, poeti e filosofi che hanno posto le basi del pensiero dell’uomo, di artisti che con la loro arte hanno influenzato il mondo. Centro della Terra per secoli, da qui partirono i grandi navigatori verso l’ignoto– mentre ora è meta ambita per i viaggiatori da tutto il globo. Ci sono infinite storie da ascoltare e innumerevoli scorci nascosti da ammirare: ogni strada è avventura, ogni angolo una nuova scoperta.'
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
