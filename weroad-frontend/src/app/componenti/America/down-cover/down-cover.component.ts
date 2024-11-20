import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover',
  templateUrl: './down-cover.component.html',
  styleUrls: ['./down-cover.component.css']
})
export class DownCoverComponent implements OnInit {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11208/Horseshoe-Bend-Stati-Uniti.webp',
      Citation:'"In America l’unico peccato è porsi dei limiti"',
      Author:'R.W. Emerson',
      p:'Quanti tour del Nord America si possono fare in una vita? Quanti sono i paesaggi da scoprire, in questa terra che si estende dall’Alaska alla Groenlandia, dal Mar Glaciale Artico fino al Golfo del Messico, dallo Yukon alle isole Keys? Un alternarsi di città modernissime e immensi spazi aperti: tra le Grandi Pianure, le Rocky Mountains e gli Appalachi sorgono metropoli come New York, Chicago, Vancouver, Toronto e San Francisco. È in queste terre che i grandi esploratori vennero a cercare l’oro, percorrendo miglia e miglia per inseguire il grande sogno americano, e noi non saremo da meno, scoprendo l’America del Nord con viaggi on the road lungo le sue strade che non sembrano avere una fine. Sono proprio le strade, immerse nei deserti e nelle foreste, che ci invitano a esplorare quello che l’occhio non riesce a vedere, e ci spingono a cercare “qualcosa”, che forse è proprio quel senso di libertà che difficilmente si può trovare in altri luoghi del mondo.'
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
