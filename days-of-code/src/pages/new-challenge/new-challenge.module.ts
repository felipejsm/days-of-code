import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChallengePage } from './new-challenge';

@NgModule({
  declarations: [
    NewChallengePage,
  ],
  imports: [
    IonicPageModule.forChild(NewChallengePage),
  ],
})
export class NewChallengePageModule {}
