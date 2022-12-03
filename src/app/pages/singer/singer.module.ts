import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingerPageRoutingModule } from './singer-routing.module';

import { SingerPage } from './singer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingerPageRoutingModule
  ],
  declarations: [SingerPage]
})
export class SingerPageModule {}
