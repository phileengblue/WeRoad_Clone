import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carosello-giornali',
  templateUrl: './carosello-giornali.component.html',
  styleUrls: ['./carosello-giornali.component.css']
})
export class CaroselloGiornaliComponent {
  carouselTitle = ["Dicono di noi"];

  caroselloGiornali = [
    { p: "10 Location Luxury nel mondo: quando l'alloggio impreziosisce il viaggio e il WeRoad diventa un itinerario Collection ", logo: 'https://strapi-imaginary.weroad.it/resource/webp-small/89515/.webp' },
    { p: "Carola Ludovica Farci, globetrotter e Coordinatrice WeRoad che viaggia per trasformare la plastica in alberi", logo: 'https://strapi-imaginary.weroad.it/resource/webp-small/89517/.webp' },
    { p: "Svezia “on the road”, da Stoccolma a Luleå a caccia dell'aurora boreale: l'itinerario perfetto coi consigli di WeRoad", logo: 'https://strapi-imaginary.weroad.it/resource/webp-small/89518/.webp' },
    { p: "Nella community di viaggiatori WeRoad il lungo raggio rimane un must: i millennial europei scelgono Giordania, Cuba e Giappone", logo: 'https://strapi-imaginary.weroad.it/resource/webp-small/89514/.webp' }
  ];

  currentSlide = 0;
  visibleGiornali = this.caroselloGiornali.slice(0, 3);  

  scrollLeft() {
    this.currentSlide = (this.currentSlide - 1 + this.caroselloGiornali.length) % this.caroselloGiornali.length;
    this.updateVisibleItems();
  }

  scrollRight() {
    this.currentSlide = (this.currentSlide + 1) % this.caroselloGiornali.length;
    this.updateVisibleItems();
  }

  //updateVisibleItems() {
    // carosello per gestire i 3 elementi + 1
    //const startIndex = this.currentSlide;
    //const endIndex = (this.currentSlide + 3) % this.caroselloGiornali.length;

    //if (startIndex < endIndex) {
     // this.visibleGiornali = this.caroselloGiornali.slice(startIndex, endIndex + 1);
    //} else {
      //this.visibleGiornali = [
        //...this.caroselloGiornali.slice(startIndex),
        //...this.caroselloGiornali.slice(0, endIndex + 1)
     // ];
   // }
  //}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileView();
  }

  isMobileView() {
    return window.innerWidth <= 768;
  }

  updateVisibleItems() {
    const numVisibleItems = window.innerWidth <= 1024 && window.innerWidth > 768 ? 2 : 3;
    const startIndex = this.currentSlide;
    const endIndex = (this.currentSlide + numVisibleItems - 1) % this.caroselloGiornali.length;

    if (startIndex <= endIndex) {
        this.visibleGiornali = this.caroselloGiornali.slice(startIndex, endIndex + 1);
    } else {
        this.visibleGiornali = [
            ...this.caroselloGiornali.slice(startIndex),
            ...this.caroselloGiornali.slice(0, endIndex + 1)
        ];
    }
}

}
