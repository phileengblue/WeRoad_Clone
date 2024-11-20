import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-sud-america',
  templateUrl: './down-cover-sud-america.component.html',
  styleUrls: ['./down-cover-sud-america.component.css']
})
export class DownCoverSudAmericaComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11223/Viaggi-Sud-America-Machu-Picchu.webp',
      Citation:"Con tu amor me está llamando y a través de tu vida me está dando la vida que me falta",
      Author:'Pablo Neruda',
      p:"Con un viaggio in Sud America si vivono mille vite, perché in Sudamerica tutto è poesia, passione, calore e sentimenti vissuti intensamente. Non a caso è proprio con una poesia che Neruda parla del suo amato continente: una terra ricca di popoli e culture oltre a bellezze naturali e siti antichissimi rimasti segreti per secoli. Qui viene custodito il “polmone del mondo”, l’immensa Foresta Amazzonica, il ghiacciaio più esteso del pianeta, il Perito Moreno, e la città perduta di Macchu Picchu; qui si balla la salsa, il tango e il merengue; qui si beve il mate e si masticano le foglie di coca; qui ci si gode la vita, così come viene. E anche noi faremo così: vivremo intensamente ogni giorno del nostro viaggio, che sia tra le Ande peruviane o tra le alte palme della Colombia, dalla città più a sud del mondo, nella disabitata Patagonia, fino alle strade della popolatissima Rio de Janeiro, dalle cascate di Iguazù fino alle onde del mare caraibico di Cartagena."
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobileView = result.matches;
      });
  }

}
