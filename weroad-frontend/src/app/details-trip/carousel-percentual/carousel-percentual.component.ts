import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzProgressStrokeLinecapType } from 'ng-zorro-antd/progress';
import { ShoDetailsService } from 'src/app/shared/services/showDetail/sho-details.service';

@Component({
  selector: 'app-carousel-percentual',
  templateUrl: './carousel-percentual.component.html',
  styleUrls: ['./carousel-percentual.component.css']
})
export class CarouselPercentualComponent {
  Mobile= false;
  square: NzProgressStrokeLinecapType;
  constructor(private breakpointObserver: BreakpointObserver,     private ShoService: ShoDetailsService,

  ) { this.square = 'square';}

  ngOnInit(){
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.Mobile = result.matches;
      });


  }

}
