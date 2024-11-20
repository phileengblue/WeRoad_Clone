import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottone-home',
  templateUrl: './bottone-home.component.html',
  styleUrls: ['./bottone-home.component.css']
})
export class BottoneHomeComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']); 
  }
}

