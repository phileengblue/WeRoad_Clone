import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-down-cover-medio-oriente',
  templateUrl: './down-cover-medio-oriente.component.html',
  styleUrls: ['./down-cover-medio-oriente.component.css']
})
export class DownCoverMedioOrienteComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/webp-large/11224/medio-oriente-desktop.webp',
      Citation:"Una parte del male che c'è in questa storia poté dipendere dalle nostre condizioni di vita. Per anni abbiamo vissuto gli uni con gli altri alla rinfusa, nel deserto nudo, sotto il cielo indifferente.",
      Author:'T.E. Lawrence',
      p:"Gli antichi chiamavano quest’area Levante: qui sorgeva il sole, qui sono sorte le religioni che dominano il mondo, qui sono nate le culture che hanno influenzato la storia dell’umanità. Tra le sabbie degli aridi deserto sono nascoste bellezze antiche e tesori preziosi, di qui passava la via delle Seta che percorse Marco Polo, in questa terra nacque e morì il figlio di Dio.Il Medio Oriente è un luogo di conflitti e condivisione, di fascino e contrasti, di lotte e battaglie per vivere nella pace."
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
