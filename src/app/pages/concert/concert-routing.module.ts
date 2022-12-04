import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertPage } from './concert.page';

const routes: Routes = [
  {
    path: '',
    component: ConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertPageRoutingModule {}
