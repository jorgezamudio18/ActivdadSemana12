import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  imgs = [];

  constructor(private firestoreService: FirestoreService) {
    this.imgs = this.firestoreService.getImgs();
    console.log (this.imgs);
  }

  ngOnInit() {
  }

}
