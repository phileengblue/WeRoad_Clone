import { Component } from '@angular/core';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent {
  currentStep = 1;
  selectedTrips: any[] = [];
  answers = Array(10).fill(null);

  questions = [
    { label: 'Tipo di viaggio preferito?', type: 'radio', options: ['Avventura', 'Relax', 'Culturale'], hasOtherOption: true },
    { label: 'Livello di avventura che preferisci', type: 'slider', min: 1, max: 10, step: 0.5 },
    { label: 'Qual è il tuo budget di viaggio?', type: 'radio', options: ['Basso', 'Medio', 'Alto'] },
    { label: 'Quali interessi hai nel viaggio?', type: 'checkbox', options: ['Natura', 'Cultura', 'Gastronomia', 'Sport'] },
    { label: 'Ti piace viaggiare da solo o in gruppo?', type: 'radio', options: ['Da solo', 'In gruppo'] },
    { label: 'Quanto è importante il comfort per te?', type: 'slider', min: 1, max: 10, step: 0.5 },
    { label: 'Quali attività preferisci fare in viaggio?', type: 'checkbox', options: ['Escursioni', 'Shopping', 'Relax', 'Sport'] },
    { label: 'Qual è la tua preferenza di alloggio?', type: 'radio', options: ['Hotel', 'Ostello', 'Campeggio'], hasOtherOption: true },
    { label: 'Quanto tempo vorresti dedicare alle attività culturali?', type: 'slider', min: 1, max: 10, step: 0.5 },
    { label: 'Seleziona le destinazioni di interesse', type: 'checkbox', options: ['Montagna', 'Mare', 'Città', 'Campagna'] }
  ];

  onCheckboxChange(event: any, index: number): void {
    const selectedOptions = this.answers[index] || [];
    if (event.target.checked) {
      selectedOptions.push(event.target.value);
    } else {
      const i = selectedOptions.indexOf(event.target.value);
      if (i !== -1) selectedOptions.splice(i, 1);
    }
    this.answers[index] = selectedOptions;
  }

  onSubmit(): void {
    if (this.answers.every(answer => answer !== null && answer !== undefined)) {
      console.log('Risposte:', this.answers);
      this.currentStep = 2;
    } else {
      console.log('Compila tutti i campi obbligatori.');
    }
  }

  goToPreviousStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }
}
