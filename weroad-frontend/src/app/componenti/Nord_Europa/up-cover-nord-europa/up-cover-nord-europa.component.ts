import { Component } from '@angular/core';

@Component({
  selector: 'app-up-cover-nord-europa',
  templateUrl: './up-cover-nord-europa.component.html',
  styleUrls: ['./up-cover-nord-europa.component.css']
})
export class UpCoverNordEuropaComponent {

  upcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-cover/4830/Viaggi-Europa-del-Nord.webp',
      title:"Verso il Grande Nord",
      subtitle:'Scopri i nostri viaggi in Nord e Centro Europa'
    }
  ]
}
