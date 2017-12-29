import { Component } from '@angular/core';
import { CoreObject } from '../../models/CoreObject';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular';

import { TeamsController } from '../../providers/fantasy/TeamsController';

/**
 * Generated class for the TeamDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'team-detail-component',
  templateUrl: 'team-detail.html'
})
export class TeamDetailComponent {

  team : CoreObject =  new CoreObject({
    "TeamID": 1,
    "Key": "BOS",
    "Active": true,
    "City": "Boston",
    "Name": "Bruins",
    "StadiumID": 3,
    "Conference": "Eastern",
    "Division": "Atlantic",
    "PrimaryColor": "000000",
    "SecondaryColor": "FDB930",
    "TertiaryColor": "FFFFFF",
    "QuaternaryColor": "",
    "WikipediaLogoUrl": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/1\/12\/Boston_Bruins.svg",
    "WikipediaWordMarkUrl": "",
    "GlobalTeamID": 30000001
});
;

  constructor(public navCtrl: NavController, navParams: NavParams, controller: TeamsController) {
    
    console.log(navParams);
    controller.getTeam(navParams.get('teamID'))
    .subscribe(team => {
      console.log(team);
      this.team = team;
    });
  }
}
