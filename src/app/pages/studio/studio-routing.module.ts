import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudioPage } from './studio.page';

const routes: Routes = [
  {
    path: '',
    component: StudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioPageRoutingModule {}
