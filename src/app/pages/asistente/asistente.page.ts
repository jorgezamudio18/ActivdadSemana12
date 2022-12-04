import { Component, OnInit } from '@angular/core';
import { Asistente } from 'src/app/home/asistente.module';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.page.html',
  styleUrls: ['./asistente.page.scss'],
})
export class AsistentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  asistentes: Asistente[] = [{ id: 1, nombre: 'Admin', concierto:'Video', cantidadpersonas: 6}];  //Creando un array

  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedAsistente: Asistente = new Asistente();


  addOrEdit() {
    if (this.selectedAsistente.id === 0) {
      this.selectedAsistente.id = this.asistentes.length + 1;
      this.asistentes.push(this.selectedAsistente);
    }
    this.selectedAsistente = new Asistente();
  }
  openForEdit(persona: Asistente) {
    this.selectedAsistente = persona;
  }

  deleteConcert() {
    if (confirm('Are you sure want to delete it')) {
      // eslint-disable-next-line eqeqeq
      this.asistentes = this.asistentes.filter(x => x != this.selectedAsistente);
      this.selectedAsistente = new Asistente();
    }
  }


}
