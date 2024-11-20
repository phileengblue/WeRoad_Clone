<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $months = [

            
            ['Gennaio','Inizia l\'anno al meglio!','Scopri tutte le partenze di gennaio','Comincia l\'anno col botto','Non rimandare!','ome iniziare al meglio un nuovo anno? Ovviamente con un viaggio a gennaio, così sì che inauguri l\'anno alla grande. Dove? Quello sta a te sceglierlo: Thailandia, Bali, Giappone, Islanda, Giordania, Lapponia svedese e molte altre destinazioni ti aspettano.','Idee per un viaggio di gruppo a gennaio',10],
            ['Febbraio','Vacanze a febbraio? Fatti un viaggio.','Sappiamo noi dove mandarti, ovviamente.','Una vacanza a febbraio ci sta sempre','Parti in bassa stagione!','Dillo che pure tu hai pensato di farti una vacanza a febbraio, giusto per spezzare un po\' la routine e cambiare aria. Ti capiamo: per noi di WeRoad, ad esempio, è il momento perfetto per farsi un viaggio e ricaricare le batterie in vista dell\'alta stagione estiva - poi torneremo in vacanza a settembre! Se pure tu sei indeciso su dove andare, prendi spunto da noi: alcuni membri del team stanno per raggiungere la Colombia, in cerca di un po\' di sole e di caldo; anche Cuba è una meta gettonata, così come il Messico - insomma, con i Caraibi in generale non puoi sbagliare. Troppo lontano? Allora resta al di qua dell\'oceano fermandoti alle Canarie - ne hai un po\' tra cui scegliere, noi ti suggeriamo Fuerteventura, Tenerife e Lanzarote. Se invece vuoi imbarcarti in un on the road, gli Stati Uniti non deludono mai - le strade sono infinte e i chilometri da percorrere non mancano di certo. Se invece un viaggio a febbraio per te è sinonimo di freddo, allora puoi valutare il Nord Europa - tra l\'altro, siamo ancora in piena stagione di aurore! Quindi: Islanda, Lapponi o Norvegia?','Idee per un viaggio di gruppo a febbraio',11],
            ['Marzo','Vacanze a marzo? Fatti un viaggio.','Sappiamo noi dove mandarti, ovviamente.','A marzo si va in vacanza, perchè sì.',null,'Dove andare per una vacanza a marzo? Per fortuna ti trovi proprio nella pagina giusta (o forse non è affatto fortuna, ma semplicemente un paio di keywords ben piazzate? Chi lo sa. Google sicuramente). La cosa bella di marzo è che un mese di mezzo, nel senso che puoi andartene ai Caraibi per goderti il sole e il caldo - tipo a Cuba, o in Messico, a anche in Colombia - oppure puoi già fare un salto più a sud, in Perù, dato che qui inizia la bella stagione e probabilmente ti becchi anche meno turisti rispetto ad agosto. Se pensi che non sia ancora il momento di viaggiare così lontano ma vuoi comunque il caldo, ci sono le Canarie con i loro piacevolissimi 20° - una gioia vera, credici. Se invece l\'idea che stia arrivando il caldo ti mette ansia, puoi andare a nord, verso la Lapponia, l\'Islanda o la Norvegia - qui hai ancora la possibilità di ammirare l\'aurora boreale, che fino ad aprile colora il cielo notturno di questi Paesi. Quindi, dove si va?','Idee per un viaggio di gruppo a marzo',12],
            ['Aprile','Aprile','Scopri tutte le destinazioni','Aprile, dolce partire!',null,'Ok, non fa rima, ma ad aprile noi mica vogliamo dormire! Arriva la primavera e lo zaino scalpita per partire insieme a noi! Dove andare per una vacanza ad aprile? Per fortuna ti trovi proprio nella pagina giusta (o forse il destino ti ha portato qui). La cosa bella di aprile è che ci sono ben tre ponti da sfruttare e puoi andartene in Latinoamerica per vivere le vibes calienti - parliamo di Cuba, Messico e Colombia - oppure puoi già fare un salto più a est, verso la terra del Sol Levante per ammirare la fioritura dei ciliegi in Giappone o rilassarti sulle spiagge thailandesi, ma anche lasciarti incantare dalla spiritualità che impregna Nepal e India. Se preferisci restare vicino casa, Canarie, Islanda, Portogallo o Andalusia - sono regioni megiche tutte da scoprire. Quindi, dove si va?','Idee per un viaggio di gruppo ad aprile',13],
            ['Maggio','Maggio','Scopri tutte le destinazioni','Maggio: WeRoader fatti un bel viaggio','Ti basta scegliere dove','Maggio è quel mese dopo le vacanze di Pasqua in cui si odora già l\'arrivo dell\'estate: le giornate sono lunghe, solitamente splende il sole, passiamo più tempo all\'aperto... ma i veri fortunati sono coloro che hanno le vacanze a maggio e possono partire per un viaggio (abbiamo fatto la rima)! Come? Sei uno di loro? E allora non ti resta che scegliere il tuo WeRoad.','Idee per un viaggio di gruppo a maggio',14],
            ['Giugno','Giugno','Scopri tutte le destinazioni','Giugno: è ora di prendersi una pausa!','Come, se non con un viaggio in giro per il mondo?','Dopo il ponte del 2 giugno, ormai l\'estate è definitivamente arrivata. Se stai cercando un modo per darle il benvenuto, il migliore è facendo un WeRoad! Puoi scegliere la destinazione per il tuo viaggio a giugno al mare o in montagna tra queste ... o tra tutti i viaggi confermati qui sotto!','Idee per un viaggio di gruppo a giugno',15],
            ['Luglio','Parti a luglio!','Tutte le destinazioni per la tua estate','Luglio col bene che ti...','...parto per il WeRoad che voglio!','Forse la canzone non era proprio così, ma se per le tue vacanze di luglio stai cercando un viaggio avventuroso dall\'altra parte del mondo o un viaggio al mare... fatti un WeRoad! La destinazione e il mood di viaggio li scegli tu!','Idee per un viaggio di gruppo a luglio',16],
            ['Agosto','Agosto','Scopri tutte le destinazioni','Che WeRoad ti fai questo agosto?','Hai solo che l\'imbarazzo della scelta per il tuo viaggio di gruppo','Cerchi un viaggio in Grecia, un viaggio avventuroso, un viaggio culturale oppure un mix di tutto questo? Tra più di 80 itinerari in Colombia, Indonesia, Tanzania, Islanda e chi più ne ha più ne metta: hai l\'imbarazzo della scelta per la meta del tuo viaggio in agosto! Lasciati ispirare da questi viaggi suggeriti e scopri tutte le partenze qui sotto!','Idee per un viaggio di gruppo ad agosto',17],
            ['Settembre','Ecco tutte le partenze di Settembre!','Scopri tutte le destinazioni','Tornare alla solita routine o partire?','Per noi la risposta è fatti un viaggio a settembre!','Ovvio no?! Non potevamo dare una risposta diversa! Dopo che tutti sono tornati dalle vacanze, tu che parti in viaggio a settembre sei il più invidiato di tutto l\'ufficio. E\' arrivato il tuo momento di vivere avventure incredibili, ammirare panorami mozzafiato e collezionare ricordi indimenticabili. Sei pronto? Non ti resta che scegliere il tuo WeRoad qui sotto!','Idee per un viaggio di gruppo a settembre',18],
            ['Ottobre','Parti ad ottobre!','Scopri tutte le partenze','È arrivato l\'autunno!','E noi partiamo.','Che tu stia cercando un viaggio al mare a ottobre oppure un viaggio in Italia o magari un viaggio oltreoceano... qui sicuramente troverai il WeRoad perfetto per te! Fatti ispirare dai suggerimenti qui sotto: un trekking in Nepal o un\'escursione in jeep nel Wadi Rum in Giordania? Oppure filtra tra tutti i viaggi disponibili: ricorda che ogni giorno aggiungiamo nuove partenze!','Tutti i viaggi di gruppo in partenza ad ottobre',19],
            ['Novembre','Partenze da novembre in poi!','Scopri tutte le partenze','Partire o non partire? Questo è il dilemma.','In realtà no, per noi non c\'è alcun dubbio: si parte! Sei dei nostri?','Quando tutti sono presi da studio o lavoro e pensano solo alle vacanze natalizie, tu saluta tutti - "con le mani ciao ciao!" [cit.] - e parti per un viaggio in Egitto o in Giordania a novembre! Ma non limitiamoci a questi paesi, qui sotto trovi qualche spunto per un WeRoad all\'insegna dell\'avventura e dalla scoperta!','Tutti i viaggi di gruppo in partenza a novembre',20],
            ['Dicembre','Dove andare a dicembre?','Scopri tutte le partenze','Cosa fai a Capodanno?','Prepara la risposta: scegli un WeRoad!','C\'è chi ha già prenotato il suo WeRoad per il Capodanno 2025! Ma no pressure - tu hai un sacco di mesi per organizzare le tue vacanze di Natale e Capodanno. Ricordiamoci però che ci sono anche altri quindici giorni prima da sfruttare per salutare l\'anno con un viaggio in Thailandia, oppure un viaggio al caldo, anche se il ponte dell\'8 dicembre non ci aiuta. Scegli il tuo prossimo WeRoad lasciandoti ispirare da queste proposte, oppure consulta tutte le partenze.','Idee per un viaggio di gruppo a dicembre',21],
       
       
   ];

   foreach($months as $month){
    DB::table('months')->insert([
    'name' => $month[0],
    'title'=> $month[1],
    'subTitle'=> $month[2],
    'descriptionTitle'=> $month[3],
    'descriptionSubTitle'=> $month[4],
    'description'=> $month[5],
    'tableTitle'=> $month[6],
    'filestorage_id'=> $month[7],
    
    ]);
}
    }
}
