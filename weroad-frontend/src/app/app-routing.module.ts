import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaroselloComponent } from './componenti/carosello/carosello.component';
import { FooterComponent } from './componenti/footer/footer.component';
import { AgostoComponent } from './componenti/partenze/agosto/agosto.component';
import { RatingCollectionComponent } from './componenti/Homepage/rating-collection/rating-collection.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './componenti/CardHomePage/card/card.component';
import { Card1Component } from './componenti/CardHomePage/card1/card1.component';
import { CardDestinazioniComponent } from './componenti/America/card-destinazioni/card-destinazioni.component';
import { UpCoverComponent } from './componenti/America/up-cover/up-cover.component';
import { DescContinentComponent } from './componenti/America/desc-continent/desc-continent.component';
import { DownCoverComponent } from './componenti/America/down-cover/down-cover.component';
import { ViaggiEuropaComponent } from './componenti/Europa/viaggi-europa/viaggi-europa.component';
import { ViaggiNordAmericaComponent } from './componenti/America/viaggi-nord-america/viaggi-nord-america.component';
import { ViaggiOceaniaComponent } from './componenti/Oceania/viaggi-oceania/viaggi-oceania.component';
import { ViaggiAfricaComponent } from './componenti/Africa/viaggi-africa/viaggi-africa.component';
import { ViaggiAsiaComponent } from './componenti/Asia/viaggi-asia/viaggi-asia.component';
import { DiventaCoordinatoreComponent } from './componenti/CoordinatoreWeRoad/diventa-coordinatore/diventa-coordinatore.component';
import { CoordinatoriComponent } from './componenti/Pagina_Coordinatori/coordinatori/coordinatori.component';
import { HomeComponent } from './componenti/CardHomePage/home/home.component';

import { ViaggiSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/viaggi-sud-est-asiatico/viaggi-sud-est-asiatico.component';
import { ViaggiMiddleEastComponent } from './componenti/Medio_Oriente/viaggi-middle-east/viaggi-middle-east.component';
import { ViaggiItinerariNordEuropaComponent } from './componenti/Nord_Europa/viaggi-itinerari-nord-europa/viaggi-itinerari-nord-europa.component';
import { ViaggiCentroAmericaComponent } from './componenti/Centro_America/viaggi-centro-america/viaggi-centro-america.component';
import { ViaggiSudAmericaComponent } from './componenti/Sud_America/viaggi-sud-america/viaggi-sud-america.component';
import { EuropaovestComponent } from './componenti/Spagna_Portogallo/europaovest/europaovest.component';
import { ViaggiFranciaComponent } from './componenti/Francia_Belgio_PaesiBassi/viaggi-francia/viaggi-francia.component';
import { ViaggiItinerariGreciaComponent } from './componenti/Grecia_Balcani/viaggi-itinerari-grecia/viaggi-itinerari-grecia.component';
import { ViaggiEstEuropaComponent } from './componenti/Est_Europa/viaggi-est-europa/viaggi-est-europa.component';
import { DetailsTripComponent } from './details-trip/details-trip.component';
import { PageFeedbackComponent } from './componenti/page-feedback/page-feedback.component';
import { PageQuestionnaireComponent } from './componenti/page-questionnaire/page-questionnaire.component';
import { PageSummaryComponent } from './componenti/page-summary/page-summary.component';
import { CarrelloPageComponent } from './componenti/carrello-page/carrello-page.component';
import { RiepilogoCarrelloComponent } from './componenti/riepilogo-carrello/riepilogo-carrello.component';
import { TransazioneAppComponent } from './componenti/transazione-app/transazione-app.component';

const routes: Routes = [
  { path: 'carosello', component: CaroselloComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'rating+collection', component: RatingCollectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'card', component: CardComponent },
  { path: 'card1', component: Card1Component },
  { path: 'cardDestinazioni', component: CardDestinazioniComponent },
  { path: 'up-cover', component: UpCoverComponent },
  { path: 'desc-continent', component: DescContinentComponent },
  { path: 'down-cover', component: DownCoverComponent },
  {path:'viaggi-europa', component: ViaggiEuropaComponent},
  {path:'viaggi-nord-america', component:ViaggiNordAmericaComponent}, 
  {path:'viaggi-oceania', component:ViaggiOceaniaComponent},
  {path:'viaggi-africa', component:ViaggiAfricaComponent},
  {path:'viaggi-asia', component: ViaggiAsiaComponent},
  {path:'viaggi-sud-est-asiatico', component:ViaggiSudEstAsiaticoComponent},
  {path:'viaggi-middle-east', component: ViaggiMiddleEastComponent},
  {path:'viaggi-itinerari-nord-europa', component:ViaggiItinerariNordEuropaComponent},
  {path:'viaggi-centro-america', component:ViaggiCentroAmericaComponent},
  {path:'viaggi-sud-america', component:ViaggiSudAmericaComponent},
  {path:'europaovest', component:EuropaovestComponent},
  {path:'viaggi-francia', component:ViaggiFranciaComponent},
  {path:'viaggi-itinerari-grecia', component:ViaggiItinerariGreciaComponent},
  {path:'viaggi-est-europa', component:ViaggiEstEuropaComponent},
  { path: 'diventa-coordinatore', component: DiventaCoordinatoreComponent },
  { path: 'coordinatori', component: CoordinatoriComponent },
  { path: '', component: HomeComponent },
  { path: 'partenze/:mese/:anno', component: AgostoComponent }, 
  { path: 'details-trip/:id', component: DetailsTripComponent },
  { path: 'feedback', component:  PageFeedbackComponent},
  { path: 'page-questionnaire', component:  PageQuestionnaireComponent},
  { path: 'page-conferma', component:  PageSummaryComponent},
  {path:'carrello-page', component:CarrelloPageComponent},
  {path:'riepilogo-carrello', component:RiepilogoCarrelloComponent},
  {path:'transazione-successo', component:TransazioneAppComponent},

  



  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
