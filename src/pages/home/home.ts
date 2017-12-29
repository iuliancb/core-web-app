import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AccountsController } from '../../providers/account/AccountsController';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {  

  constructor(public navCtrl: NavController,  
    public modalCtrl: ModalController,
    private accountsController: AccountsController) {
  }

  openPage(page) {
    let addModal = this.modalCtrl.create(page);
    addModal.present();
  }

  isAuthenticated(){
    return this.accountsController.isAuthenticated();
  }
}
