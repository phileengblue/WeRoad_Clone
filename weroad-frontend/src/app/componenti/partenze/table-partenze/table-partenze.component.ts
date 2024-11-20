import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TablePartenzeService } from '../../../shared/services/partenze/table/table-partenze.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-partenze',
  templateUrl: './table-partenze.component.html',
  styleUrls: ['./table-partenze.component.css'],
  providers: [DatePipe]
})
export class TablePartenzeComponent implements OnInit, OnChanges {
  
  @Input() trips: any[] = []; 
  @Input() upcover: any = {}; 

  itemsPerPage = 20;
  currentPage = 1;
  allTrips: any[] = []; 
  displayTrips: any[] = []; 
  year: number = 2024;

  constructor(
    private tableservice: TablePartenzeService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.calculateYear(); 
    this.loadPartenze();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trips']) {
      console.log('Trips changed:', this.trips); 

      if (this.trips && this.trips.length > 0) {
        this.displayTrips = [...this.trips];
      } else {
        this.displayTrips = [...this.allTrips];
      }

      this.currentPage = 1;
      console.log('Display trips updated:', this.displayTrips); 
    }

    if (changes['upcover'] && changes['upcover'].currentValue) {
      console.log('Upcover changed:', this.upcover);
      this.calculateYear(); 
      this.loadPartenze();
    }
  }

  calculateYear(): void {
    if (this.upcover && this.upcover.month && this.upcover.month.id !== undefined) {
      const selectedMonth = this.upcover.month.id;
      this.year = selectedMonth >= 9 ? 2024 : 2025; 
    } else {
      this.year = 2024; 
    }
  }

  // Metodo per caricare i dati in base a upcover
  loadPartenze() {
    let month = 0; 

    if (this.upcover && this.upcover.month && this.upcover.month.id !== undefined) {
      month = this.upcover.month.id; 
    }

    console.log(`Caricamento partenze per mese: ${month}, anno: ${this.year}`);
    this.getPartenze(month, this.year);
  }

  // Metodo per caricare tutti i dati inizialmente
  getPartenze(month: number, year: number) {
    this.tableservice.getPartenze(month, year).subscribe((res: any) => {
      this.allTrips = res; // Usa i dati direttamente
      this.displayTrips = this.allTrips; 
      this.currentPage = 1;
    });
  }

  // Metodo per calcolare dinamicamente il numero totale di pagine
  get totalPages(): number {
    return Math.ceil(this.displayTrips.length / this.itemsPerPage);
  }

  // Metodo per ottenere i turni della pagina corrente
  get paginatedTurns() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.displayTrips.slice(startIndex, endIndex);
  }

  // Metodi per cambiare pagina
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Aggiorna il numero di elementi per pagina
  updateItemsPerPage(newItemsPerPage: number) {
    this.itemsPerPage = newItemsPerPage;
    this.currentPage = 1; 
  }

  // Metodo per ottenere l'icona di stato
  getStatusIcon(status: string): string {
    switch (status?.toUpperCase()) {
      case 'CONFERMATO':
        return 'fa-solid fa-thumbs-up text-success';
      case 'ULTIMI POSTI':
        return 'fas fa-fire text-danger';
      case 'ON REQUEST':
        return 'fa-solid fa-clock-rotate-left text-warning';
      default:
        return '';
    }
  }
}
