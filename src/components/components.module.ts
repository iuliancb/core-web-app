import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams/teams';
import { GamesComponent } from './games/games';
import { TeamDetailComponent } from './team-detail/team-detail';
import { PlayerComponent } from './player/player';
import { StadiumComponent } from './stadium/stadium';
import { StandingComponent } from './standing/standing';
@NgModule({
	declarations: [TeamsComponent,
    GamesComponent,
    TeamDetailComponent,
    PlayerComponent,
    StadiumComponent,
    StandingComponent],
	imports: [],
	exports: [TeamsComponent,
    GamesComponent,
    TeamDetailComponent,
    PlayerComponent,
    StadiumComponent,
    StandingComponent]
})
export class ComponentsModule {}
