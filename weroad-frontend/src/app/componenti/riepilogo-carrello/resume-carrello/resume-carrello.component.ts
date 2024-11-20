import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-resume-carrello',
  templateUrl: './resume-carrello.component.html',
  styleUrls: ['./resume-carrello.component.css'],
})
export class ResumeCarrelloComponent implements OnInit {
  cart: any[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.trips$.subscribe((trips) => {
      this.cart = trips;
    });
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      const numericPrice = typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^\d.-]/g, '').trim())
        : item.price;
      return total + (isNaN(numericPrice) ? 0 : numericPrice);
    }, 0);
  }
}
