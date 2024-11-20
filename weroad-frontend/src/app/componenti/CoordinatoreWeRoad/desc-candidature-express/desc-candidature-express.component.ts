import { Component } from '@angular/core';

@Component({
  selector: 'app-desc-candidature-express',
  templateUrl: './desc-candidature-express.component.html',
  styleUrls: ['./desc-candidature-express.component.css']
})
export class DescCandidatureExpressComponent {
  desc = [
    {
      icon:'https://strapi-imaginary.weroad.it/resource/webp-small/11683/.webp',
      tilte:'Hai già fatto un WeRoad? Candidati con il metodo Express!',
      p:'Se hai già partecipato ad almeno un viaggio WeRoad e pensi che il ruolo del Coordinatore ti si addica, puoi candidarti con il metodo Express: per te il processo di selezione prevederà la compilazione del form online con video application e, se ritenuto idoneo, la Group Interview online. Superata quella, prepara lo zaino... potrai partire per il tuo primo viaggio WeRoad come Coordinatore!'
    }
  ]

}
