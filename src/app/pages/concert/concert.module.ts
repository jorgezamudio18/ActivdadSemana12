import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcertPageRoutingModule } from './concert-routing.module';

import { ConcertPage } from './concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcertPageRoutingModule
  ],
  declarations: [ConcertPage]
})
export class ConcertPageModule {}
