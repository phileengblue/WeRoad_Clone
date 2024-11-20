import { Component } from '@angular/core';

@Component({
  selector: 'app-card-coordinatore',
  templateUrl: './card-coordinatore.component.html',
  styleUrls: ['./card-coordinatore.component.css']
})
export class CardCoordinatoreComponent {
  cards = [
    {
      
      title:"Esplora il mondo",
      p:"Se pensi che essere Coordinatore significhi viaggiare gratis... beh, ci sei quasi. Come Coordinatore WeRoad, viaggerai sempre completamente spesato: voli intercontinentali, alloggio, cibo e bevande, trasferimenti e attività in loco.",
      image: "https://strapi-imaginary.weroad.it/resource/webp-small/39385/trip-vietnam-group-dragon-selfie-december-winter.webp",
     
    },
    {
     
      title:"Condividi esperienze",
      p:" La parte più emozionante di questo lavoro? Sono i compagni di viaggio: condividere le stesse passioni, avere lunghe conversazioni, vederli uscire dalla loro comfort zone e mettersi in gioco, affrontare piccoli e grandi problemi, sempre con il sorriso sulle labbra.",
      image:"https://strapi-imaginary.weroad.it/resource/webp-small/42771/bali-local-group-selfie-january-winter.webp",
    
    },
    {
     
      title: "Conosci nuovi amici",
      p: "Conoscerai tante persone diverse che condividono il tuo stesso amore per i viaggi: una community di Coordinatori (non solo italiana, ma anche inglese, spagnola, francese e tedesca!), i membri del team WeRoad e i WeRoaders, compagni di viaggio con cui vivrai avventure indimenticabili.",
      image: "https://strapi-imaginary.weroad.it/resource/webp-small/39384/cuba-hills-horse-ride-group-funny-december-winter.webp",
     
    }
  ];
}