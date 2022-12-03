import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenesPageRoutingModule } from './imagenes-routing.module';

import { ImagenesPage } from './imagenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenesPageRoutingModule
  ],
  declarations: [ImagenesPage]
})
export class ImagenesPageModule {}
