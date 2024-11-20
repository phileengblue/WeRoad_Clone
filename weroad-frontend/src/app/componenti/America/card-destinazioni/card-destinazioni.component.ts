import { Component, OnInit} from '@angular/core';
import { CardsService } from 'src/app/shared/services/America/cards/cards.service';

@Component({
  selector: 'app-card-destinazioni',
  templateUrl: './card-destinazioni.component.html',
  styleUrls: ['./card-destinazioni.component.css']
})
export class CardDestinazioniComponent implements OnInit{


  //Base dell'array
  //{
  //  Image:"",
  //  title:"",
  //  rating:"",
  //  price:"",
  //  day:"",
  //  logo:""
  //},


  

  nameCountry =[
    {
      title1:"Stati Uniti d'America"
    },
    {
      title2:'Canada'
    }
  ]

 countries = ["Stati Uniti d'America", 'Canada' ];

   // Oggetto per memorizzare i trips per ogni nazione
  tripsByCountry: { [key: string]: any[] } = {};

   constructor(private cardservice: CardsService) {}

  ngOnInit(): void {
     // Chiama getItinerary per ogni paese in countries
    this.countries.forEach(country => {
    this.getItinerary(country);
    });
   }

  getItinerary(country: string) {
    const baseUrl = 'http://localhost:8000/storage/';
    
   this.cardservice.getItinerary(country).subscribe((res: any) => {
   const trips = res.trips.map((trip: any) => ({
   ...trip,
   imageUrl: trip.filestorage ? `${baseUrl}/${trip.filestorage.path}` : null
  }));

  // Assegna i trips all'array corrispondente alla nazione
  this.tripsByCountry[country] = trips;

  // Chiama la funzione per ottenere le valutazioni per ogni viaggio
  this.getTripWithRatings(country);
   });
   }

   getTripWithRatings(country: string) {
  // Itera sui viaggi del paese e ottieni le valutazioni per ciascuno
  this.tripsByCountry[country].forEach((trip, index) => {
  this.getRatingForTrip(trip, index, country);
  });
  }

  getRatingForTrip(trip: any, index: number, country: string) {
  this.cardservice.getRating(trip.id).subscribe((rating) => {
  // Assegna il voto al trip corrente
  this.tripsByCountry[country][index].vote = rating.vote;
  console.log(`${trip.title} (${country}):`, rating.vote);
  });
  }
}