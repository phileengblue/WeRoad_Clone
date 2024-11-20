import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'; 



import { FooterComponent } from './componenti/footer/footer.component';

import { AgostoComponent } from './componenti/partenze/agosto/agosto.component';
import { RatingCollectionComponent } from './componenti/Homepage/rating-collection/rating-collection.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { CaroselloComponent } from './componenti/carosello/carosello.component';
import { HeroPartenzeComponent } from './componenti/partenze/hero-partenze/hero-partenze.component';
import { IntroComponent } from './componenti/partenze/intro/intro.component';
import { FilterComponent } from './componenti/partenze/filter/filter.component';
import { TablePartenzeComponent } from './componenti/partenze/table-partenze/table-partenze.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { SearchbarComponent } from './componenti/searchbar/searchbar.component'

import { CardComponent } from './componenti/CardHomePage/card/card.component';
import { Card1Component } from './componenti/CardHomePage/card1/card1.component';
import { CardDestinazioniComponent } from './componenti/America/card-destinazioni/card-destinazioni.component';
import { UpCoverComponent } from './componenti/America/up-cover/up-cover.component';
import { DescContinentComponent } from './componenti/America/desc-continent/desc-continent.component';
import { DownCoverComponent } from './componenti/America/down-cover/down-cover.component';
import { UpCoverEuropaComponent } from './componenti/Europa/up-cover-europa/up-cover-europa.component';
import { DescContinentEuropaComponent } from './componenti/Europa/desc-continent-europa/desc-continent-europa.component';
import { DownCoverEuropaComponent } from './componenti/Europa/down-cover-europa/down-cover-europa.component';
import { CardDestinazioniEuropaComponent } from './componenti/Europa/card-destinazioni-europa/card-destinazioni-europa.component';
import { ViaggiEuropaComponent } from './componenti/Europa/viaggi-europa/viaggi-europa.component';
import { ViaggiNordAmericaComponent } from './componenti/America/viaggi-nord-america/viaggi-nord-america.component';
import { HomeComponent } from './componenti/CardHomePage/home/home.component';
import { UpCoverOceaniaComponent } from './componenti/Oceania/up-cover-oceania/up-cover-oceania.component';
import { DownCoverOceaniaComponent } from './componenti/Oceania/down-cover-oceania/down-cover-oceania.component';
import { ViaggiOceaniaComponent } from './componenti/Oceania/viaggi-oceania/viaggi-oceania.component';
import { CardDestinazioniOceaniaComponent } from './componenti/Oceania/card-destinazioni-oceania/card-destinazioni-oceania.component';
import { DescContinentOceaniaComponent } from './componenti/Oceania/desc-continent-oceania/desc-continent-oceania.component';
import { UpCoverAfricaComponent } from './componenti/Africa/up-cover-africa/up-cover-africa.component';
import { DownCoverAfricaComponent } from './componenti/Africa/down-cover-africa/down-cover-africa.component';
import { ViaggiAfricaComponent } from './componenti/Africa/viaggi-africa/viaggi-africa.component';
import { DescContinentAfricaComponent } from './componenti/Africa/desc-continent-africa/desc-continent-africa.component';
import { CardDestinazioniAfricaComponent } from './componenti/Africa/card-destinazioni-africa/card-destinazioni-africa.component';
import { UpCoverAsiaComponent } from './componenti/Asia/up-cover-asia/up-cover-asia.component';
import { DownCoverAsiaComponent } from './componenti/Asia/down-cover-asia/down-cover-asia.component';
import { ViaggiAsiaComponent } from './componenti/Asia/viaggi-asia/viaggi-asia.component';
import { DescContinentAsiaComponent } from './componenti/Asia/desc-continent-asia/desc-continent-asia.component';
import { CardDestinazioniAsiaComponent } from './componenti/Asia/card-destinazioni-asia/card-destinazioni-asia.component';
import { DescRoleComponent } from './componenti/CoordinatoreWeRoad/desc-role/desc-role.component';
import { DiventaCoordinatoreComponent } from './componenti/CoordinatoreWeRoad/diventa-coordinatore/diventa-coordinatore.component';
import { DescCandidatureComponent } from './componenti/CoordinatoreWeRoad/desc-candidature/desc-candidature.component';
import { DescCandidatureExpressComponent } from './componenti/CoordinatoreWeRoad/desc-candidature-express/desc-candidature-express.component';
import { SelectionProcessComponent } from './componenti/CoordinatoreWeRoad/selection-process/selection-process.component';
import { GroupInterviewBootcampComponent } from './componenti/CoordinatoreWeRoad/group-interview-bootcamp/group-interview-bootcamp.component';
import { UpCoverCoordinatoreComponent } from './componenti/CoordinatoreWeRoad/up-cover-coordinatore/up-cover-coordinatore.component';
import { CardCoordinatoreComponent } from './componenti/CoordinatoreWeRoad/card-coordinatore/card-coordinatore.component';
import { CaroselloCoordinatoreComponent } from './componenti/CoordinatoreWeRoad/carosello-coordinatore/carosello-coordinatore.component';
import { UpCoverCoordinatoriComponent } from './componenti/Pagina_Coordinatori/up-cover-coordinatori/up-cover-coordinatori.component';
import { DescCoordinatoriComponent } from './componenti/Pagina_Coordinatori/desc-coordinatori/desc-coordinatori.component';
import { CoordinatoriComponent } from './componenti/Pagina_Coordinatori/coordinatori/coordinatori.component';
import { TrisCardCoordinatoriComponent } from './componenti/Pagina_Coordinatori/tris-card-coordinatori/tris-card-coordinatori.component';
import { CercaCoordinatoriComponent } from './componenti/Pagina_Coordinatori/cerca-coordinatori/cerca-coordinatori.component';
import { FaqCoordinatoriComponent } from './componenti/Pagina_Coordinatori/faq-coordinatori/faq-coordinatori.component';
import { CircleCardCoordinatoriComponent } from './componenti/Pagina_Coordinatori/circle-card-coordinatori/circle-card-coordinatori.component';
import { PartnerCollabComponent } from './componenti/CardHomePage/partner-collab/partner-collab.component';
import { CaroselloGiornaliComponent } from './componenti/CardHomePage/carosello-giornali/carosello-giornali.component';
import { UpCoverSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/up-cover-sud-est-asiatico/up-cover-sud-est-asiatico.component';
import { DescContinentSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/desc-continent-sud-est-asiatico/desc-continent-sud-est-asiatico.component';
import { DownCoverSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/down-cover-sud-est-asiatico/down-cover-sud-est-asiatico.component';
import { ViaggiSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/viaggi-sud-est-asiatico/viaggi-sud-est-asiatico.component';
import { CardDestinazioniSudEstAsiaticoComponent } from './componenti/Sud_Est_Asiatico/card-destinazioni-sud-est-asiatico/card-destinazioni-sud-est-asiatico.component';
import { UpCoverMedioOrienteComponent } from './componenti/Medio_Oriente/up-cover-medio-oriente/up-cover-medio-oriente.component';
import { ViaggiMiddleEastComponent } from './componenti/Medio_Oriente/viaggi-middle-east/viaggi-middle-east.component';
import { DescContinentMedioOrienteComponent } from './componenti/Medio_Oriente/desc-continent-medio-oriente/desc-continent-medio-oriente.component';
import { DownCoverMedioOrienteComponent } from './componenti/Medio_Oriente/down-cover-medio-oriente/down-cover-medio-oriente.component';
import { CardDestinazioniMedioOrienteComponent } from './componenti/Medio_Oriente/card-destinazioni-medio-oriente/card-destinazioni-medio-oriente.component';
import { UpCoverNordEuropaComponent } from './componenti/Nord_Europa/up-cover-nord-europa/up-cover-nord-europa.component';
import { ViaggiItinerariNordEuropaComponent } from './componenti/Nord_Europa/viaggi-itinerari-nord-europa/viaggi-itinerari-nord-europa.component';
import { DescContinentNordEuropaComponent } from './componenti/Nord_Europa/desc-continent-nord-europa/desc-continent-nord-europa.component';
import { DownCoverNordEuropaComponent } from './componenti/Nord_Europa/down-cover-nord-europa/down-cover-nord-europa.component';
import { CardDestinazioniNordEuropaComponent } from './componenti/Nord_Europa/card-destinazioni-nord-europa/card-destinazioni-nord-europa.component';
import { ViaggiCentroAmericaComponent } from './componenti/Centro_America/viaggi-centro-america/viaggi-centro-america.component';
import { UpCoverCentroAmericaComponent } from './componenti/Centro_America/up-cover-centro-america/up-cover-centro-america.component';
import { DescContinentCentroAmericaComponent } from './componenti/Centro_America/desc-continent-centro-america/desc-continent-centro-america.component';
import { DownCoverCentroAmericaComponent } from './componenti/Centro_America/down-cover-centro-america/down-cover-centro-america.component';
import { CardDestinazioniCentroAmericaComponent } from './componenti/Centro_America/card-destinazioni-centro-america/card-destinazioni-centro-america.component';
import { UpCoverSudAmericaComponent } from './componenti/Sud_America/up-cover-sud-america/up-cover-sud-america.component';
import { ViaggiSudAmericaComponent } from './componenti/Sud_America/viaggi-sud-america/viaggi-sud-america.component';
import { DescContinentSudAmericaComponent } from './componenti/Sud_America/desc-continent-sud-america/desc-continent-sud-america.component';
import { DownCoverSudAmericaComponent } from './componenti/Sud_America/down-cover-sud-america/down-cover-sud-america.component';
import { CardDestinazioniSudAmericaComponent } from './componenti/Sud_America/card-destinazioni-sud-america/card-destinazioni-sud-america.component';
import { UpCoverSpagnaPortogalloComponent } from './componenti/Spagna_Portogallo/up-cover-spagna-portogallo/up-cover-spagna-portogallo.component';
import { EuropaovestComponent } from './componenti/Spagna_Portogallo/europaovest/europaovest.component';
import { DescContinentSpagnaPortogalloComponent } from './componenti/Spagna_Portogallo/desc-continent-spagna-portogallo/desc-continent-spagna-portogallo.component';
import { CardDestinazioniSpagnaPortogalloComponent } from './componenti/Spagna_Portogallo/card-destinazioni-spagna-portogallo/card-destinazioni-spagna-portogallo.component';
import { UpCoverFranciaBelgioPaesiBassiComponent } from './componenti/Francia_Belgio_PaesiBassi/up-cover-francia-belgio-paesi-bassi/up-cover-francia-belgio-paesi-bassi.component';
import { ViaggiFranciaComponent } from './componenti/Francia_Belgio_PaesiBassi/viaggi-francia/viaggi-francia.component';
import { DescContinentFranciaBelgioPaesiBassiComponent } from './componenti/Francia_Belgio_PaesiBassi/desc-continent-francia-belgio-paesi-bassi/desc-continent-francia-belgio-paesi-bassi.component';
import { CardDestinazioniFranciaBelgioPaesiBassiComponent } from './componenti/Francia_Belgio_PaesiBassi/card-destinazioni-francia-belgio-paesi-bassi/card-destinazioni-francia-belgio-paesi-bassi.component';
import { UpCoverGreciaBalcaniComponent } from './componenti/Grecia_Balcani/up-cover-grecia-balcani/up-cover-grecia-balcani.component';
import { ViaggiItinerariGreciaComponent } from './componenti/Grecia_Balcani/viaggi-itinerari-grecia/viaggi-itinerari-grecia.component';
import { DescContinentGreciaBalcaniComponent } from './componenti/Grecia_Balcani/desc-continent-grecia-balcani/desc-continent-grecia-balcani.component';
import { CardDestinazioniGreciaBalcaniComponent } from './componenti/Grecia_Balcani/card-destinazioni-grecia-balcani/card-destinazioni-grecia-balcani.component';
import { UpCoverEstEuropaComponent } from './componenti/Est_Europa/up-cover-est-europa/up-cover-est-europa.component';
import { ViaggiEstEuropaComponent } from './componenti/Est_Europa/viaggi-est-europa/viaggi-est-europa.component';
import { DescContinentEstEuropaComponent } from './componenti/Est_Europa/desc-continent-est-europa/desc-continent-est-europa.component';
import { CardDestinazioniEstEuropaComponent } from './componenti/Est_Europa/card-destinazioni-est-europa/card-destinazioni-est-europa.component';
import { DetailsTripComponent } from './details-trip/details-trip.component';
import { ImageHeroComponent } from './details-trip/image-hero/image-hero.component';
import { ModalCalendarComponent } from './details-trip/modal-calendar/modal-calendar.component';
import { CarouselPercentualComponent } from './details-trip/carousel-percentual/carousel-percentual.component';
import { DetailsTextComponent } from './details-trip/details-text/details-text.component';
import { ComponentRecensioniComponent } from './details-trip/component-recensioni/component-recensioni.component';
import { DetailsCoordinatoriComponent } from './details-trip/details-coordinatori/details-coordinatori.component';
import { SixGridDetailsTripComponent } from './details-trip/six-grid-details-trip/six-grid-details-trip.component';
import { InfoDetailsComponent } from './details-trip/info-details/info-details.component';
import { TableDetailsComponent } from './details-trip/table-details/table-details.component';
import { CaroselloDetailsComponent } from './details-trip/carosello-details/carosello-details.component';
import { PageFeedbackComponent } from './componenti/page-feedback/page-feedback.component';
import { TripDragAndDropComponent } from './componenti/page-feedback/trip-drag-and-drop/trip-drag-and-drop.component';
import { PageQuestionnaireComponent } from './componenti/page-questionnaire/page-questionnaire.component';
import { NavbarQuestionnaireComponent } from './componenti/page-questionnaire/navbar-questionnaire/navbar-questionnaire.component';
import { HeroDownQuestionnaireComponent } from './componenti/page-questionnaire/hero-down-questionnaire/hero-down-questionnaire.component';
import { FormFeedbackComponent } from './componenti/page-questionnaire/form-feedback/form-feedback.component';
import { PageSummaryComponent } from './componenti/page-summary/page-summary.component';
import { SummaryComponent } from './componenti/page-summary/summary/summary.component';
import { DownSummaryHeroComponent } from './componenti/page-summary/down-summary-hero/down-summary-hero.component';
import { ButtonTextRingraziamentiComponent } from './componenti/page-summary/button-text-ringraziamenti/button-text-ringraziamenti.component';
import { CarrelloPageComponent } from './componenti/carrello-page/carrello-page.component';
import { CheckButtonComponent } from './componenti/carrello-page/check-button/check-button.component';
import { CardViaggiComponent } from './componenti/carrello-page/card-viaggi/card-viaggi.component';
import { TotalCarrellComponent } from './componenti/carrello-page/total-carrell/total-carrell.component';
import { RiepilogoCarrelloComponent } from './componenti/riepilogo-carrello/riepilogo-carrello.component';
import { DatiUtenteComponent } from './componenti/riepilogo-carrello/dati-utente/dati-utente.component';
import { PagamentoComponent } from './componenti/riepilogo-carrello/pagamento/pagamento.component';
import { IndirizzoFatturazioneComponent } from './componenti/riepilogo-carrello/indirizzo-fatturazione/indirizzo-fatturazione.component';
import { ConfermaComponent } from './componenti/riepilogo-carrello/conferma/conferma.component';
import { ProcediPagamentoComponent } from './componenti/riepilogo-carrello/procedi-pagamento/procedi-pagamento.component';
import { ResumeCarrelloComponent } from './componenti/riepilogo-carrello/resume-carrello/resume-carrello.component';
import { TransazioneAppComponent } from './componenti/transazione-app/transazione-app.component';
import { MessaggioComponent } from './componenti/TransazioneApp/messaggio/messaggio.component';
import { SpuntaVerdeComponent } from './componenti/TransazioneApp/spunta-verde/spunta-verde.component';
import { BottoneHomeComponent } from './componenti/TransazioneApp/bottone-home/bottone-home.component';
import { ViaggioComponent } from './componenti/viaggio/viaggio.component';






registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    CaroselloComponent,
    FooterComponent,

    AgostoComponent,
    RatingCollectionComponent,
    LoginComponent,
    SignUpComponent,
    HeroPartenzeComponent,
    IntroComponent,
    FilterComponent,
    TablePartenzeComponent,
    CardComponent,
    Card1Component,
    CardDestinazioniComponent,
    UpCoverComponent,
    DescContinentComponent,
    DownCoverComponent,
    UpCoverEuropaComponent,
    DescContinentEuropaComponent,
    DownCoverEuropaComponent,
    CardDestinazioniEuropaComponent,
    ViaggiEuropaComponent,
    ViaggiNordAmericaComponent,
    HomeComponent,
    UpCoverOceaniaComponent,
    DownCoverOceaniaComponent,
    ViaggiOceaniaComponent,
    CardDestinazioniOceaniaComponent,
    DescContinentOceaniaComponent,
    UpCoverAfricaComponent,
    DownCoverAfricaComponent,
    ViaggiAfricaComponent,
    DescContinentAfricaComponent,
    CardDestinazioniAfricaComponent,
    UpCoverAsiaComponent,
    DownCoverAsiaComponent,
    ViaggiAsiaComponent,
    DescContinentAsiaComponent,
    CardDestinazioniAsiaComponent,
    DescRoleComponent,
    DiventaCoordinatoreComponent,
    DescCandidatureComponent,
    DescCandidatureExpressComponent,
    SelectionProcessComponent,
    GroupInterviewBootcampComponent,
    UpCoverCoordinatoreComponent,
    CardCoordinatoreComponent,
    CaroselloCoordinatoreComponent,
    UpCoverCoordinatoriComponent,
    DescCoordinatoriComponent,
    CoordinatoriComponent,
    TrisCardCoordinatoriComponent,
    CercaCoordinatoriComponent,
    FaqCoordinatoriComponent,
    CircleCardCoordinatoriComponent,
    PartnerCollabComponent,
    CaroselloGiornaliComponent,
    UpCoverSudEstAsiaticoComponent,
    DescContinentSudEstAsiaticoComponent,
    DownCoverSudEstAsiaticoComponent,
    ViaggiSudEstAsiaticoComponent,
    CardDestinazioniSudEstAsiaticoComponent,
    UpCoverMedioOrienteComponent,
    ViaggiMiddleEastComponent,
    DescContinentMedioOrienteComponent,
    DownCoverMedioOrienteComponent,
    CardDestinazioniMedioOrienteComponent,
    UpCoverNordEuropaComponent,
    ViaggiItinerariNordEuropaComponent,
    DescContinentNordEuropaComponent,
    DownCoverNordEuropaComponent,
    CardDestinazioniNordEuropaComponent,
    ViaggiCentroAmericaComponent,
    UpCoverCentroAmericaComponent,
    DescContinentCentroAmericaComponent,
    DownCoverCentroAmericaComponent,
    CardDestinazioniCentroAmericaComponent,
    UpCoverSudAmericaComponent,
    ViaggiSudAmericaComponent,
    DescContinentSudAmericaComponent,
    DownCoverSudAmericaComponent,
    CardDestinazioniSudAmericaComponent,
    UpCoverSpagnaPortogalloComponent,
    EuropaovestComponent,
    DescContinentSpagnaPortogalloComponent,
    CardDestinazioniSpagnaPortogalloComponent,
    UpCoverFranciaBelgioPaesiBassiComponent,
    ViaggiFranciaComponent,
    DescContinentFranciaBelgioPaesiBassiComponent,
    CardDestinazioniFranciaBelgioPaesiBassiComponent,
    UpCoverGreciaBalcaniComponent,
    ViaggiItinerariGreciaComponent,
    DescContinentGreciaBalcaniComponent,
    CardDestinazioniGreciaBalcaniComponent,
    UpCoverEstEuropaComponent,
    ViaggiEstEuropaComponent,
    DescContinentEstEuropaComponent,
    CardDestinazioniEstEuropaComponent,
    NavbarComponent,
    SearchbarComponent,
    DetailsTripComponent,
    ImageHeroComponent,
    ModalCalendarComponent,
    CarouselPercentualComponent,
    DetailsTextComponent,
    ComponentRecensioniComponent,
    DetailsCoordinatoriComponent,
    SixGridDetailsTripComponent,
    InfoDetailsComponent,
    TableDetailsComponent,
    CaroselloDetailsComponent,
    PageFeedbackComponent,
    TripDragAndDropComponent,
    PageQuestionnaireComponent,
    NavbarQuestionnaireComponent,
    HeroDownQuestionnaireComponent,
    FormFeedbackComponent,
    PageSummaryComponent,
    SummaryComponent,
    DownSummaryHeroComponent,
    ButtonTextRingraziamentiComponent,
   CaroselloDetailsComponent,
    PageFeedbackComponent,
    TripDragAndDropComponent,
    PageQuestionnaireComponent,
    NavbarQuestionnaireComponent,
    HeroDownQuestionnaireComponent,
    FormFeedbackComponent,
    PageSummaryComponent,
    SummaryComponent,
    DownSummaryHeroComponent,
    ButtonTextRingraziamentiComponent,
    CarrelloPageComponent,
    TotalCarrellComponent,
    RiepilogoCarrelloComponent,
    DatiUtenteComponent,
    PagamentoComponent,
    IndirizzoFatturazioneComponent,
    ConfermaComponent,
    ProcediPagamentoComponent,
    ResumeCarrelloComponent,
    TransazioneAppComponent,
    MessaggioComponent,
    SpuntaVerdeComponent,
    BottoneHomeComponent,
    CheckButtonComponent,
    CardViaggiComponent,
    ViaggioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzGridModule,
    NzRateModule,
    NzModalModule,
    NzCalendarModule,
    NzCarouselModule,
    NzProgressModule,
    ReactiveFormsModule,
    NzIconModule, 
    NzStepsModule,
    DragDropModule,
    NzSliderModule,
    NzInputNumberModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: it_IT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
