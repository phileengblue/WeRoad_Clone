import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-sud-est-asiatico',
  templateUrl: './down-cover-sud-est-asiatico.component.html',
  styleUrls: ['./down-cover-sud-est-asiatico.component.css']
})
export class DownCoverSudEstAsiaticoComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11203/sri-lanka-asia-desktop.webp',
      Citation:'"Il Sud Est Asiatico ha una vera presa su di me. Fin dalla prima volta che ci sono andato, è stato un appagamento delle mie fantasie infantili sul modo in cui dovrebbe essere il viaggio."',
      Author:'Anthony Bourdain',
      p:"Fare un viaggio in Sud Est Asiatico è un po' un rito di iniziazione - infatti, qui vengono molti giovani, un po' per i prezzi decisamente bassi, un po' per il grande numero di backpackers da tutto il mondo che attraversano queste terre, un po' per le persone che vivono qui, sempre accoglienti e ospitali. Non serve un linguaggio comune per capirsi: sono gli occhi e, soprattutto, i sorrisi, a prendere il posto delle parole, e basta un gesto solidale per trasformare uno sconosciuto in una figura amica. È così che si scopre, a poco a poco, che le cose che contano davvero non sono quelle che riempiono le nostre case, ma i momenti che si possono vivere tra le risaie vietnamite accarezzate dai raggi del sole al tramonto, o la felicità che si prova mentre si ammira l'alba sul monte Bromo in Indonesia, dopo ore di trekking al buio, o ancora, la pace che si respira tra i templi thailandesi o pagaiando tra le acque delle lagune nascoste delle Filippine. Fare un viaggio in Sud Est Asiatico è un po' come imparare a respirare di nuovo, ma con un ritmo tutto nuovo, e con una pace che non si era mai provata prima."
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
