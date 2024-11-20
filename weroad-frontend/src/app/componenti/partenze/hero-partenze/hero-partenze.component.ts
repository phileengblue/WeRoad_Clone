import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-partenze',
  templateUrl: './hero-partenze.component.html',
  styleUrls: ['./hero-partenze.component.css'],
})
export class HeroPartenzeComponent {
  @Input() upcover: any = {}; 

  get imageUrl(): string {
    return this.upcover.image?.url || ''; 
  }

  get title(): string {
    return this.upcover.month?.title || '';
  }

  get subtitle(): string {
    return this.upcover.month?.subTitle || '';
  }
}
