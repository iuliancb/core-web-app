import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login'

import { MenuItems } from '../providers/content/MenuItems'
import { Api } from '../providers/providers'
import { TeamsController } from '../providers/fantasy/TeamsController';
import { GamesController } from '../providers/fantasy/GamesController';
import { PlayersController } from '../providers/fantasy/PlayersController';
import { StadiumsController } from '../providers/fantasy/StadiumsController';
import { TeamsComponent } from '../components/teams/teams'
import { GamesComponent } from '../components/games/games'


import { StandingComponent } from '../components/standing/standing';
import { RegisterPage } from '../pages/register/register';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';
import { AccountsController } from '../providers/account/AccountsController';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuItems,
    Api,
    TeamsController,
    GamesController,
    PlayersController,
    StadiumsController,
    AccountsController,
    HttpClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule { }
