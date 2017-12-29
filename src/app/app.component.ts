import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuItems } from '../providers/content/MenuItems';


import { HomePage } from '../pages/home/home';
import { CoreObject } from '../models/CoreObject';
import { AccountsController } from '../providers/account/AccountsController';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  leftMenuItems: Array<CoreObject> = [];
  user: any;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menuItems: MenuItems,
    private controller: AccountsController) {

    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.loadMenuContent();
    });
  }

  loadMenuContent() {
    this.menuItems.query().subscribe(x => this.leftMenuItems.push(x));
  }

  openPage(page){
    //this.navCtrl.push(page);
  }
  logout() {
    this.controller.logout();
  }
}
