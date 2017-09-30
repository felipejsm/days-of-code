import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyChallengePage } from './my-challenge';

@NgModule({
  declarations: [
    MyChallengePage,
  ],
  imports: [
    IonicPageModule.forChild(MyChallengePage),
  ],
})
export class MyChallengePageModule {}
