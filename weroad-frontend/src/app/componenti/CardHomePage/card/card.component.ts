import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  

  card = [
    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/47375/.webp",
      title:"È il tuo primo WeRoad?",
      p:"Qui i nostri consigli!" 
    },

    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/2348/.webp",
      title:"Meno di €1000",
      p:"Tutti i WeRoad per un budget di max €1000"
    },
    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/37807/.webp",
      title:"Barca a vela",
      p:"Salpa nel Mediterraneo"
    },
    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/113424/.webp",
      title:"Nuovi itinerari",
      p:"Scopri le nostre avventure!"
    },
    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/13222/.webp",
      title:"Capodanno 2025",
      p:"Non è mai troppo presto per organizzarsi!"
    },
    {
      Image:"https://strapi-imaginary.weroad.it/resource/webp-medium/110501/.webp",
      title:"Pachamama",
      p:"Lo zaino perfetto WeRoad & Ferrino"
    },
    
  ]


  ngOnInit(): void {
      
  }

  
}