import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-desc-continent-nord-europa',
  templateUrl: './desc-continent-nord-europa.component.html',
  styleUrls: ['./desc-continent-nord-europa.component.css']
})
export class DescContinentNordEuropaComponent {
  desc = [
    {
      title:'nel Nord Europa',
      p:"La terra del ghiaccio e del fuoco, l’affascinante Islanda, i fiordi della Norvegia, Capo Nord, le distese di neve della Lapponia, natura selvaggia, paesaggi di rara bellezza, infinite ore di luce nelle fresche estati e altrettante di buio nei rigidi inverni. Scendiamo un pochino, cosa c'è tra il circolo polare artico e l'Italia? Dalla Scozia all'Austria, dall'Irlanda alla Germania: ogni paese custodisce una storia di migrazione, contaminazione culturale, religiosa, culinaria che ci farà scoprire la storia dell'Europa e di paesi vicini a noi che ancora però non conosciamo benissimo! Edimburgo, Stoccarda, Vienna, Copenaghen ti stupiranno per mille ragioni diverse.",
      button1: "Islanda",
      button2:'Norvegia',
      button3:'Finlandia',
      button4:'Danimarca',
      button5:'Regno Unito e Irlanda',
      button6:'Germania, Austria e Svizzera',
      button7:'Svezia'
    }
  ]
  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);  
  }

}
