import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioPageRoutingModule } from './studio-routing.module';

import { StudioPage } from './studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioPageRoutingModule
  ],
  declarations: [StudioPage]
})
export class StudioPageModule {}
