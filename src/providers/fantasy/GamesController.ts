
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Api } from '../providers';


import { Controller } from '../generic/Controller';
import { CoreObject } from '../../models/CoreObject';


@Injectable()
export class GamesController extends Controller {

  constructor(public api: Api) {
    super(api, "GamesService");
  }

  query(params?: any): Observable<CoreObject> {
    return super.sendRequest('getGames', params);
  }

  groupBy(groupName : string){
    return super.entityGroupBy(this.query(), groupName);
  }
}
