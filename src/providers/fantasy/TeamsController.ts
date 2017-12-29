import { Injectable } from '@angular/core';
import { Api } from '../providers';
import { Observable } from 'rxjs/Observable'

import { Controller } from '../generic/Controller';
import { CoreObject } from '../../models/CoreObject';


@Injectable()
export class TeamsController extends Controller {
  
  constructor(public api: Api) {
    super(api, "TeamsService");
  }

  query(params?: any): Observable<CoreObject> {
    return super.sendRequest('getTeams', params);
  }

  groupBy(groupName : string){
    return super.entityGroupBy(this.query(), groupName);
  }

  getTeam(teamId: any):Observable<CoreObject> {
    console.log("teamId = " + teamId);
    return this.query().first(x=> x["TeamID"] == teamId)
  }
}
