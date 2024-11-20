import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})
export class DatiUtenteComponent {
  
  @Output() formValidity = new EventEmitter<boolean>();
  datiUtenteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.datiUtenteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      cognome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    this.datiUtenteForm.statusChanges.subscribe(() => {
      this.formValidity.emit(this.datiUtenteForm.valid);
    });
  }

  onSubmit() {
    if (this.datiUtenteForm.valid) {
      console.log('Dati utente:', this.datiUtenteForm.value);
    } else {
      console.error('Form non valido!');
      this.datiUtenteForm.markAllAsTouched(); 
    }
}

}
