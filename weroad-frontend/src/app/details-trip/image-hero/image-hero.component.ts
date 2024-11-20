import { Component , HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-image-hero',
  templateUrl: './image-hero.component.html',
  styleUrls: ['./image-hero.component.css']
})
export class ImageHeroComponent {
  @Input() trip: any; 

  upcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-cover/24047/zanzibar-spiaggia-mare-barche-febbraio-inverno.webp',
      title:"Zanzibar 360°",
      rating:4.9,
      numberReview:10,
      firstDepartureDate: '30 nov',  
      duration: '8 giorni - 7 notti'
    }
  ]
  isTabletOrMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isTabletOrMobile = screenWidth <= 1024;  
  }
}
