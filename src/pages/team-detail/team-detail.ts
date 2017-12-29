import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreObject } from '../../models/CoreObject';
import { TeamsComponent } from '../../components/teams/teams';
import { TeamsController } from '../../providers/fantasy/TeamsController';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  team = new CoreObject({
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

  constructor(public navCtrl: NavController, navParams: NavParams, teamController : TeamsController) {
    console.log(navParams.get('teamID'));
    
    teamController.getTeam(navParams.get('teamID'))
    .subscribe(team => {
      console.log(team)
      this.team = team});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }
}
