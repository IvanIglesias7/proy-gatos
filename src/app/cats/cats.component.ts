import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  public cats: any[] = [];
  public documentId = null;
  public currentStatus = 1;
  public newCatForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  goToAdd() {
    this.router.navigate(['form']);
  }
  constructor(
    private firestoreService: FirestoreService,
    private router: Router
    
    
  ) { }
  ngOnInit() {
    
    this.firestoreService.getCats().subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });

    
  }
}


