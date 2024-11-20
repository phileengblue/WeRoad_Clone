import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-centro-america',
  templateUrl: './down-cover-centro-america.component.html',
  styleUrls: ['./down-cover-centro-america.component.css']
})
export class DownCoverCentroAmericaComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11220/viaggi-centro-america-costa-rica.webp',
      Citation:"Il mondo è un bel posto e per esso vale la pena lottare",
      Author:'Ernest Hemingway',
      p:"Hai mai pensato di fare un tour dell’America Centrale? Un viaggio che ti porti a scoprire l’entroterra messicano e le sue spiagge paradisiache, il Mar dei Caraibi e le isole, da Cuba fino a Guadalupa e Martinica, e poi scendere verso sud, passando per il Belize e il Guatemala, e ancora più a sud, fino ad arrivare in Costa Rica? Sarebbe un viaggio incredibile da fare solo in una volta, per ora ci accontentiamo di spezzettarlo un pochino. Scopriamo un mondo tra due mondi, un ponte tra le due Americhe: è la culla delle antichissime civiltà dei Maya e degli Aztechi e di paesaggi naturali incontaminati, un susseguirsi di storia, archeologia, arte, folclore e avventura. Gran parte di questa zona del mondo è fatta anche dalle isole, tra le quali domina Cuba, dove ancora sembra di essere rimasti fermi a 100 anni fa - e poi tutte le altre, piccoli paradisi terrestri dove tutto è incontaminato. Un ponte tra Nord e Sud certo, ma anche fra Est e Ovest, tra l’Oceano Atlantico e Pacifico: chi passa da queste parti ha un assaggio della 'pura vida' che i locali vivono ogni giorno."
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
