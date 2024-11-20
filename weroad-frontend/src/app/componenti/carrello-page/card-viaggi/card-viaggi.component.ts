import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-card-viaggi',
  templateUrl: './card-viaggi.component.html',
  styleUrls: ['./card-viaggi.component.css'],
})
export class CardViaggiComponent implements OnInit {
  trips: any[] = []; 

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.trips$.subscribe((trips) => {
      this.trips = trips;
    });
  }

  removeTrip(tripId: number): void {
    this.cartService.removeTrip(tripId); 
  }

  goToHome(): void {
    this.router.navigate(['']); 
  }
}
