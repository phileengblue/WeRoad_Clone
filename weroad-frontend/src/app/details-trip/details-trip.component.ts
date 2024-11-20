import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoDetailsService } from 'src/app/shared/services/showDetail/sho-details.service';

@Component({
  selector: 'app-details-trip',
  templateUrl: './details-trip.component.html',
  styleUrls: ['./details-trip.component.css']
})
export class DetailsTripComponent implements OnInit {
  tripDetails: any; 
  close: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private showService: ShoDetailsService
  ) {}

  ngOnInit(): void {
    const tripId = Number(this.route.snapshot.paramMap.get('id')); 
    this.loadTripDetails(tripId);
  }

  loadTripDetails(id: number): void {
    this.showService.getShow(id).subscribe(
      (details) => {
        this.tripDetails = details.trip; 
      },
      (error) => {
        console.error('Errore nel caricamento dei dettagli del viaggio:', error);
      }
    );
  }

  closeBanner() {
    this.close = !this.close;
  }
}
