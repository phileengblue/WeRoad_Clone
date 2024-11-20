import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-indirizzo-fatturazione',
  templateUrl: './indirizzo-fatturazione.component.html',
  styleUrls: ['./indirizzo-fatturazione.component.css']
})
export class IndirizzoFatturazioneComponent {
  @Output() formValidity = new EventEmitter<boolean>();
  indirizzoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.indirizzoForm = this.fb.group({
      via: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      numeroCivico: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      cap: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      citta: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      nazione: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]]
    });

    this.indirizzoForm.statusChanges.subscribe(() => {
      this.formValidity.emit(this.indirizzoForm.valid);
    });
  }

  onSubmit() {
    if (this.indirizzoForm.valid) {
      console.log('Indirizzo di fatturazione:', this.indirizzoForm.value);
    } else {
      console.error('Form non valido!');
      this.indirizzoForm.markAllAsTouched(); 
    }
  }
}

