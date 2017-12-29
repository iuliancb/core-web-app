import { Component } from '@angular/core';
import * as Rx from 'rxjs/Observable'
import { GamesController } from '../../providers/fantasy/GamesController'
import { CoreObject } from '../../models/CoreObject'
import { NavController } from 'ionic-angular';

/**
 * Generated class for the GamesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'games-component',
  templateUrl: 'games.html'
})
export class GamesComponent {
  loading: boolean;
  gamesGroup: any[] = [];

  constructor(public navCtrl: NavController, private gamesController: GamesController) {
    this.loadContent();
  }

  private loadContent() {
    let localGroups: any = [];
    this.loading = true;
    this.gamesController.groupBy("SeasonType")
      .subscribe(group => localGroups.push(group), 
      e => { console.log(e)},
      () => {
        this.gamesGroup = localGroups;
        console.log(this.gamesGroup)
      });
  };

  private isGroupShown(groupName: string): boolean {
    return this.gamesGroup.find(item => item.group == groupName).isVisible;
  }

  toggleGroup(groupName: string) {
    var groupItems = this.gamesGroup.find(item => item.group == groupName)
    console.log(groupItems)
    return groupItems.isVisible = !groupItems.isVisible;
  }

  openTeam(teamID: string) {
    this.navCtrl.push('TeamDetailPage', {
      teamID: teamID
    });
  }
}
