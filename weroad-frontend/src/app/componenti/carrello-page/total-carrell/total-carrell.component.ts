import { Component, Input } from '@angular/core';
import { Trip } from '../../../shared/models/trip.model';


@Component({
  selector: 'app-total-carrell',
  templateUrl: './total-carrell.component.html',
  styleUrls: ['./total-carrell.component.css']
})
export class TotalCarrellComponent {
  @Input() trips: Trip[] = [];

  get total(): number {
    return this.trips.reduce((acc, trip) => acc + trip.price, 0);
  }

}
