import { Component, Output, Input,EventEmitter } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { FilterPartenzeService } from 'src/app/shared/services/partenze/filter/filter-partenze.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filteredTrips = new EventEmitter<any[]>();
  @Input() upcover: any = {}; 


  date = new Date(2024, 9); 
  mode: NzCalendarMode = 'month';
  isVisible = false;
  dateRange = '';
  numeroFiltri = 4;
  currentPage: string = '';
  itinerary_name: any[] = [];
  isMobile: boolean = false;
  selectedDoveText: string = 'Dove';
  filteredTripsCount: number = 0;
  counter: number = 0;


   startDate = new Date(2024, 9, 12); 
   endDate = new Date(2024, 9, 20); 

  selectedItinerary: string = '';
  selectedPriceMin: number | null = null;
  selectedPriceMax: number | null = null;
  selectedAgeRange: string = '';
  selectedStatus: string[] = [];
  selectedDurationMin: number | null = null;
  selectedDurationMax: number | null = null;

  handleCancel(): void {
    this.isVisible = false;
  }

  changePage(page: string) {
    this.currentPage = page;
  }

 // Funzione chiamata quando cambia il pannello (mese/anno)
 panelChange(change: { date: Date; mode: string }): void {
  this.mode = change.mode as NzCalendarMode;
}

  continents = [
    {
      name: 'Asia',
      countries: [
        { name: 'Arabia Saudita', selected: false },
        { name: 'Armenia', selected: false },
        { name: 'Azerbaigian', selected: false },
        { name: 'Bahrein', selected: false },
        { name: 'Bhutan', selected: false },
        { name: 'Laos e Cambogia', selected: false },
        { name: 'Cina', selected: false },
        { name: 'Corea del Sud', selected: false },
        { name: 'Emirati Arabi', selected: false },
        { name: 'Filippine', selected: false },
        { name: 'Georgia', selected: false },
        { name: 'Giappone', selected: false },
        { name: 'Giordania', selected: false },
        { name: 'India', selected: false },
        { name: 'Indonesia', selected: false },
        { name: 'Kazakistan', selected: false },
        { name: 'Kirghizistan', selected: false },
        { name: 'Maldive', selected: false },
        { name: 'Malesia e Singapore', selected: false },
        { name: 'Mongolia', selected: false },
        { name: 'Nepal', selected: false },
        { name: 'Oman', selected: false },
        { name: 'Qatar', selected: false },
        { name: 'Sri Lanka', selected: false },
        { name: 'Taiwan', selected: false },
        { name: 'Thailandia', selected: false },
        { name: 'Turchia', selected: false },
        { name: 'Turkmenistan', selected: false },
        { name: 'Uzbekistan', selected: false },
        { name: 'Vietnam', selected: false },
      ],
    },
    {
      name: 'Europa',
      countries: [
        { name: 'Albania', selected: false },
        { name: 'Germania, Austria e Svizzera', selected: false },
        { name: 'Belgio', selected: false },
        { name: 'Bosnia ed Erzegovina', selected: false },
        { name: 'Bulgaria', selected: false },
        { name: 'Cipro', selected: false },
        { name: 'Croazia', selected: false },
        { name: 'Danimarca', selected: false },
        { name: 'Estonia', selected: false },
        { name: 'Finlandia', selected: false },
        { name: 'Francia', selected: false },
        { name: 'Fær Øer', selected: false },
        { name: 'Grecia', selected: false },
        { name: 'Islanda', selected: false },
        { name: 'Italia', selected: false },
        { name: 'Lussemburgo', selected: false },
        { name: 'Macedonia del Nord', selected: false },
        { name: 'Malta', selected: false },
        { name: 'Moldavia', selected: false },
        { name: 'Montenegro', selected: false },
        { name: 'Norvegia', selected: false },
        { name: 'Paesi Bassi', selected: false },
        { name: 'Polonia', selected: false },
        { name: 'Portogallo', selected: false },
        { name: 'Regno unito e Irlanda', selected: false },
        { name: 'Rep. Ceca', selected: false },
        { name: 'Romania', selected: false },
        { name: 'Serbia', selected: false },
        { name: 'Slovacchia', selected: false },
        { name: 'Slovenia', selected: false },
        { name: 'Spagna', selected: false },
        { name: 'Svalbard e Jan Mayen', selected: false },
        { name: 'Svezia', selected: false },
        { name: 'Ungheria', selected: false },
      ],
    },
    {
      name: 'America',
      countries: [
        { name: 'Antigua e Barbuda', selected: false },
        { name: 'Argentina', selected: false },
        { name: 'Aruba', selected: false },
        { name: 'Belize', selected: false },
        { name: 'Bolivia', selected: false },
        { name: 'Brasile', selected: false },
        { name: 'Canada', selected: false },
        { name: 'Cile', selected: false },
        { name: 'Colombia', selected: false },
        { name: 'Costa Rica', selected: false },
        { name: 'Cuba', selected: false },
        { name: 'Ecuador', selected: false },
        { name: 'El Salvador', selected: false },
        { name: 'Giamaica', selected: false },
        { name: 'Groenlandia', selected: false },
        { name: 'Guadalupa', selected: false },
        { name: 'Guatemala', selected: false },
        { name: 'Honduras', selected: false },
        { name: 'Martinica', selected: false },
        { name: 'Messico', selected: false },
        { name: 'Nicaragua', selected: false },
        { name: 'Panama', selected: false },
        { name: 'Perù', selected: false },
        { name: 'Porto Rico', selected: false },
        { name: 'Rep.Dominicana', selected: false },
        { name: "Stati Uniti d'America", selected: false },
        { name: 'Uruguay', selected: false },
      ],
    },
    {
      name: 'Africa',
      countries: [
        { name: 'Algeria', selected: false },
        { name: 'Botswana', selected: false },
        { name: 'Capo Verde', selected: false },
        { name: 'Egitto', selected: false },
        { name: 'Gambia', selected: false },
        { name: 'Kenya', selected: false },
        { name: 'Madagascar', selected: false },
        { name: 'Marocco', selected: false },
        { name: 'Mauritius', selected: false },
        { name: 'Mozambico', selected: false },
        { name: 'Namibia', selected: false },
        { name: 'Riunione', selected: false },
        { name: 'Ruanda', selected: false },
        { name: 'Senegal', selected: false },
        { name: 'Seychelles', selected: false },
        { name: 'Sudafrica', selected: false },
        { name: 'São Tomé e Príncipe', selected: false },
        { name: 'Tanzania', selected: false },
        { name: 'Tunisia', selected: false },
        { name: 'Uganda', selected: false },
        { name: 'Zambia', selected: false },
      ],
    },
    {
      name: 'Oceania',
      countries: [
        { name: 'Australia', selected: false },
        { name: 'Nuova Zelanda', selected: false },
      ],
    },
    {
      name: 'Antartide',
      countries: [{ name: 'Antartide', selected: false }],
    },
  ];

  priceOptions1 = [
    { label: 'Fino a 1.000 €', value: 1000,  selected: false },
    { label: 'Fino a 2.000 €', value: 2000,  selected: false },
  ];

  priceOptions2 = [{ label: 'Più di 2.000 €', value: 2001,  selected: false }];

  ageOptions = [
    { label: '25-35', value: 2,  selected: false },
    { label: '>35', value: 3,  selected: false },
  ];

  statusOptions = [
    { label: 'Quasi confermato', value: 'almost confirmed' ,  selected: false},
    { label: 'Confermato', value: 'confirmed',  selected: false },
    { label: 'Pianificato', value: 'planned',  selected: false },
    { label: 'Ultimi posti', value: 'almost full',  selected: false },
    { label: 'On request', value: 'On Request',  selected: false },
    { label: 'Sold Out', value: 'sold out',  selected: false },
  ];

  daysOptions1 = [{ label: 'Fino a 6 Giorni', value: 1, day: 6,  selected: false },
    { label: 'Fino a 10 Giorni', value: 2, day: 1 ,  selected: false },

  ];

  daysOptions2 = [
    { label: '+ 10 Giorni', value: 3, day: 10,  selected: false},
  ];

  sortOptions = [
    { label: 'Data', value: 'data' }, // onDateChange
    { label: 'Prezzo più basso', value: 'low-price' }, //onPriceMinClick
    { label: 'Durata minore', value: 'short-duration' }, //onDurationMax
    { label: 'Durata maggiore', value: 'long-duration' }, //onDurationMix
  ];

  moodOptions = [
    {
      label: 'Natura e avventura',
      iconUrl: 'https://cdn.weroad.io/common/images/moods/nature.svg',
      value: 'nature',
    },
    {
      label: 'Monumenti e storia',
      iconUrl: 'https://cdn.weroad.io/common/images/moods/history.svg',
      value: 'history',
    },
    {
      label: 'Relax',
      iconUrl: 'https://cdn.weroad.io/common/images/moods/relax.svg',
      value: 'relax',
    },
    {
      label: 'Città e cultura',
      iconUrl: 'https://cdn.weroad.io/common/images/moods/culture.svg',
      value: 'culture',
    },
    {
      label: 'Party e nightlife',
      iconUrl: 'https://cdn.weroad.io/common/images/moods/party.svg',
      value: 'party',
    },
  ];

  selectedSortOption = '';
  selectedMoodOption = '';



  filter: any[] = [];

  constructor(
    private caroselloservice: FilterPartenzeService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getItinerary('Europa');
    this.getRange('25-35');
    this.getPriceMax(1000)
    this.getPriceMin(1000);
    this.getStatus('confirmed')
    this.getDurationMax(10)
    this.getDurationMin(2)
    this.getDate(this.startDate, this.endDate);


    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  getItinerary(itinerary_name: string) {
    this.caroselloservice.getItinerary(itinerary_name).subscribe((res: any) => {
      this.filter = res;
    });
  }

  getRange(range: string) {
    this.caroselloservice.getFilter(range).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getPriceMax(max: number) {
    this.caroselloservice.getFilter(undefined, max).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getPriceMin(min: number) {
    this.caroselloservice.getFilter(undefined, undefined, min).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getStatus(status: string) {
    this.caroselloservice.getFilter(undefined, undefined, undefined, undefined, undefined, status).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getDurationMax(duration_max: number) {
    this.caroselloservice.getFilter(undefined, undefined, undefined, duration_max).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getDurationMin(duration_min: number) {
    this.caroselloservice.getFilter(undefined, undefined, undefined, undefined, duration_min).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }
  
  getDate(start_date: Date, end_date: Date) {
    const formattedStartDate = start_date.toLocaleDateString('en-CA'); // YYYY-MM-DD
    const formattedEndDate = end_date.toLocaleDateString('en-CA');     // YYYY-MM-DD
  
    this.caroselloservice
      .getFilter(
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        formattedStartDate, 
        formattedEndDate
      )
      .subscribe((res: any) => {
        this.filter = res;
        console.log(this.filter);
      });
  }
  
  


  onContinentClick(continentName: string): void {
    const continent = this.continents.find(cont => cont.name === continentName);
    if (continent) {
      const isSelected = continent.countries.every(country => country.selected);
      this.selectAllCountries(continentName, !isSelected);
      this.updateSelectedDoveText();
    }
  
    this.caroselloservice.getItinerary(continentName).subscribe((res: any) => {
      console.log('Emitting filtered trips:', res.trips);
      this.filteredTrips.emit(res.trips);
    });
  }

onPriceMinClick(min: number): void {
  this.priceOptions1.forEach(option => {
    if (option.value !== min) option.selected = false;
  });
  this.caroselloservice.getFilter(undefined, undefined, min).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
  });
}

onPriceMaxClick(max: number): void {
  this.priceOptions2.forEach(option => {
    if (option.value !== max) option.selected = false;
  });
  this.caroselloservice.getFilter(undefined, max).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
  });
}

onRangeClick(range: string): void {
  this.ageOptions.forEach(option => {
    if (option.label !== range) option.selected = false;
  });

  this.caroselloservice.getFilter(range).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
    this.counter = res.counter !== undefined ? res.counter : this.filteredTripsCount;
    console.log('Counter aggiornato in onRangeClick:', this.counter);
  });
}


