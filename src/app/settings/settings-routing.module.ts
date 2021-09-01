import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ThemeComponent } from './theme/theme.component'
const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },
  {
    path: 'theme/app-theme',
    component: ThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
