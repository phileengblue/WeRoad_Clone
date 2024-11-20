<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $descrptions =
        [
            [
                'Il Marocco racchiude dentro i suoi confini antichi misteri e leggende millenarie, cultura e tradizioni, moschee affascinanti e palazzi opulenti, paesaggi naturali unici e piccole perle nascoste agli occhi meno esperti. In questo viaggio di gruppo ci sposteremo tra le città più iconiche di questo paese, da Marrakech a Casablanca fino poi ad arrivare a Fes, Rabat e il deserto. Con una compagnia di spiriti liberi, ci immergeremo nell\'incanto delle medine settentrionali, partendo dalla brulicante Marrakech, che ci conquisterà con i suoi mercati pieni di spezie e colori, per poi dirigerci verso la pulsante Casablanca, metropoli in perenne mutamento, per poi raggiungere l\'antica Fez, dove gli artigiani ci sveleranno i segreti delle loro concerie. Ma è a Rabat che il cielo si accende di colori al tramonto, donandoci uno spettacolo indimenticabile dalla Kasbah degli Oudaias. Il vero gioiello di questo viaggio è il deserto, dove ogni tramonto è uno spettacolo unico e indimenticabile: ci trascorreremo una notte, in un campo tendato, sentendoci dei beduini persi tra le alte dune del Sahara. In questa terra magica, ogni giorno sarà un nuovo capitolo di meraviglia, e il Marocco intero si rivelerà come un\'ode alla bellezza e alla scoperta continua.',
                'Questo itinerario è un 360°: il nostro grande classico che ti permette di scoprire la destinazione in ogni suo aspetto. I ritmi saranno sostenuti per riuscire a vedere quanto più possibile, ma avremo anche momenti di relax e divertimento - il giusto mix!',
                'Questo itinerario ha un livello di impegno fisico INTERMEDIO e il ritmo del viaggio è da considerarsi sostenuto. Sono previsti anche spostamenti di media-lunga durata (dalle 3 alle 6 ore). Cambieremo struttura quasi tutti i giorni e ci aspettiamo da te un buon spirito di adattamento.',
                'Passaporto: validità residua che supera la data di uscita dal paese. Visto: non serve per soggiorni fino a 3 mesi. Prima di prenotare ricorda di controllare eventuali aggiornamenti su Viaggiare Sicuri.',
                'Questo viaggio inizia e finisce a Marrakech. Il primo giorno di viaggio ci troviamo entro le 18, l\'ultimo giorno potrai ripartire già dal mattino. Scopri di più sul ritrovo qui!',
                1 //trip_id
            ],//1

            [
                'In un viaggio in Giappone ci sono alcune tappe che non possono mancare e, spoiler, in questo itinerario le abbiamo tutte. La prima è, ovviamente, Tokyo, la modernissima capitale che rispecchia la frenesia e l’effervescenza del Paese; Kyoto, con i suoi templi e quartieri storici; Hiroshima, rinata dopo la Seconda Guerra Mondiale; Osaka, patria della cucina nipponica. Sarà un viaggio tra tradizione e modernità: a Tokyo saremo circondati da grattacieli e attraverseremo l’incrocio più trafficato del mondo, ma basterà spostarsi a Kamakura per essere immersi nella pace che si respira tra i templi buddhisti e i giardini zen, non troppo lontani dall’iconico monte Fuji. Poi prenderemo il Shinkansen, il treno ad alta velocità che ha la fama di non essere mai in ritardo, per spostarci a Kyoto, dove visiteremo altri templi maestosi, passegeremo nella foresta di bambù e attraverseremo i torii rossi del Fushimi Inari. Un salto indietro nel tempo a Hiroshima, un altro ad Osaka e al castello di Himeji, e poi ci fermiamo a Nara per coccolare i famosi cervi che passeggiano nel parco cittadino. Ci immergeremo in una cultura lontanissima dalla nostra, il cui fascino senza tempo attira viaggiatori da tutto il mondo, che vengono in queste terre per carpirne i segreti più nascosti. Noi ci riusciremo?',
                'Questo itinerario è un 360°: il nostro grande classico che ti permette di scoprire la destinazione in ogni suo aspetto. I ritmi saranno sostenuti per riuscire a vedere quanto più possibile, ma avremo anche momenti di relax e divertimento - il giusto mix! Per questo motivo cambieremo hotel quasi ogni giorno e, per il bagaglio, zaino o valigia, scegli tu!',
                'Questo itinerario ha un livello di impegno fisico INTERMEDIO e il ritmo del viaggio è da considerarsi sostenuto. Sono previsti anche spostamenti di media-lunga durata ed escursioni che richiedono una buona preparazione fisica. Cambieremo struttura quasi tutti i giorni e ci aspettiamo da te un buon spirito di adattamento.',
                'Passaporto: in corso di validità. Visto: non serve per soggiorni di massimo 90 giorni. Attenzione: è necessario avere un biglietto di ritorno. Potrebbero prendere le impronte digitali e scattarti una foto. Prima di prenotare ricorda di controllare eventuali aggiornamenti su Viaggiare Sicuri.',
                'Questo viaggio inizia e finisce a Tokyo. Il primo giorno di viaggio ci troviamo entro le 18, l\'ultimo giorno potrai ripartire già dal mattino. Scopri di più sul ritrovo qui!',
                2 //trip_id
            ],//2
        ];

        foreach($descrptions as $descrption) {
            DB::table('descriptions')->insert([
                'description_header' => $descrption[0],
                'description1' => $descrption[1],
                'description2' => $descrption[2],
                'description3' => $descrption[3],
                'description4' => $descrption[4],
                'trip_id' => $descrption[5],
            ]);
        }
    }
}
