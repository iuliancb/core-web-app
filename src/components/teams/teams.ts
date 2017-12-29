import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Rx from 'rxjs/Observable'
import { TeamsController } from '../../providers/fantasy/TeamsController'
import { CoreObject } from '../../models/CoreObject'

/**
 * Generated class for the TeamsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'teams-component',
  templateUrl: 'teams.html'
})

export class TeamsComponent {

  loading: boolean;
  teamGroups: any[] = [];

  constructor(public navCtrl: NavController, private teamsController: TeamsController) {
    this.loadContent();
  }

  private loadContent() {
    let localTeamGroups: any = [];
    this.loading = true;
    this.teamsController
      .groupBy("Conference")
      .subscribe(p => localTeamGroups.push(p),
      e => { console.log(e) },
      () => {
        this.teamGroups = localTeamGroups;
        console.log(this.teamGroups)
      });
  };

  private isGroupShown(groupName: string): boolean {
    return this.teamGroups.find(item => item.group == groupName).isVisible;
  }

  private toggleGroup(groupName: string) {
    var groupItems = this.teamGroups.find(item => item.group == groupName)
    return groupItems.isVisible = !groupItems.isVisible;
  }

  private openItem(team) {
    this.navCtrl.push('TeamDetailPage', {
      teamID: team.TeamID,
      stadiumID : team.StadiumID
    });
  }
}
