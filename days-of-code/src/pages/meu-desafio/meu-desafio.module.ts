import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeuDesafioPage } from './meu-desafio';

@NgModule({
  declarations: [
    MeuDesafioPage,
  ],
  imports: [
    IonicPageModule.forChild(MeuDesafioPage),
  ],
})
export class MeuDesafioPageModule {}
