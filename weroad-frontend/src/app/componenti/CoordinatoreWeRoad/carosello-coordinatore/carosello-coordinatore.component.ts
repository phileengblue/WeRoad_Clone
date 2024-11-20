import { Component } from '@angular/core';

@Component({
  selector: 'app-carosello-coordinatore',
  templateUrl: './carosello-coordinatore.component.html',
  styleUrls: ['./carosello-coordinatore.component.css']
})
export class CaroselloCoordinatoreComponent {

  titleCo = [ 
	  { 
	    title: 'In più...'
	  }

 
	]
 
 
carouselCo = [
	     {
		imageIcon:'https://strapi-imaginary.weroad.it/resource/icon/39344/activities.svg',
		title:'Decidi quando e dove',
		p:"Sarai tu a dirci quando vuoi viaggiare. Forse sei disponibile solo per un viaggio all'anno o forse hai deciso di prenderti un anno per 		viaggiare - il nostro patto: almeno un viaggio all'anno ad agosto, il mese in cui partono più viaggi in assoluto!"
	     },
	     {
		imageIcon:'https://strapi-imaginary.weroad.it/resource/icon/39343/friends.svg',
		title:'Fai parte di una community',
		p:"Una volta Coordinatore a tutti gli effetti, farai parte della community. Riceverai consigli utili dagli altri Coordinatori e potrai 			condividere gli alti e bassi (sì, ce ne sono!) del tuo ruolo. In più, parteciperai a eventi e Reunion organizzate da WeRoad!"
	     },
             {
		imageIcon:'https://strapi-imaginary.weroad.it/resource/icon/39346/culture.svg',
		title:'Hai supporto 24/7',
		p:"Prima di ogni viaggio, WeRoad condividerà tutte le informazioni di cui avrai bisogno per affrontare al meglio la tua avventura. Durante 		il viaggio, avrai supporto 24 ore su 24, 7 giorni su 7, se necessario. Insomma: avrai le spalle sempre coperte!"
	     },
             {
		imageIcon:'https://strapi-imaginary.weroad.it/resource/icon/39345/transfer.svg',
		title:'Cresci con noi',
		p:"Crediamo nella crescita personale e professionale: durante la tua carriera, potrai candidarti come Scouter (per occuparti della 			selezione di aspiranti Coordinatori), Ambassador (per rappresentare la Community) o Content Creator (se fai colazione con caffé e 			Instagram!)"
	     },
             {
		imageIcon:'https://strapi-imaginary.weroad.it/resource/webp-icon/8782/.webp',
		title:'Sogna in grande',
		p:"Dopo essere diventato un esperto Coordinatore potrai creare un WeRoadX e vivere il viaggio che sogni da una vita, o far diventare il 		viaggio il tuo lavoro ricoprendo il ruolo di Travel Producer, occupandoti a tempo pieno della creazione e coordinazione di nuovi 			itinerari."
	     }
 
             ]
}
