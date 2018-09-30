import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { GardenPage } from '../pages/garden/garden';

import { AuthService } from '../providers/auth/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { config } from '../environments/environment.prod';

import { Intercom } from '@ionic-native/intercom';
// import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GardenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config.fire),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GardenPage
  ],
  providers: [

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
		AngularFireAuth,
		AngularFireDatabase,
    Intercom,
    // DataProvider
  ]
})
export class AppModule {}
