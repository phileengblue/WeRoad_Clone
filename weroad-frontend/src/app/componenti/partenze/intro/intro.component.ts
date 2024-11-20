import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Input() upcover: any = {}; 

  get descriptionTitle(): string {
    return this.upcover.month?.descriptionTitle || '';
  }

  get descriptionSubTitle(): string {
    return this.upcover.month?.descriptionSubTitle || '';
  }
  
  get description(): string {
    return this.upcover.month?.description || '';
  }
}

