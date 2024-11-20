import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-asia',
  templateUrl: './down-cover-asia.component.html',
  styleUrls: ['./down-cover-asia.component.css']
})
export class DownCoverAsiaComponent implements OnInit {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/8666/taj-mahal-viaggi-asia-mobile.webp',
      Citation:"Lo spirito dell'Asia è mistero, contemplazione, riposo. Il suo sguardo è fisso, profondo, continuo, solenne. L'Asia è il giardino di Dio",
      Author:'Giuseppe Vannicola',
      p:"Se contiamo tutte le sue parti, l’Asia vince il primato del continente più esteso al mondo, oltre ad essere l’unico bagnato da tre oceani - un viaggio qui è uno di quelli che un po' ti cambia la vita. Culla di antichi imperi, a renderlo unico è l’incredibile varietà di popoli che lo abitano, assieme alle loro religioni e tradizioni: la cultura di queste terre sta sospesa nell’aria e si respira nei gesti semplici di tutti i giorni. Chi viaggia in queste terre è consapevole che incontrerà sempre sorrisi accoglienti e parole di benvenuto e che incrocerà gli sguardi profondi di chi nasconde antichi segreti e conosce già, in cuor suo, il futuro del mondo. Noi lo esploriamo in tutte le sue sfaccettature: dalle moderne metropoli del Giappone fino ai villaggi immersi nella giungla dello Sri Lanka, dalle vette himalayane del Nepal fino ai templi dell'India, e poi fino in Thailandia, Vietnam e Indonesia tra parchi nazionali incredibili, spiagge da sogno e il contrasto tra la spiritualità dei templi e la frenesia delle grandi città."
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
