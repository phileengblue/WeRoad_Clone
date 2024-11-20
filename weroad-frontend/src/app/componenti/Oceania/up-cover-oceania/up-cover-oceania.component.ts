import { Component } from '@angular/core';

@Component({
  selector: 'app-up-cover-oceania',
  templateUrl: './up-cover-oceania.component.html',
  styleUrls: ['./up-cover-oceania.component.css']
})
export class UpCoverOceaniaComponent {

  upcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-cover/4568/coveroceaniadesktop.webp',
      title:'Siamo mare, siamo oceano',
      subtitle:'Scopri i nostri viaggi in Oceania'
    }
  ]

}
