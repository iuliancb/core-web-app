import { Injectable } from '@angular/core';
import { Api } from '../providers';
import { Observable } from 'rxjs/Observable'

import { Controller } from '../generic/Controller';
import { CoreObject } from '../../models/CoreObject';


@Injectable()
export class StadiumsController extends Controller {
  
  constructor(public api: Api) {
    super(api, "StadiumsService");
  }

  query(params?: any): Observable<CoreObject> {
    return super.sendRequest('getStadiums', params);
  }

  groupBy(groupName : string){
    return super.entityGroupBy(this.query(), groupName);
  }

  getStadium(stadiumId: any):Observable<CoreObject> {
    console.log("stadiumId = " + stadiumId);
    return this.query().first(x=> x["StadiumID"] == stadiumId);
  }
}
