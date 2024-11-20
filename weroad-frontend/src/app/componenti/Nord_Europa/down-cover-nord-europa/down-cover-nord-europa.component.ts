import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-nord-europa',
  templateUrl: './down-cover-nord-europa.component.html',
  styleUrls: ['./down-cover-nord-europa.component.css']
})
export class DownCoverNordEuropaComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/18742/viaggio-norvegia-lofoten.webp',
      Citation:"Odino ha dato loro il respiro e l'anima, Vile ha dato loro la capacità di pensare e muoversi, e Ve ha dato loro il potere di parlare, ascoltare e vedere.",
      Author:'La creazione dell\'uomo, mitologia norrena',
      p:"Fare un viaggio in Nord Europa significa puntare la bussola verso le zone più fredde e remote del nostro continente, dove la natura ancora regna sovrana e dove è l'uomo che ha dovuto adattarsi a lei e ai suoi 'capricci'. Terre dal fascino unico, dove l'inverno è fatto di notti infinite con l'aurora che dipinge di verde il cielo stellato, e l'estate di giornate che durano un'eternità, con il sole di mezzanotte che splende all'orizzonte. Dalle highland scozzesi, dove le verdi colline fanno a pugni con il cielo grigio e rabbioso, e le scogliere si gettano a picco sul mare, fino a Capo Nord, il punto più settentrionale del continente europeo, passando tra i fiordi delle Lofoten, costellate dalle rosse casette dei pescatori; poi c'è la Lapponia, con le sue renne e i suoi cani da slitta, e poi, ancora più a nord, la terra del ghiaccio e del fuoco, l'Islanda, dove il vento gelido soffia senza sosta, la terra nera è in continuo subbuglio, i vulcani sono assopiti ma sempre pronti a risvegliarsi, e i ghiacciai resistono stoici ai cambiamenti di questo nostro mondo."
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
