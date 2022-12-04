import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/home/persona.module';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  constructor() { }

  ngOnInit(){}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  personas: Persona[] = [{ id: 1, nombre: 'Jorge', concierto:'Video' },{ id: 2, nombre: 'Yanina', concierto:'Video' }];  //Creando un array

  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedPersona: Persona = new Persona();


  addOrEdit() {
    if (this.selectedPersona.id === 0) {
      this.selectedPersona.id = this.personas.length + 1;
      this.personas.push(this.selectedPersona);
    }
    this.selectedPersona = new Persona();
  }
  openForEdit(persona: Persona) {
    this.selectedPersona = persona;
  }

  deleteConcert() {
    if (confirm('Are you sure want to delete it')) {
      // eslint-disable-next-line eqeqeq
      this.personas = this.personas.filter(x => x != this.selectedPersona);
      this.selectedPersona = new Persona();
    }
  }


}
