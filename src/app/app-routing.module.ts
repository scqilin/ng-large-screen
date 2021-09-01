import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  // },
  { path: 'pages', component: PagesComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preloadingStrategy: PreloadAllModules,
    // relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
