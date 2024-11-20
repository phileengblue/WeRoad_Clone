import { Component } from '@angular/core';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent {
  turns = [
    {
      title: 'Tenerife',
      intenerario:'Canarie: Tenerife 360 ',
      startDate: '31 Ago',
      endDate: '07 Set',
      days: '8 giorni',
      nights: '7 notti',
      status: 'Ultimi posti',
      coordinator: 'Ilenia Terracchio',
      link_coordinator: '',
      coordinatorInfo: 'Chiedi informazioni a Marta su questo turno nel nostro gruppo Facebook',
      link_coordinatorInfo: 'https://www.facebook.com/groups/weroadit/permalink/3736875749862113/',
      ageRange: 'ETÀ 25-35',
      total: '1029€',
      deposit: '100€',
      balance: '979€',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/107326/.webp',
      link: '#',
      oldTotal: '1070€',
      logo_weroadx:'https://cdn.weroad.io/common/images/product-line-logos/logo-wx.svg'
    }, {
      title: 'Tenerife',
      intenerario:'Canarie: Tenerife 360 ',
      startDate: '31 Ago',
      endDate: '07 Set',
      days: '8 giorni',
      nights: '7 notti',
      like_su: 'Confermato',
      coordinator: 'Ilenia Terracchio',
      link_coordinator: '',
      coordinatorInfo: 'Chiedi informazioni a Marta su questo turno nel nostro gruppo Facebook',
      link_coordinatorInfo: 'https://www.facebook.com/groups/weroadit/permalink/3736875749862113/',
      collection: 'https://cdn.weroad.io/common/images/product-line-logos/logo-pp.svg',
      total: '1029€',
      deposit: '100€',
      balance: '979€',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/107326/.webp',
      link: '#',
      oldTotal: '1070€'
    },  {
      title: 'Tenerife',
      intenerario:'Canarie: Tenerife 360 ',
      startDate: '31 Ago',
      endDate: '07 Set',
      days: '8 giorni',
      nights: '7 notti',
      status2: 'On request',
      coordinator: 'Ilenia Terracchio',
      link_coordinator: '',
      coordinatorInfo: 'Chiedi informazioni a Marta su questo turno nel nostro gruppo Facebook',
      link_coordinatorInfo: 'https://www.facebook.com/groups/weroadit/permalink/3736875749862113/',
      ageRange: 'ETÀ 25-35',
      total: '1029€',
      deposit: '100€',
      balance: '979€',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/107326/.webp',
      link: '#',
      oldTotal: '1070€'
    },   {
      title: 'Tenerife',
      intenerario:'Canarie: Tenerife 360 ',
      startDate: '31 Ago',
      endDate: '07 Set',
      days: '8 giorni',
      nights: '7 notti',
      status: 'Ultimi posti',
      coordinator: 'Ilenia Terracchio',
      link_coordinator: '',
      coordinatorInfo: 'Chiedi informazioni a Marta su questo turno nel nostro gruppo Facebook',
      link_coordinatorInfo: 'https://www.facebook.com/groups/weroadit/permalink/3736875749862113/',
      age35:'ETÀ 35+',
      total: '1029€',
      deposit: '100€',
      balance: '979€',
      image: 'https://strapi-imaginary.weroad.it/resource/webp-icon/107326/.webp',
      link: '#',
      oldTotal: '1070€'
    }, 
  ];

   itemsPerPage = 20;  
   currentPage = 1;    
   totalPages = Math.ceil(this.turns.length / this.itemsPerPage);
 
   // metodo per ottenere i turni della pagina corrente
   get paginatedTurns() {
     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
     const endIndex = startIndex + this.itemsPerPage;
     return this.turns.slice(startIndex, endIndex);
   }
 
   // metodi per cambiare pagina
   nextPage() {
     if (this.currentPage < this.totalPages) {
       this.currentPage++;
     }
   }
 
   previousPage() {
     if (this.currentPage > 1) {
       this.currentPage--;
     }
   }
 
   // aggiorna il numero di elementi per pagina
   updateItemsPerPage(newItemsPerPage: number) {
     this.itemsPerPage = newItemsPerPage;
     this.totalPages = Math.ceil(this.turns.length / this.itemsPerPage);
     this.currentPage = 1; 
   }

}
