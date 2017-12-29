import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDetailPage } from './team-detail';
import { TeamDetailComponent } from '../../components/team-detail/team-detail';
import { StadiumComponent } from '../../components/stadium/stadium';
import { PlayerComponent } from '../../components/player/player';

@NgModule({
  declarations: [
    TeamDetailPage,
    TeamDetailComponent,
    StadiumComponent,
    PlayerComponent
  ],
  imports: [
    IonicPageModule.forChild(TeamDetailPage),
    
  ],
})
export class TeamDetailPageModule {}
