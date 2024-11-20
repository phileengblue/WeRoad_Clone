import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() questions: any[] = [];
  @Input() answers: any[] = [];
  @Output() goBack = new EventEmitter<void>();

  constructor(private router: Router) {}

  goToPreviousStep(): void {
    this.goBack.emit();
  }

  completeFeedback(): void {
    console.log('Feedback completato con successo:', this.answers);
    
    // Esegui l'invio dei dati qui, se necessario.
    // Ad esempio: this.dataService.submitFeedback(this.answers).subscribe(() => { ... });

    this.router.navigate(['page-conferma']);
  }
}
