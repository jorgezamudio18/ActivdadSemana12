import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistentePage } from './asistente.page';

const routes: Routes = [
  {
    path: '',
    component: AsistentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistentePageRoutingModule {}
