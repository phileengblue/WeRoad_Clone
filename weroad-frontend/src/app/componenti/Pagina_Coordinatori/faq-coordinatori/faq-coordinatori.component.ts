import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-coordinatori',
  templateUrl: './faq-coordinatori.component.html',
  styleUrls: ['./faq-coordinatori.component.css']
})
export class FaqCoordinatoriComponent {

  titleFaq = [
    {
      title: 'FAQ sul coordinatore WeRoad'
    }
  ]

  questFaq = [
    {
      quest: 'Chi è e cosa fa il Coordinatore WeRoad?',
      p:'Il Coordinatore WeRoad è un abile viaggiatore con esperienza e sarà il perfetto compagno di viaggio: sarà disponibile in caso di ogni evenienza e dovrà gestire tutte le questione logistiche (spostamenti, orari, strutture, meeting point, etc.) così tu potrai goderti il viaggio senza pensieri! Avrai modo di conoscerlo con la creazione del gruppo WhatsApp circa 15 giorni prima della partenza: sarà il momento per fare tutte le domande pre-partenza e conoscere meglio il resto del gruppo!'
    },
    {
      quest: 'Come viene selezionato un Coordinatore WeRoad?',
      p:'Per diventare Coordinatori WeRoad bisogna candidarsi tramite un form online, inviando un video che viene valutato dal nostro Team A&C (Ambassador & Coordinators). Si passa poi a una seconda fase, la Group Interview online, e infine alla terza ed ultima, il Bootcamp, due giorni di full immersion nel mondo WeRoad. In queste due fasi gli aspiranti Coordinatori vengono messi alla prova sui diversi aspetti della gestione di un viaggio - dal problem solving di casi realmente accaduti durante i nostri turni, al come amministrare al meglio la cassa comune.'
    },
    {
      quest: 'Come posso mettermi in contatto con un Coordinatore?',
      p:'Se vuoi contattare un Coordinatore prima di prenotare un viaggio, cercalo in questa pagina: nel suo profilo troverai i suoi social (Facebook e Instagram). Dopo aver prenotato un viaggio invece, se il Coordinatore è già stato assegnato, troverai il suo numero di telefono accedendo alla tua Area Personale MyWeRoad.'
    },
    {
      quest: 'Coordinatore e WeRoadX... come funziona?',
      p:"Un WeRoadX è un viaggio progettato e realizzato interamente da coordinatori WeRoad esperti. Il Coordinatore si occupa di tutto il viaggio: dalla definizione dell'itinerario alla selezione delle accommodation e delle esperienze in loco. Tramite WeRoad potrai prenotare il viaggio e gestirlo nella tua Area Personale MyWeRoad, come qualsiasi altro WeRoad."
    },
    {
      quest: 'Skipper, Coordinatore o entrambi?',
      p:"Per tutti gli itinerari Sail in Grecia e Spagna lo skipper, che è l'esperto della navigazione, sarà anche il tuo Coordinatore. Come? Tutti gli skipper che vi accompagneranno in un'avventura in barca a vela in questi paesi sono anche formati per essere un Coordinatore WeRoad. Ogni barca avrà il proprio Coordinatore Skipper. In caso di gruppi che viaggeranno in flottiglia, ogni barca avrà il proprio Coordinatore Skipper che collaborerà a stretto contatto con gli altri Coordinatore skipper come da prassi del mondo navale, ma con lo stile WeRoad. Per tutti gli itinerari in Italia invece è prevista la presenza di uno skipper per barca ma anche di un Coordinatore WeRoad, lo skipper infatti non ha ricevuto la formazione per essere anche un Coordinatore. In caso di flottiglia ci sarà un Coordinatore WeRoad ogni due barche. Quindi se siamo 3 barche quanti coordinatori ci saranno? Risposta: 2! Il massimo di barche è cinque. In entrambi i casi, ricorda che anche tu fai parte dell'equipaggio della barca, oltre che del gruppo, quindi sarà dovere tuo e dei tuoi compagni aiutare il Coordinatore e lo skipper o il Coordinatore Skipper nelle operazioni giornaliere legate alla barca a vela. Cosa vuol dire nella pratica? Prendersi cura della barca, aiutarlo nelle operazioni di navigazione e ascoltarlo, sempre."
    },
    {
      quest: 'Ho partecipato a un viaggio WeRoad, posso diventare Coordinatore?',
      p:'Apprezziamo il tuo spirito proattivo, e la risposta è ovviamente sì. Puoi candidarti tramite il form che trovi in questa pagina. In bocca al lupo, speriamo di vederti presto con badge e maglietta bianca!'
    }
  ]

}
