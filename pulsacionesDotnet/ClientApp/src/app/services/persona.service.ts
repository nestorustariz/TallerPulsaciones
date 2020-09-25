import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Persona} from 'src/app/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  Consultar() :Persona[]{
    return JSON.parse(localStorage.getItem('datos'));
  }

  registrar(persona:Persona){
    let personas:Persona[] = [];
    if(this.Consultar() != null){
      personas = this.Consultar();
    }
    personas.push(persona);
    localStorage.setItem('datos',JSON.stringify(personas));
  }
}
