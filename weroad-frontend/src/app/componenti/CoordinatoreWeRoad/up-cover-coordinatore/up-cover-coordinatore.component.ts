import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-up-cover-coordinatore',
  templateUrl: './up-cover-coordinatore.component.html',
  styleUrls: ['./up-cover-coordinatore.component.css']
})
export class UpCoverCoordinatoreComponent  implements OnInit{
  isMobileView: boolean = false;
  isTabletView: boolean = false;

  
  upcover = [
    {
     // Video:'../Video/Coordinatore/Bootcamp Orvieto WeRoad 2019.mp4',
      Image:'https://strapi-imaginary.weroad.it/resource/webp-medium/3581/tour-norvegia-lofoten-capo-nord.webp',
      title:'Diventa Coordinatore WeRoad',
      subtitle:'Esplora il mondo e conosci nuovi amici'
    }
  ]
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isMobileView = result.matches;
    });

  this.breakpointObserver.observe([Breakpoints.Tablet])
    .subscribe(result => {
      this.isTabletView = result.matches;
    });
  }
}
