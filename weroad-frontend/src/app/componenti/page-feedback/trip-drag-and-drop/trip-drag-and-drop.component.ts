import { Component, OnInit } from '@angular/core';
import { CaroselloService } from 'src/app/shared/services/carosello/carosello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-drag-and-drop',
  templateUrl: './trip-drag-and-drop.component.html',
  styleUrls: ['./trip-drag-and-drop.component.css'],
})
export class TripDragAndDropComponent implements OnInit {
  trip: any[] = [];
  selectedTrips: any[] = [];
  currentStep = 0;
  draggedTrip: any = null;
  originalTripIndices = new Map<any, number>();

  constructor(private caroselloservice: CaroselloService, private router: Router) {}

  ngOnInit(): void {
    this.getTripWithRatings();
  }

  getTripWithRatings() {
    this.caroselloservice.getTrip().subscribe((trips) => {
      this.trip = trips.slice(0, 20); 
      console.log('Lista iniziale di trip:', this.trip);
    });
  }

  onDragStart(event: DragEvent, trip: any) {
    this.draggedTrip = trip;
    event.dataTransfer?.setData('text/plain', trip.id);
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetList: any[]) {
    event.preventDefault();
    if (this.draggedTrip) {
      const sourceList = this.trip.includes(this.draggedTrip) ? this.trip : this.selectedTrips;

      if (sourceList === this.trip && !this.originalTripIndices.has(this.draggedTrip)) {
        const originalIndex = this.trip.indexOf(this.draggedTrip);
        this.originalTripIndices.set(this.draggedTrip, originalIndex);
      }

      if (sourceList !== targetList) {
        if (targetList === this.selectedTrips && this.selectedTrips.length >= 5) {
          alert('Puoi selezionare al massimo 5 viaggi.');
          this.draggedTrip = null;
          return;
        }
        const index = sourceList.indexOf(this.draggedTrip);
        if (index > -1) {
          sourceList.splice(index, 1);
        }
        targetList.push(this.draggedTrip);
      }
      this.draggedTrip = null;
    }
  }

  onDragEnd(event: DragEvent, trip?: any) {
    this.draggedTrip = null;
  }
  
  removeTrip(trip: any): void {
    const index = this.selectedTrips.indexOf(trip);
    if (index >= 0) {
      this.selectedTrips.splice(index, 1); 
      const originalIndex = this.originalTripIndices.get(trip);
      if (originalIndex !== undefined) {
        this.trip.splice(originalIndex, 0, trip);
        this.originalTripIndices.delete(trip); 
      } else {
        this.trip.push(trip);
      }
    }
  }

  onStepChange(stepIndex: number): void {
    if (this.selectedTrips.length < 3 && stepIndex > 0) {
      alert('Per favore, seleziona almeno 3 viaggi per procedere.');
      this.currentStep = 0;
    } else {
      this.currentStep = stepIndex;
    }
  }

  canProceed(): boolean {
    return this.selectedTrips.length >= 3 && this.selectedTrips.length <= 5;
  }

  goToNextPage(): void {
    if (this.canProceed()) {
      this.router.navigate(['/page-questionnaire']); 
    }
  }
}
