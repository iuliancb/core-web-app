import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular';

import { CoreObject } from '../../models/CoreObject';
import { PlayersController } from '../../providers/fantasy/PlayersController';


/**
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player-component',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  players:Array<CoreObject> = [];

  constructor(public navCtrl: NavController, navParams: NavParams, controller: PlayersController) {
    
    console.log(navParams);
    controller.getPlayers(navParams.get('teamID'))
    .subscribe(player => {
      console.log(player);
      this.players.push(player);
    });
  }

}
