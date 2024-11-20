import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  currentView: string = 'Mesi'; // Default view
  tripsByCountry: any;
  
  periodi = [
    { nome: 'Ponte del 1 novembre', icona:"https://cdn.weroad.io/common/images/holiday-icons/special-event.svg", mese:11, anno:2024 },
    { nome: 'Natale', icona: 'https://cdn.weroad.io/common/images/holiday-icons/christmas.svg', mese:12, anno:2024 },
    { nome: 'Capodanno', icona: 'https://cdn.weroad.io/common/images/holiday-icons/new-year.svg', mese:12, anno:2024 },
    { nome: 'Pasqua 2025', icona: 'https://cdn.weroad.io/common/images/holiday-icons/easter.svg', mese:4, anno:2024 },
    { nome: 'Ponte del 25 aprile 2025', icona: 'https://cdn.weroad.io/common/images/holiday-icons/special-event.svg', mese:4, anno:2024 },
    { nome: 'Ponte del 2 giugno 2025', icona: 'https://cdn.weroad.io/common/images/holiday-icons/wb-sunny.svg', mese:6, anno:2024 }
  ];
  filter: any;
  selectedOption: any;
  
  constructor(private breakpointObserver: BreakpointObserver, private navbarservice: NavbarService) {}

  ngOnInit() {

  }

  // Method to switch views
  switchView(view: string): void {
    this.currentView = view;
  }

  getItinerary(country: string) {
    const baseUrl = 'http://localhost:8000/storage/';
    this.navbarservice.getItinerary(country).subscribe((res: any) => {
      const trips = res.trips.map((trip: any) => ({
        ...trip,
        imageUrl: trip.filestorage ? `${baseUrl}/${trip.filestorage.path}` : null
      }));
      this.tripsByCountry[country] = trips;
    });
  }

  getPartenze(nome: string) {
    this.navbarservice.getPartenze1(nome).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  onContinentClick(continentName: string): void {
    this.getItinerary(continentName);
  }

  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

    // Method to handle button click for dropdown options
    selectOption(option: string) {
      this.selectedOption = option;
    }

   
}
