import { Injectable } from '@angular/core';
import { Api } from '../providers';
import { Observable } from 'rxjs/Observable'

import { Controller } from '../generic/Controller';
import { CoreObject } from '../../models/CoreObject';


@Injectable()
export class PlayersController extends Controller {
  
  constructor(public api: Api) {
    super(api, "PlayersService");
  }

  query(params?: any): Observable<CoreObject> {
    return super.sendRequest('getPlayers', params);
  }

  groupBy(groupName : string){
    return super.entityGroupBy(this.query(), groupName);
  }

  getPlayers(teamId: any):Observable<CoreObject> {
    console.log("teamId = " + teamId);
    return this.query().find(x=> x["TeamID"] == teamId)
  }
  getPlayer(playerId: any):Observable<CoreObject> {
    console.log("playerId = " + playerId);
    return this.query().first(x=> x["PlayerID"] == playerId)
  }
}
