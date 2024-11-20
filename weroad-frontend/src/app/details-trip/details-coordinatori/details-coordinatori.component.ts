import { Component } from '@angular/core';

@Component({
  selector: 'app-details-coordinatori',
  templateUrl: './details-coordinatori.component.html',
  styleUrls: ['./details-coordinatori.component.css']
})
export class DetailsCoordinatoriComponent {
  coordinators = [
    {image:"../../assets/trip-details/coordinators/image-1.png"},
    {image:"../../assets/trip-details/coordinators/image-2.png"},
    {image:"../../assets/trip-details/coordinators/image-3.png"},
    {image:"../../assets/trip-details/coordinators/image-4.png"},
  ]
}
