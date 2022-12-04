import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistentePageRoutingModule } from './asistente-routing.module';

import { AsistentePage } from './asistente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistentePageRoutingModule
  ],
  declarations: [AsistentePage]
})
export class AsistentePageModule {}
