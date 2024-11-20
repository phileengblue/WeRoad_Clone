import { Component } from '@angular/core';

@Component({
  selector: 'app-group-interview-bootcamp',
  templateUrl: './group-interview-bootcamp.component.html',
  styleUrls: ['./group-interview-bootcamp.component.css']
})
export class GroupInterviewBootcampComponent {

  grIn =[
    {
      title:"Group Interview"
    }
  ]
  grInBox =[
    {
      announce:"To be announced",
      title:"Non ci sono Group Interview in programma",
      p:"Ripartiremo con le selezioni nel 2025!"
    }
  ]
  btCmp =[
    {
      title:"Bootcamp"
    }
  ]
  btCmpBox =[
    {
      announce:"To be announced",
      title:"Non ci sono Bootcamp in programma",
      p:"Ripartiremo con le selezioni nel 2025!"
    }
  ]

}
