import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-process',
  templateUrl: './selection-process.component.html',
  styleUrls: ['./selection-process.component.css']
})
export class SelectionProcessComponent {

    kingTitle =[
      {
        title: "Come funziona il processo di selezione?"
      }
    ]
    numericList = [
      {
        numberIcon:"https://strapi-imaginary.weroad.it/resource/small/39347/icon-number-1.svg",
        title:"Form online",
        p:"Compila il form online e inviaci un video in cui ti presenti e facci sapere perché sei il Coordinatore che chiunque vorrebbe avere come leader del proprio viaggio."
      },
      {
        numberIcon:"https://strapi-imaginary.weroad.it/resource/small/39348/icon-number-2.svg",
        title:"Group Interview",
        p:"Se vediamo quella scintilla magica, ti inviteremo a una delle nostre Group Interview online con altri aspiranti Coordinatori di viaggio come te."
      },
      {
        numberIcon:"https://strapi-imaginary.weroad.it/resource/small/39349/icon-number-3.svg",
        title:"Bootcamp",
        p:"Se la Group Interview va bene, grande! Ora devi prepararti per il Bootcamp, un weekend di selezione durante il quale ti metteremo alla prova, vivrai una vera WeRoad experience e conoscerai tanti altri aspiranti Coordinatori."
      },
      {
        numberIcon:"https://strapi-imaginary.weroad.it/resource/small/39350/icon-number-4.svg",
        title:"Risultato finale",
        p:"Una volta terminato il Bootcamp, riceverai un'email con il risultato finale. Se le tue qualità e abilità corrispondono alla nostra filosofia, sei a bordo! Ha inizio la tua avventura come Coordinatore WeRoad!"
      }
    ]

}
