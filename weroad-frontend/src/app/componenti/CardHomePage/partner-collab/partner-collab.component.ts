import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-collab',
  templateUrl: './partner-collab.component.html',
  styleUrls: ['./partner-collab.component.css']
})
export class PartnerCollabComponent {

  partnerSection = [
    {
      title:'Partner',
      p:'Scopri i nostri partner'     
    }
  ]
  
  partnerLogos =[
    
       'https://strapi-imaginary.weroad.it/resource/webp-small/87452/.webp',
       'https://strapi-imaginary.weroad.it/resource/webp-small/25844/.webp',
       'https://strapi-imaginary.weroad.it/resource/webp-small/122337/.webp',
       'https://strapi-imaginary.weroad.it/resource/webp-small/113857/.webp',
       'https://strapi-imaginary.weroad.it/resource/webp-small/118073/.webp'
    
  ]
https: any;

}
