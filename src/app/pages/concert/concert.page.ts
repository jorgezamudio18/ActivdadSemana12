import { Concert } from './../../home/concert.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  concerts: Concert[] = [
    { id: 1, name: 'Video', costoconcierto: 121323, valor: 6, fecha: '12/12/2022' }
  ];  //Creando un array

  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedConcert: Concert = new Concert();


  addOrEdit() {
    if (this.selectedConcert.id === 0) {
      this.selectedConcert.id = this.concerts.length + 1;
      this.concerts.push(this.selectedConcert);
    }
    this.selectedConcert = new Concert();
  }
  openForEdit(concert: Concert) {
    this.selectedConcert = concert;
  }

  deleteConcert() {
    if (confirm('Are you sure want to delete it')) {
      // eslint-disable-next-line eqeqeq
      this.concerts = this.concerts.filter(x => x != this.selectedConcert);
      this.selectedConcert = new Concert();
    }
  }

}
