import { Component } from '@angular/core';

@Component({
  selector: 'app-up-cover',
  templateUrl: './up-cover.component.html',
  styleUrls: ['./up-cover.component.css']
})
export class UpCoverComponent {

  upcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-cover/4441/Grand-Canyon-Stati-Uniti.webp',
      title:'Good morning America',
      subtitle:'Scopri i nostri tour in Nord America'
    }
  ]

}
