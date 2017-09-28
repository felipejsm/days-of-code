import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoDesafioPage } from './novo-desafio';

@NgModule({
  declarations: [
    NovoDesafioPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoDesafioPage),
  ],
})
export class NovoDesafioPageModule {}
