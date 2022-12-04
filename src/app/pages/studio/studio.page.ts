import { Studio } from './../../home/studio.module';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-studio',
  templateUrl: './studio.page.html',
  styleUrls: ['./studio.page.scss'],
})
export class StudioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  studios: Studio[] = [
    { id: 1, nameRedording: 'Video', type: 'normal', numberCabins: 6, owner: 'Jorge' }
  ];  //Creando un array

  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedStudio: Studio = new Studio();


  addOrEditStudio() {
    if (this.selectedStudio.id === 0) {
      this.selectedStudio.id = this.studios.length + 1;
      this.studios.push(this.selectedStudio);
    }
    this.selectedStudio = new Studio();
  }
  openForEdit(studio: Studio) {
    this.selectedStudio = studio;
  }

  deleteStudio() {
    if (confirm('Are you sure want to delete it')) {
      // eslint-disable-next-line eqeqeq
      this.studios = this.studios.filter(x => x != this.selectedStudio);
      this.selectedStudio = new Studio();
    }
  }


}
