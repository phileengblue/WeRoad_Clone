import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-role',
  templateUrl: './desc-role.component.html',
  styleUrls: ['./desc-role.component.css']
})
export class DescRoleComponent {
  desc = [
    {
      title:'Perché diventare Coordinatore WeRoad?',
      subtitle: "A parte il fatto che giri il mondo, e con persone della tua età, serve aggiungere altro?",
      p1:"Vaaa bene, scriviamo due righe in più: siamo una community di viaggiatori appassionati, innamorati del mondo e desiderosi di fare nuove amicizie. Ovviamente non è un lavoro: alcuni di noi indossano la maglietta da Coordinatore solo una o due volte l'anno, altri la indossano un po' più spesso - questo perché decidi tu quando e per quanto tempo partire.",
      p2:"Per tutti noi, ogni viaggio è un'emozione. Guidiamo un gruppo di persone come noi, desiderose di scoprire Paesi lontani e culture straniere. La soddisfazione più grande arriva sempre l'ultimo giorno dei nostri viaggi, quando guardiamo negli occhi le persone con cui abbiamo viaggiato e ci rendiamo conto che da sconosciuti siamo diventati amici.",
      p3:"Sembra un'utopia? Invece è proprio quello che viviamo ogni giorno in cui lasciamo i nostri panni normali per vestire quelli del Coordinatore WeRoad - tipo Superman o Spiderman, solo che noi indossiamo t-shirt e badge!",
      button1: "Scopri il processo di selezione",
      
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }
}
