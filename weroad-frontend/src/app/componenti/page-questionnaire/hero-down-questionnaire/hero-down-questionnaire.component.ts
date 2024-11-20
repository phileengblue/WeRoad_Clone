import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-hero-down-questionnaire',
  templateUrl: './hero-down-questionnaire.component.html',
  styleUrls: ['./hero-down-questionnaire.component.css']
})

export class HeroDownQuestionnaireComponent {
  isMobileView: boolean = false;
  downcover = [
    {
      Image:'https://strapi-imaginary.weroad.it/resource/cover/4453/sud-america-desktop.jpg',
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
