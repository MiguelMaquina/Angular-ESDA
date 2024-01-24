import { Component } from '@angular/core';
import {Personaje} from '../personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})

export class PersonajeComponent {
  personajes: Personaje[] = [
    { id: 1, nombre: "Frodo", nivel: 25 },
    { id: 2, nombre: "Gandalf", nivel: 245 },
    { id: 3, nombre: "Gollum", nivel: 2 }
  ];

  personajeSel!: Personaje ;

  onSelect(personaje: Personaje): void {
    this.personajeSel = personaje;
  }
}

