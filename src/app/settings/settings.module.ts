import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports:[
    
  ]
})
export class SettingsModule { }
