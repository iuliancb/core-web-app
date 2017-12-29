import { Component } from '@angular/core';
import { CoreObject } from '../../models/CoreObject';

import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular';
import { StadiumsController} from '../../providers/fantasy/StadiumsController'

/**
 * Generated class for the StadiumComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'stadium-component',
  templateUrl: 'stadium.html'
})
export class StadiumComponent {

  stadium: CoreObject  = new CoreObject({
    "StadiumID": 1,
    "Active": true,
    "Name": "Honda Center",
    "Address": "2695 E. Katella Ave.",
    "City": "Anaheim",
    "State": "CA",
    "Zip": "92806",
    "Country": "USA",
    "Capacity": 17174
});

  constructor(public navCtrl: NavController, navParams: NavParams, controller: StadiumsController) {
    
    console.log(navParams);

    controller.getStadium(navParams.get('stadiumID'))
    .subscribe(stadium => {
      console.log(stadium);
      this.stadium = stadium;
    });
  }
}
