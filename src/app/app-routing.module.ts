import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'singer',
    loadChildren: () => import('./pages/singer/singer.module').then( m => m.SingerPageModule)
  },
  {
    path: 'imagenes',
    loadChildren: () => import('./pages/imagenes/imagenes.module').then( m => m.ImagenesPageModule)
  },
  {
    path: 'studio',
    loadChildren: () => import('./pages/studio/studio.module').then( m => m.StudioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'concert',
    loadChildren: () => import('./pages/concert/concert.module').then( m => m.ConcertPageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./pages/persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'asistente',
    loadChildren: () => import('./pages/asistente/asistente.module').then( m => m.AsistentePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
