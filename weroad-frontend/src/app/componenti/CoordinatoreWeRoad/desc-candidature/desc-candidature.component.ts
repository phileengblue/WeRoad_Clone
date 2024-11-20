import { Component } from '@angular/core';

@Component({
  selector: 'app-desc-candidature',
  templateUrl: './desc-candidature.component.html',
  styleUrls: ['./desc-candidature.component.css']
})
export class DescCandidatureComponent {
  desc = [
    {
      title:"Ora che hai le info, la fai l'application?",
      p:'Ti basta cliccare qui sotto - ah: il form è in inglese, perché per fare il Coordinatore... ovviamente lo devi sapere! Ricordati: per la candidature Express devi aver fatto almeno un viaggio WeRoad come partecipante!',
      button1: "Candidatura classica",
      button2:'Candidatura express'
    }
  ]

}
