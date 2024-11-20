import { Component } from '@angular/core';

@Component({
  selector: 'app-riepilogo-carrello',
  templateUrl: './riepilogo-carrello.component.html',
  styleUrls: ['./riepilogo-carrello.component.css']
})
export class RiepilogoCarrelloComponent {
  isDatiUtenteValid: boolean = false;
  isIndirizzoValid: boolean = false;
  isPagamentoValid: boolean = false;

  updateDatiUtenteValid(valid: boolean) {
    this.isDatiUtenteValid = valid;
  }

  updateIndirizzoValid(valid: boolean) {
    this.isIndirizzoValid = valid;
  }

  updatePagamentoValid(valid: boolean) {
    this.isPagamentoValid = valid;
  }

}