onDurationMinClick(duration_min: number): void {
  this.daysOptions1.forEach(option => {
    if (option.day !== duration_min) option.selected = false;
  });
  this.caroselloservice.getFilter(undefined, undefined, undefined, undefined, duration_min).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
  });
}

onDurationMaxClick(duration_max: number): void {
  this.daysOptions2.forEach(option => {
    if (option.day !== duration_max) option.selected = false;
  });
  this.caroselloservice.getFilter(undefined, undefined, undefined, duration_max).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
  });
}

onStatusClick(status: string): void {
  const selectedStatuses = this.statusOptions.filter(option => option.selected);
  if (selectedStatuses.length > 6) {
    const statusOption = this.statusOptions.find(option => option.value === status);
    if (statusOption) {
      statusOption.selected = false;
    }
  }
  this.caroselloservice.getFilter(undefined, undefined, undefined, undefined, undefined, status).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips); 
    this.filteredTripsCount = res.trips.length; 
  });
}

onDateChange(date: Date): void {
  this.startDate = date;
  this.endDate = date;

  this.dateRange = date.toLocaleDateString('it-IT');

  this.applyDateFilter();
}
applyDateFilter(): void {
  const dateFilter = {
    start_date: this.startDate ? this.startDate.toLocaleDateString('en-CA') : undefined,
    end_date: this.endDate ? this.endDate.toLocaleDateString('en-CA') : undefined,
  };

  this.caroselloservice.getFilter(
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    dateFilter.start_date,
    dateFilter.end_date
  ).subscribe((res: any) => {
    this.filteredTrips.emit(res.trips);
    this.filteredTripsCount = res.trips.length;
    console.log('Viaggi filtrati per data:', res.trips);
  });
}


  selectAllCountries(continentName: string, select: boolean): void {
    const continent = this.continents.find(cont => cont.name === continentName);
    if (continent) {
      continent.countries.forEach(country => country.selected = select);
      this.updateSelectedDoveText();
    }
  }
  
  updateSelectedDoveText(): void {
    const selectedCountries = this.continents.flatMap(continent =>
      continent.countries.filter(country => country.selected)
    );
  
    const selectedContinents = this.continents.filter(continent => 
      continent.countries.every(country => country.selected)
    );
  
    if (selectedCountries.length === 1) {
      this.selectedDoveText = `Dove: ${selectedCountries[0].name}`;
    } else if (selectedContinents.length === 1 && selectedCountries.length === selectedContinents[0].countries.length) {
      this.selectedDoveText = `Dove: ${selectedContinents[0].name}`;
    } else if (selectedCountries.length > 1) {
      this.selectedDoveText = `Dove: ${selectedCountries.length}`;
    } else {
      this.selectedDoveText = 'Dove';
    }
  }
  
  onCountrySelectionChange(): void {
    this.updateSelectedDoveText();
  }

  applyFilters(): void {
    // Costruisci un oggetto di filtri selezionati da inviare al backend
    const selectedFilters: any = {
      range: this.selectedAgeRange || undefined,
      max: this.selectedPriceMax || undefined,
      min: this.selectedPriceMin || undefined,
      duration_max: this.selectedDurationMax || undefined,
      duration_min: this.selectedDurationMin || undefined,
      status: this.selectedStatus.length ? this.selectedStatus.join(',') : undefined,
      start_date: this.startDate ? this.startDate.toLocaleDateString('en-CA') : undefined,
      end_date: this.endDate ? this.endDate.toLocaleDateString('en-CA') : undefined,
      ordering: this.selectedSortOption || undefined
    };
  
    // Rimuovi chiavi non definite dall'oggetto dei filtri
    Object.keys(selectedFilters).forEach(key => {
      if (selectedFilters[key] === undefined) {
        delete selectedFilters[key];
      }
    });
  
    // Chiamata al servizio per ottenere i risultati filtrati
    this.caroselloservice.getFilter(
      selectedFilters.range,
      selectedFilters.max,
      selectedFilters.min,
      selectedFilters.duration_max,
      selectedFilters.duration_min,
      selectedFilters.status,
      undefined, 
      undefined, 
      selectedFilters.start_date,
      selectedFilters.end_date,
      selectedFilters.ordering  
    ).pipe(
      // Gestione degli errori
      catchError((error) => {
        console.error('Errore durante il caricamento dei risultati:', error);
        this.filteredTrips.emit([]);
        this.filteredTripsCount = 0;
        this.counter = 0;
        return of({ trips: [], counter: 0 });
      })
    ).subscribe((res: any) => {
      // Emissione dei risultati filtrati e aggiornamento del conteggio
      this.filteredTrips.emit(res.trips);
      this.filteredTripsCount = res.trips.length;
      this.counter = res.counter !== undefined ? res.counter : 0;
      
      // Calcolo del numero di filtri attivi nel frontend
      this.numeroFiltri = this.getActiveFiltersCount();
      
      // Log per debug
      console.log('Risposta completa:', res);
      console.log('Counter aggiornato:', this.counter);
      console.log('Numero di filtri attivi:', this.numeroFiltri);
    });
  }
  
  
  
  selectSortOption(option: string) {
    this.selectedSortOption = option;
    console.log('Opzione di ordinamento selezionata:', option);
  
    switch (option) {
      case 'data':
        this.selectedSortOption = 'start_date';  
        break;
      case 'low-price':
        this.selectedSortOption = 'min';  
        break;
      case 'short-duration':
        this.selectedSortOption = 'durationmin'; 
        break;
      case 'long-duration':
        this.selectedSortOption = 'durationmax';  
        break;
      default:
        console.log('Opzione di ordinamento non valida');
        return;
    }
  
    this.applySortFilter();
  }
  
  applySortFilter(): void {
    const orderingFilter = {
      ordering: this.selectedSortOption || undefined
    };
  
    this.caroselloservice.getFilter(
      undefined, 
      undefined, 
      undefined,
      undefined, 
      undefined, 
      undefined,
      undefined, 
      undefined, 
      undefined, 
      undefined, 
      orderingFilter.ordering 
    ).subscribe((res: any) => {
      this.filteredTrips.emit(res.trips);
      this.filteredTripsCount = res.trips.length;
      console.log('Viaggi ordinati:', res.trips);
    });
  }
  
  
  openModal(page: string): void {
    if (!this.isMobile) {
      this.changePage(page);
      const modalButton = document.getElementById('openModalButton');
      if (modalButton) {
        modalButton.click();
      }
    } else {
      console.log('Modale disabilitata su dispositivi mobili e tablet');
    }
  }

  
  selectMoodOption(option: string) {
    this.selectedMoodOption = option;
    console.log('Opzione di mood selezionata:', option);
  }
  
  getActiveFiltersCount(): number {
    let activeFilters = 0;
  
    if (this.selectedPriceMin !== null) activeFilters++;
    if (this.selectedPriceMax !== null) activeFilters++;
    if (this.selectedAgeRange) activeFilters++;
    if (this.selectedStatus.length > 0) activeFilters++;
    if (this.selectedDurationMin !== null) activeFilters++;
    if (this.selectedDurationMax !== null) activeFilters++;
    if (this.startDate) activeFilters++;
    if (this.endDate) activeFilters++;
  
    return activeFilters;
  }
  

  sortTrips(trips: any[], sortOption: string): any[] {
    switch (sortOption) {
      case 'data':
        return trips.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
      case 'low-price':
        return trips.sort((a, b) => a.price - b.price);
      case 'short-duration':
        return trips.sort((a, b) => a.duration - b.duration);
      case 'long-duration':
        return trips.sort((a, b) => b.duration - a.duration);
      default:
        return trips;
    }
  
}



}
