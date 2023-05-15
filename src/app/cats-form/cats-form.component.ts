import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Gato } from '../gato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats-form',
  templateUrl: './cats-form.component.html',
  styleUrls: ['./cats-form.component.scss'],
})
export class CatsFormComponent {
  gato: Gato = { nombre: '', url: '' }; // creo un gato vacio en base a mi interfaz
  
  constructor(private firestoreService: FirestoreService,
    private router: Router) {}

  agregarGato() {
    this.firestoreService.createCat(this.gato) //estoy llamando a mi metodo del servicio
      .then(() => {
        console.log('Gato agregado correctamente.');
        this.gato = { nombre: '', url: '' }; // Limpiar los campos después de agregar el gato
      })
      .catch((error) => {
        console.error('Error al agregar el gato:', error);
      });
  }
}
