import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-text-ringraziamenti',
  templateUrl: './button-text-ringraziamenti.component.html',
  styleUrls: ['./button-text-ringraziamenti.component.css']
})
export class ButtonTextRingraziamentiComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['']);
  }
}
