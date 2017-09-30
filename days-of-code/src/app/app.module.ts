import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChartsPage } from '../pages/charts/charts';
import { ConfigurationsPage } from '../pages/configurations/configurations';
import { MyChallengePage } from '../pages/my-challenge/my-challenge';
import { NewChallengePage } from '../pages/new-challenge/new-challenge';
import { AboutPage } from '../pages/about/about';
import { HistoryPage } from '../pages/history/history';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChartsPage,
    ConfigurationsPage,
    MyChallengePage,
    NewChallengePage,
    AboutPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChartsPage,
    ConfigurationsPage,
    MyChallengePage,
    NewChallengePage,
    AboutPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
