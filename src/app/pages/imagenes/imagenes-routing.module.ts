import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenesPage } from './imagenes.page';

const routes: Routes = [
  {
    path: '',
    component: ImagenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagenesPageRoutingModule {}
