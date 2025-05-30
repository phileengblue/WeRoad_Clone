import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/services/America/cards/cards.service';

@Component({
  selector: 'app-card-destinazioni-africa',
  templateUrl: './card-destinazioni-africa.component.html',
  styleUrls: ['./card-destinazioni-africa.component.css']
})
export class CardDestinazioniAfricaComponent implements OnInit {

 
  nameCountry = [
    { title1: "Marocco" },
    { title2: 'Egitto' },
    { title3: 'Tanzania' },
    { title4: 'Kenya' },
    { title5: 'Namibia' },
    { title6: 'Sudafrica' },
    { title7: 'Paesi inusuali tutti da scoprire' },
  ];

  countries = ['Marocco', 'Egitto', 'Tanzania', 'Kenya', 'Namibia', 
    'Sudafrica'];

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
