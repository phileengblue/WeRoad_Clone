import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-calendar',
  templateUrl: './modal-calendar.component.html',
  styleUrls: ['./modal-calendar.component.css']
})
export class ModalCalendarComponent {
  @Input() trip: any; 

}
