import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingerPage } from './singer.page';

const routes: Routes = [
  {
    path: '',
    component: SingerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingerPageRoutingModule {}
