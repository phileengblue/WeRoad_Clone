import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavbarService } from '../../shared/services/navbar.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { PartenzeService } from 'src/app/shared/services/partenze/partenze.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarOpen = false;
  isUserDropdownOpen = false;
  ismobile = false;
  trip: any[] = [];
  filteredTrips: any[] = [];
  selectedAgeRange: string = 'Tutte le fasce';
  isAuthenticated: any;
  userImage: string | null = null; 

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  
    // Cambia il tema del body aggiungendo/rimuovendo una classe
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  
    // Memorizza la preferenza nel localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }


  constructor(
    private breakpointObserver: BreakpointObserver,
    private navbarservice: NavbarService,
    public authservice: AuthService,
    private router: Router,
    private partenzeservice: PartenzeService,

  ) {}



  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.ismobile = result.matches;
      });
    console.log(this.authservice.isAuthenticated())

    console.log(this.authservice.isAuthenticated())

    if (this.authservice.isAuthenticated()) {
      this.userImage = this.authservice.getUserImage(); 
    }
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
  
    // Imposta la classe iniziale sul body
    document.body.classList.add(this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  goToHome() {
    this.router.navigate(['carrello-page']);
  } 

  filter: any[] = [];

  getItinerary(itinerary_name: string) {
    this.navbarservice.getItinerary(itinerary_name).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getRange(range: string) {
    this.navbarservice.getRange(range).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getTypes(type_name: string) {
    this.navbarservice.getTypes(type_name).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  getPartenze(month: number, year: number) {
    this.navbarservice.getPartenze(month, year).subscribe((res: any) => {
      this.filter = res;
      console.log(this.filter);
    });
  }

  

  onContinentClick(continentName: string): void {
    this.getItinerary(continentName);
  }

  onRangeClick(range: string): void {
    this.getRange(range);
  }

  onTypesClick(type_name: string): void {
    this.getTypes(type_name);
  }
  mesi = [
    { nome: 'Settembre', mese: 9, anno: 2024, },
    { nome: 'Ottobre', mese: 10, anno: 2024 },
    { nome: 'Novembre', mese: 11, anno: 2024 },
    { nome: 'Dicembre', mese: 12, anno: 2024 },
   
    { nome: 'Gennaio', mese: 1, anno: 2025 },
    { nome: 'Febbraio', mese: 2, anno: 2025 },
    { nome: 'Marzo', mese: 3, anno: 2025 },
    { nome: 'Aprile', mese: 4, anno: 2025 },
    { nome: 'Maggio', mese: 5, anno: 2025 },
    { nome: 'Giugno', mese: 6, anno: 2025 },
    { nome: 'Luglio', mese: 7, anno: 2025 },
    { nome: 'Agosto', mese: 8, anno: 2025 },
  ];

  DettagliPartenze: any[] = [];

  getPartenzePagine(mese: number) {
    this.partenzeservice.getPartenze(mese).subscribe((res) => {
      this.DettagliPartenze = res; 
      console.log(this.DettagliPartenze);
    });
  }

  navigateToPartenze(mese: number, anno: number): void {
    this.router.navigate(['/partenze', mese, anno]);
  }
}
