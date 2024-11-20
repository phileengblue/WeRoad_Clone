import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-oceania',
  templateUrl: './down-cover-oceania.component.html',
  styleUrls: ['./down-cover-oceania.component.css']
})
export class DownCoverOceaniaComponent implements OnInit {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11212/oceania-desktop.webp',
      Citation:'"L’Oceania è ospitale e generosa, l’Oceania è l’umanità che si innalza da profondità marine e da regioni di fuoco ancora più profonde, l’Oceania siamo noi. Siamo mare, siamo oceano."',
      Author:'Epeli Hau’ofa',
      p:'Il Nuovissimo Continente che non è un continente: in Oceania sono gli oceani a fare da padroni al panorama e le terre emerse, ad eccezione dell’Australia, sono piccole isole di pace e serenità lontane dal caos frenetico del resto del mondo. Per secoli chi è nato in queste terre ha vissuto rispettando la legge e i ritmi del mare e continuerà a seguirli fino a che questi luoghi resteranno puri ed incontaminati in tutta la loro naturale bellezza.'
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
