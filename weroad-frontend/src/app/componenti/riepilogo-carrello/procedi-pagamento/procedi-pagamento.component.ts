import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service'; 

@Component({
  selector: 'app-procedi-pagamento',
  templateUrl: './procedi-pagamento.component.html',
  styleUrls: ['./procedi-pagamento.component.css']
})
export class ProcediPagamentoComponent {
  @Input() isDatiUtenteValid: boolean = false;
  @Input() isIndirizzoValid: boolean = false;
  @Input() isPagamentoValid: boolean = false;

  constructor(private router: Router, private cartService: CartService) {} 

  goToHome() {
    if (this.isDatiUtenteValid && this.isIndirizzoValid && this.isPagamentoValid) {
      this.cartService.clearCart(); 
      this.router.navigate(['transazione-successo']);
    } else {
      alert('Compila tutti i campi obbligatori prima di procedere.');
    }
  }
}
