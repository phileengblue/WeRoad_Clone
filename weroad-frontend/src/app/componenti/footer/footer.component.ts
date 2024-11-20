import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isCollapsed = true;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  Destinazioni = [
    {
      title: 'Viaggi di gruppo Nord America',
      href: 'viaggi-nord-america',
    },
    {
      title: 'Viaggi di gruppo Centro America',
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
    {
      title: 'Viaggi di gruppo Sud America',
      href: 'https://www.weroad.it/viaggi-sud-america',
    },

    {
      title: 'Viaggi di gruppo Africa',
      href: 'viaggi-africa',
    },
    {
      title: 'Viaggi di gruppo Medio Oriente',
      href: 'https://www.weroad.it/viaggi-middle-east',
    },
    {
      title: 'Viaggi di gruppo Europa',
      href: 'viaggi-europa',
    },
    {
      title: 'Viaggi di gruppo Nord Europa',
      href: 'https://www.weroad.it/viaggi-itinerari-nord-europa',
    },
    {
      title: 'Tutte le destinazioni',
      href: 'https://www.weroad.it/viaggi',
    },
  ];

  Mondo_Weroad = [
    {
      title: 'Come funziona',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: "Fasce d'età",
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
    {
      title: 'Il Buon Weroad',
      href: 'https://www.weroad.it/viaggi-sud-america',
    },

    {
      title: 'Mood di viaggio',
      href: 'https://www.weroad.it/viaggi-africa',
    },
    {
      title: 'Cosa dicono di noi su Trustpilot',
      href: 'https://www.weroad.it/viaggi-middle-east',
    },
    {
      title: 'Cosa dicono di noi su Feefo',
      href: 'https://www.weroad.it/viaggi-europa',
    },
  ];

  Community = [
    {
      title: 'Instagram',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: 'TikTok',
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
    {
      title: 'Telegram',
      href: 'https://www.weroad.it/viaggi-sud-america',
    },

    {
      title: 'Gruppo Facebook',
      href: 'https://www.weroad.it/viaggi-africa',
    },
    {
      title: 'Blog (leggilo, è bello)',
      href: 'https://www.weroad.it/viaggi-middle-east',
    },
    {
      title: 'Condividi le tue foto da WeRoader',
      href: 'https://www.weroad.it/viaggi-europa',
    },
  ];
  Coordinatori = [
    {
      title: 'I nostri Coordinatori',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: 'Diventa Coordinatore',
      href: 'diventa-coordinatore',
    },
    {
      title: 'Coordinatori - Login',
      href: 'login',
    },

    {
      title: 'Bootcamp: termini e condizioni',
      href: 'https://www.weroad.it/viaggi-africa',
    },
  ];
  Info_Link = [
    {
      title: 'Contatti',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: 'FAQ',
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
    {
      title: 'Termini e condizioni',
      href: 'https://www.weroad.it/viaggi-sud-america',
    },

    {
      title: 'Condizioni generali',
      href: 'https://www.weroad.it/viaggi-africa',
    },
    {
      title: 'Modulo informativo standard',
      href: 'https://www.weroad.it/viaggi-middle-east',
    },
    {
      title: 'Policy annullamento viaggio',
      href: 'https://www.weroad.it/viaggi-europa',
    },
    {
      title: 'Viaggi di gruppo Nord Europa',
      href: 'https://www.weroad.it/viaggi-itinerari-nord-europa',
    },
    {
      title: 'Tutte le destinazioni',
      href: 'https://www.weroad.it/viaggi',
    },
  ];
  Corporate = [
    {
      title: 'Lavora con noi',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: 'Lavora con noi se sei un DEV',
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
    {
      title: 'Corporate website',
      href: 'https://www.weroad.it/viaggi-sud-america',
    },

    {
      title: 'Linkdln',
      href: 'https://www.weroad.it/viaggi-africa',
    },
    {
      title: 'Twitter',
      href: 'https://www.weroad.it/viaggi-middle-east',
    },
    {
      title: "Cos'è WeRoad, ma in un video",
      href: 'https://www.weroad.it/viaggi-europa',
    },
  ];
  Weroad_Liovers = [
    {
      title: 'Git Cards',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
    {
      title: 'WeRoad Shop',
      href: 'https://www.weroad.it/viaggi-centro-america',
    },
  ];
  Company = [
    {
      title: 'Wellfare & servizi per la tua azienda',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
  ];
  DMCS = [
    {
      title: 'Become our partner',
      href: 'https://www.weroad.it/viaggi-nord-america',
    },
  ];
}
