import { Injectable } from '@angular/core';

import { Api } from '../providers';
import { Observable } from 'rxjs/Observable'

import { CoreObject } from '../../models/CoreObject';
import { Controller } from '../generic/Controller';

@Injectable()
export class MenuItems extends Controller {

  menuItems : Array<CoreObject>;

  constructor(public api: Api) { 
    super(api, "ContentsService");
  }

  query(params?: any) : Observable<CoreObject> {
    return super.sendRequest('getMenuItems', params);
  }
}
