import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../song.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  songList: any = [];
  constructor(
    private firestoreService: FirestoreService, private router: Router
    ) {}

    ngOnInit(): void{
      this.songList = this.firestoreService.getSondList().valueChanges();
    }
  }
