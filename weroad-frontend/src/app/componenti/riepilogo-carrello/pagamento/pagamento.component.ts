import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
  
  @Output() formValidity = new EventEmitter<boolean>();
  pagamentoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pagamentoForm = this.fb.group({
      numeroCarta: [
        '',
        [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]
      ],
      dataScadenza: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]
      ],
      pin: [
        '',
        [Validators.required, Validators.pattern(/^\d{3}$/)]
      ],
      nominativo: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]
      ]
    });

    this.pagamentoForm.statusChanges.subscribe(() => {
      this.formValidity.emit(this.pagamentoForm.valid);
    });
  }



  formatNumeroCarta(event: Event) {
    let input = (event.target as HTMLInputElement).value.replace(/\D/g, ''); 
    if (input.length > 16) input = input.slice(0, 16); 
    const formatted = input.replace(/(\d{4})(?=\d)/g, '$1 '); 
    this.pagamentoForm.get('numeroCarta')?.setValue(formatted, { emitEvent: false });
  }

  formatDataScadenza(event: Event) {
    let input = (event.target as HTMLInputElement).value.replace(/\D/g, ''); 
    if (input.length > 4) input = input.slice(0, 4);
    const formatted = input.replace(/(\d{2})(?=\d)/, '$1/'); 
    this.pagamentoForm.get('dataScadenza')?.setValue(formatted, { emitEvent: false });
  }

  // Metodo per assicurarsi che il CVV sia di 3 cifre al massimo
  formatCVV(event: Event) {
    let input = (event.target as HTMLInputElement).value.replace(/\D/g, ''); 
    if (input.length > 3) input = input.slice(0, 3); 
    this.pagamentoForm.get('pin')?.setValue(input, { emitEvent: false });
  }

  onSubmit() {
    if (this.pagamentoForm.valid) {
      console.log('Dati del pagamento:', this.pagamentoForm.value);
    } else {
      console.error('Form non valido!');
      this.pagamentoForm.markAllAsTouched(); 
    }
 }
}