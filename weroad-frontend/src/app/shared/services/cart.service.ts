import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private tripsInCart = new BehaviorSubject<any[]>([]);
  trips$ = this.tripsInCart.asObservable();

  addTrip(trip: any) {
    const currentTrips = this.tripsInCart.value;
    this.tripsInCart.next([...currentTrips, trip]);
  }

  removeTrip(tripId: number) {
    const updatedTrips = this.tripsInCart.value.filter(trip => trip.id !== tripId);
    this.tripsInCart.next(updatedTrips);
  }

  getTrips() {
    return this.tripsInCart.value;
  }

  clearCart() {
    this.tripsInCart.next([]);
  }
}
