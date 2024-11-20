import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-tris-card-coordinatori',
  templateUrl: './tris-card-coordinatori.component.html',
  styleUrls: ['./tris-card-coordinatori.component.css']
})
export class TrisCardCoordinatoriComponent implements OnInit {
  isMobileView: boolean = false;

  cards =[
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-small/122066/.webp',
      title:'Prima della partenza',
      p:'Nel momento in cui il Coordinatore viene assegnato al tuo viaggio, potrai trovare il suo numero di telefono nella tua Area Personale MyWeRoad. Circa 15 giorni prima della partenza, il Coordinatore creerà il gruppo WhatsApp per fornire a te e al resto del gruppo informazioni sul viaggio e sulle attività ed escursioni extra che potrete fare.'
    },
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-small/122071/.webp',
      title:'Durante il viaggio',
      p:"Una volta partiti,il Coordinatore si occupa della parte logistica del viaggio, effettuando i check-in negli hotel, assicurandosi che i transfer siano in orario, e tutte quelle altre cose un po' noiose che riguardano un viaggio. Inoltre,è responsabile e gestisce la cassa comune, che solitamente raccoglie il primo giorno in valuta locale, e si assicura che tutti si godano il viaggio al massimo"
    },
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-small/122067/.webp',
      title:'Dopo il rientro',
      p:'E una volta a casa? La parte più difficile di ogni viaggio è salutarsi, ma non temere: potrai continuare a sentire i tuoi compagni di viaggio nel gruppo WhatsApp e organizzare magari qualche Reunion per rivedervi tutti. E chissà, potresti ripartire per un nuovo WeRoad con lo stesso Coordinatore che ti ha accompagnato in quello precedente!'
    }
  ]


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobileView = result.matches;
        console.log('Is Mobile View:', this.isMobileView);
      });
  }

  

}
