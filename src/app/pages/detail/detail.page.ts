import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../../song.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song: any = {}; songId: any;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
    console.log(this.song);
  }

  async deleteSong(){
    const alert = await this.alertController.create({ message: '¿Estas seguro de que deseas eliminar esta cancion?', buttons: [
      {
        text: 'Cancel', role: 'cancel', handler: blah =>{
          console.log('Confirm Cancel: blah');
        },
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteSong(this.songId).then(() => {
            this.router.navigateByUrl('');
          });
        },
      },],
    });
    await alert.present();
  }
}
