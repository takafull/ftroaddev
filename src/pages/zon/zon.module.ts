import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonPage } from './zon';

@NgModule({
  declarations: [
    ZonPage,
  ],
  imports: [
    IonicPageModule.forChild(ZonPage),
  ],
})
export class ZonPageModule {}
