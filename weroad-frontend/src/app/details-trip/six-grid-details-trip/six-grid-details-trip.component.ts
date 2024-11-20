import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-six-grid-details-trip',
  templateUrl: './six-grid-details-trip.component.html',
  styleUrls: ['./six-grid-details-trip.component.css']
})
export class SixGridDetailsTripComponent implements OnChanges {
  @Input() trip: any; 
  card: Array<{ image: string }> = [];

  currentImageIndex = 0;
  isModalOpen = false;

  ngOnChanges(): void {
    if (this.trip?.images?.length > 1) {
      this.card = this.trip.images.slice(1).map((img: any) => ({
        image: img.url
      }));
    }
  }

  openImageModal(index: number): void {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.card.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.card.length) % this.card.length;
  }

  getCurrentImage(): string {
    return this.card[this.currentImageIndex]?.image || '';
  }

  getGridImages(): Array<{ image: string }> {
    return this.card.slice(0, 6); 
  }
}
