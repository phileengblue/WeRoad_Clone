import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viaggio',
  templateUrl: './viaggio.component.html',
  styleUrls: ['./viaggio.component.css']
})
export class ViaggioComponent {
  @Input() titolo: string = 'Viaggio 1'; 
  @Input() info: string = 'Titolo + Prezzo'; 
  @Input() imageSrc: string = 'https://strapi-imaginary.weroad.it/resource/webp-icon/104128/.webp'; 
}
