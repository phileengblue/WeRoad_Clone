import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzProgressStrokeLinecapType } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-details-text',
  templateUrl: './details-text.component.html',
  styleUrls: ['./details-text.component.css']
})
export class DetailsTextComponent {
  show: boolean = false;
  close: boolean = true;
  @Input() trip: any; 

  Mobile= false; 
  square: NzProgressStrokeLinecapType;
  constructor(private breakpointObserver: BreakpointObserver) { this.square = 'square';}

  ngOnInit(){
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.Mobile = result.matches;
      });
  }

  toggleShow() {
    this.show = !this.show;
  }

  closeBanner() {
    this.close = !this.close;
  }

  card = [
    {image:"../../assets/trip-details/photo-grid/image-1.png"},
    {image:"../../assets/trip-details/photo-grid/image-2.png"},
    {image:"../../assets/trip-details/photo-grid/image-3.png"},
    {image:"../../assets/trip-details/photo-grid/image-4.png"},
    {image:"../../assets/trip-details/photo-grid/image-5.png"},
    {image:"../../assets/trip-details/photo-grid/image-6.png"},
    // {image:"../../assets/trip-details/photo-grid/image-7.png"},
    // {image:"../../assets/trip-details/photo-grid/image-9.png"},
    // {image:"../../assets/trip-details/photo-grid/image-10.png"},
    // {image:"../../assets/trip-details/photo-grid/image-11.png"},
    // {image:"../../assets/trip-details/photo-grid/image-12.png"},
    // {image:"../../assets/trip-details/photo-grid/image-13.png"},
    // {image:"../../assets/trip-details/photo-grid/image-14.png"},
    // {image:"../../assets/trip-details/photo-grid/image-15.png"},
    // {image:"../../assets/trip-details/photo-grid/image-16.png"},
    // {image:"../../assets/trip-details/photo-grid/image-17.png"},
    // {image:"../../assets/trip-details/photo-grid/image-18.png"},
  ]


}
