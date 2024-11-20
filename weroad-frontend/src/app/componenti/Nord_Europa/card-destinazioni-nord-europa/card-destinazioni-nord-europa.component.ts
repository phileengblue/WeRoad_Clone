import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/services/America/cards/cards.service';

@Component({
  selector: 'app-card-destinazioni-nord-europa',
  templateUrl: './card-destinazioni-nord-europa.component.html',
  styleUrls: ['./card-destinazioni-nord-europa.component.css']
})
export class CardDestinazioniNordEuropaComponent  implements OnInit{

  nameCountry = [
    { title1: "Islanda" },
    { title2: 'Norvegia' },
    { title3: 'Finlandia' },
    { title4: 'Danimarca' },
    { title5: 'Regno Unito e Irlanda' },
    { title6: 'Germania, Austria e Svizzera' },
    { title7: 'Svezia' }
  ];

  countries = ['Islanda', 'Norvegia', 'Finlandia', 'Danimarca', 'Regno Unito e Irlanda', 
    'Germania, Austria e Svizzera', 'Svezia'];

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
