import { Component } from '@angular/core';
import { CaroselloService } from 'src/app/shared/services/carosello/carosello.service';

@Component({
  selector: 'app-carosello-details',
  templateUrl: './carosello-details.component.html',
  styleUrls: ['./carosello-details.component.css']
})
export class CaroselloDetailsComponent {
  carossello = [
    {
      title: 'Marocco: dal deserto alle città da mille e una notte',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/21464/trip-morocco-adventure-desert-autumn.webp',
      days: 9,
      price: 899,
      rating: 4.8,
      src: 'trip-details',
    },
    {
      title: 'Marocco Express: Marrakech, Essaouira e il deserto',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/27265/viaggio-marocco-avventura-deserto-sahara-agosto-estate.webp',
      days: 5,
      price: 539,
      rating: 4.9,
    },
    {
      title: 'Indonesia 360°',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/24161/viaggio-giordania-avventura-deserto-wadi-rum-novembre-autunno.webp',
      days: 8,
      price: 854,
      rating: 4.7,
    },
    {
      title: 'Giordania 360°',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/19842/viaggio-avventura-indonesia-bali-estate-weroad.webp',
      days: 13,
      price: 1499,
      rating: 4.5,
    },
    {
      title: 'Corfù Beach Life',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/25276/viaggio-sri-lanka-montagna-ponte-primavera.webp',
      days: 12,
      price: 999,
      rating: 4.8,
    },
    {
      title: 'Sri Lanka 360° Summer',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/584/.webp',
      days: 8,
      price: 799,
      rating: 4.8,
    },
  ];

  carosello1 = [
    {
      title: 'Vietnam 360°: da Hanoi a Ho Chi Minh City',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/4194/vietnam-de-hanoi-a-ho-chi-minh-city.jpg',
      days: 13,
      price: 1299,
      rating: 4.9,
    },
    {
      title: 'Perù 360°: Machu Picchu, Montagna Arcobaleno e il lago Titicaca',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/47375/viaggio-peru-gruppo-avventura-trekking-estate.jpg',
      days: 12,
      price: 1715,
      rating: 4.9,
    },
    {
      title: "Islanda Expedition: nell'isola del ghiaccio e del fuoco in tenda",
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/4171/viaggio-islanda-panorama-montagne-tende-estatenno-jpg.webp',
      days: 9,
      price: 1055,
      rating: 4.9,
    },
    {
      title:
        'Far West 360°: Los Angeles, Las Vegas e i grandi parchi americani',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/21806/far-west-monument-valley-on-the-road-autunno.jpg',
      days: 12,
      price: 1619,
      rating: 4.9,
    },
    {
      title:
        'Thailandia Backpack Summer: da Bangkok a Koh Phangan passando per il parco di Khao Sok',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/9366/viaggio-di-gruppo-thailandia-weroad-estate.webp',
      days: 11,
      price: 1124,
      rating: 4.9,
    },
    {
      title: 'Canarie: Tenerife 360°',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/24178/tenerife-mare-panorama-montagne-primavera.jpg',
      days: 8,
      price: 999,
      rating: 4.9,
    },
  ];

  carosello2 = [
    {
      title: 'Cuba 360°: a ritmo di salsa da Havana a Trinidad',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/44398/viaggio-cuba-cayo-santa-maria-macchina-strada-mare-agosto-estate.jpg',
      days: 12,
      price: 1055,
      rating: 4.9,
    },
    {
      title: 'Creta Beach Life',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/9436/viaggio-di-gruppo-creta-weroad.jpg',
      days: 8,
      price: 849,
      rating: 4.9,
    },
    {
      title: 'Thailandia Beach Life Summer: da Bangkok a Koh Tao e Koh Samui',
      image:
        'https://strapi-imaginary.weroad.it/resource/webp-icon/90686/.webp',
      days: 10,
      price: 999,
      rating: 4.9,
    },
    {
      title:
        ' Sicilia Ovest: beach life tra Favignana, San Vito lo Capo e la Riserva dello Zingaro',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/25663/viaggio-sicilia-mare-barca-vela-estate.jpg',
      days: 8,
      price: 949,
      rating: 4.9,
    },
    {
      title: 'Albania: Tirana e le spiagge del Sud',
      image:
        'https://strapi-imaginary.weroad.it/resource/icon/4023/viaggio-albania-tour-8-giorni.jpg',
      days: 8,
      price: 799,
      rating: 4.9,
    },
    {
      title: 'Corfù Beach Life',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/584/.webp',
      days: 8,
      price: 799,
      rating: 4.9,
    },
  ];

  imgCarosello = [
    {
      img1: 'https://cdn.weroad.io/common/images/highlights/webp-desktop/beach.webp',
    },
    {
      img2: 'https://cdn.weroad.io/common/images/highlights/webp-desktop/northern-lights.webp',
    },
  ];

  trip: any[] = [];
  rating: any[] = [];

  constructor(private caroselloservice: CaroselloService) {}

  ngOnInit(): void {
    this.getTripWithRatings();
  }

  getTripWithRatings() {
    this.caroselloservice.getTrip().subscribe((trips) => {
      this.trip = trips.slice(0, 6);
      this.trip.forEach((trip, index) => {
        this.getRatingForTrip(trip, index);
      });
    });
  }

  getRatingForTrip(trip: any, index: number) {
    this.caroselloservice.getRating(trip.id).subscribe((rating) => {
      this.trip[index].vote = rating.vote;
      console.log(`${trip.title}:`, rating.vote);
    });
  }
}
