import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-card-destinazioni-europa',
  templateUrl: './card-destinazioni-europa.component.html',
  styleUrls: ['./card-destinazioni-europa.component.css']
})
export class CardDestinazioniEuropaComponent implements OnInit {
  navigate(url: string | undefined): void {
    if (url) {
      window.location.href = url;
    } else {
      console.warn('URL is not defined for this card.');
    }
  }
  
  isMobileView: boolean = false;

  //Base dell'array
  //{
  //  Image:'',
  //  Country_name:'',
  //  p:'',
  //  button:''
  //}

    cardDestEu = [
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/12723/viaggio-di-gruppo-islanda-weroad-seljalandsfoss.webp',
        Country_name:'Paesi nordici',
        p:"Fare un viaggio in Nord Europa significa puntare la bussola verso le zone più fredde e remote del nostro continente, dove la natura ancora regna sovrana. Ricorda: tra l'estremo nord e l'Italia ci sono un sacco di paesi da visitare di cui spesso ci dimentichiamo. Scoprili!",
        button:'Ho già pronto lo zaino',
        src:'viaggi-itinerari-nord-europa'
      },
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/19556/spagna-tour-weroad-andalusia-el-caminito-del-rey.webp',
        Country_name:'Spagna e Portogallo',
        p:'Canarie, Azzorre, Lisbona, Siviglia... tra tapas y sangria, si va?',
        button:'¡Estoy listo!',
        src:'europaovest'
      },
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/86554/.webp',
        Country_name:'Francia, Belgio e Paesi Bassi',
        p:"Da Parigi ad Amsterdam, passando da Bruxelles. Un mix di architettura, storia, moda, vita notturna ed esperienze uniche nell'entroterra o oltremare!",
        button:'Oui Oui!',
        src:'viaggi-francia'
      },
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/4414/Alessandro-Pozzi-sardegna-sail-4.webp',
        Country_name:'Italia',
        p:'Abbiamo la fortuna di vivere nel Paese più bello del mondo: mare incredibile, paesaggi da cartolina e, se proprio dobbiamo specificarlo: quanto è buono il cibo italiano?',
        button:'Dove si va?'
      },
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/1412/viaggio-grecia-tour-8-giorni.webp',
        Country_name:'Grecia e Balcani',
        p:'Dalle isole vulcaniche a quelle dalle alte scogliere rocciose, casette bianche che fanno a pugni con il blu intenso del Mar Egeo e Mediterraneo.',
        button:'Yamas!',
        src:'viaggi-itinerari-grecia'
      },
      {
        Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/74826/.webp',
        Country_name:"Europa dell'Est",
        p:'Da Budapest a Tallin, da Praga a Bucarest. Storia, cucina, tradizione, natura: scopri i paesi emergenti nel panorama turistico europeo in tutte le loro sfaccettature.',
        button:'Fammi scoprire',
        src:'viaggi-est-europa'
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
