import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
 
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  isMobileView: boolean = false;
  isTabletView: boolean = false;
 
  cards = [
    {
      quest: "CHI CONOSCERAI?",
      title: "Nuovi amici",
      p: "Vogliamo creare connessioni tra persone, culture e storie e per farlo organizziamo viaggi di gruppo composti da un massimo di 15 persone, divisi in fasce di età. Partirai da solo, ma tornerai a casa con 15 nuovi amici.",
      image: "https://cdn.weroad.io/common/images/company-values/jpg/friends.jpg",
      bgColor: "#cce5f6"
    },
    {
      quest: "CHI TI GUIDERÀ?",
      title: "Un Coordinatore",
      p: "In viaggio con te ci sarà sempre un Coordinatore WeRoad: un viaggiatore appassionato e formato che guiderà te e il gruppo in nuove avventure. In destinazioni si occuperà della parte logistica e ti garantirà un viaggio senza sbatti.",
      image: "https://cdn.weroad.io/common/images/company-values/jpg/coordinator.jpg",
      bgColor: "#f2e8e0"
    },
    {
      quest: "CHE SUCCEDERÀ?",
      title: "Avventure uniche",
      p: "Spingiamo i nostri viaggiatori ad uscire dalla loro comfort zone, e lo facciamo includendo nei nostri viaggi delle esperienze uniche che vale la pena vivere e condividere. Preparati a metterti in gioco e a scoprire nuovi lati di te.",
      image: "https://cdn.weroad.io/common/images/company-values/jpg/adventure.jpg",
      bgColor: "#f9f7f2"
    }
  ];
 
  constructor(private breakpointObserver: BreakpointObserver) {}
 
  ngOnInit(): void {
    this.breakpointObserver.observe([
      '(max-width: 767px)',
      '(min-width: 768px) and (max-width: 1024px)'
    ]).subscribe(result => {
      this.isMobileView = result.breakpoints['(max-width: 767px)'];
      this.isTabletView = result.breakpoints['(min-width: 768px) and (max-width: 1024px)'];
    });
  }
}
 
