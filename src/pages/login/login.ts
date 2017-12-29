import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/User';
import { AccountsController } from '../../providers/account/AccountsController';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  

  account: { username: string, password: string } = {
    username: 'sample',
    password: 'mypassword'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public viewCtrl:ViewController, public controller: AccountsController ) {
  }

  // Attempt to login in through our User service
  onLogin() {
    this.controller.login(this.account.username, this.account.password).subscribe((resp) => {
      console.log(resp);
      this.viewCtrl.dismiss(resp);
    }, (err) => {
      this.navCtrl.pop();
      // Unable to log in
      /*
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();*/
    });
    
  }
}
