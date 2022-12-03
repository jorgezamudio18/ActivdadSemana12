import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.page.html',
  styleUrls: ['./singer.page.scss'],
})
export class SingerPage implements OnInit {
  singers = [];

  constructor(private firestoreService: FirestoreService) { 
    this.singers = this.firestoreService.getSingers();
  }

  ngOnInit() {
    
  }

}
