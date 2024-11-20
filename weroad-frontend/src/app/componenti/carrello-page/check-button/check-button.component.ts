import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.css']
})
export class CheckButtonComponent {
  @Input() isDisabled: boolean = false;

  constructor(private router: Router) {}

  goToHome() {
    if (!this.isDisabled) {
      this.router.navigate(['riepilogo-carrello']);
    }
  }
}

