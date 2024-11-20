import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartenzeService } from 'src/app/shared/services/partenze/partenze.service';

@Component({
  selector: 'app-agosto',
  templateUrl: './agosto.component.html',
  styleUrls: ['./agosto.component.css']
})
export class AgostoComponent {
  filteredTrips: any[] = []; 

  onFilteredTrips(trips: any): void {
    this.filteredTrips = trips.trips || trips; 
    console.log('Received filtered trips:', this.filteredTrips);
  }
  mese!: number;
  anno!: number;
  dettagliPartenze: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private partenzeservice: PartenzeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mese = +params.get('mese')!;
      this.anno = +params.get('anno')!;
      this.loadPartenzeData();
    });
  }

  loadPartenzeData(): void {
    this.partenzeservice.getPartenze(this.mese).subscribe((res) => {
      this.dettagliPartenze = res; 
      console.log('Dettagli delle partenze:', this.dettagliPartenze);
    });
  }
}
