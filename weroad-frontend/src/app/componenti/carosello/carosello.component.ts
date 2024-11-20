import { Component, OnInit } from '@angular/core';
import { CaroselloService } from 'src/app/shared/services/carosello/carosello.service';
import { Router } from '@angular/router';
import { ShoDetailsService } from 'src/app/shared/services/showDetail/sho-details.service';
import { CartService } from 'src/app/shared/services/cart.service'; 

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css'],
})
export class CaroselloComponent implements OnInit {
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
  DettagliShow: any[] = [];

  notification: string | null = null;
  notificationType: 'success' | 'error' | null = null;

  constructor(
    private caroselloservice: CaroselloService,
    private router: Router,
    private ShowService: ShoDetailsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getTripWithRatings();
    this.getShowPagine(1);
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

  navigateToShow(show: number): void {
    this.router.navigate(['/details-trip', show]);
  }

  getShowPagine(show: number) {
    this.ShowService.getShow(show).subscribe((res) => {
      this.DettagliShow = res;
      console.log(this.DettagliShow);
    });
  }

  addToCart(trip: any): void {
    const currentTrips = this.cartService.getTrips();

    if (currentTrips.some((t) => t.id === trip.id)) {
      this.showNotification('Questo viaggio è già nel carrello!', 'error');
    } else {
      this.cartService.addTrip(trip);
      this.showNotification('Viaggio aggiunto al carrello!', 'success');
    }
  }

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = message;
    this.notificationType = type;

    setTimeout(() => {
      this.notification = null;
      this.notificationType = null;
    }, 3000);
  }
}
