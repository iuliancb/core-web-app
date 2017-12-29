
import { Api } from '../providers';

import { Observable } from 'rxjs'
import { ApiResponse } from '../../models/ApiResponse';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { CoreObject } from '../../models/CoreObject';
import { ApiRequest } from '../../models/apirequest';
import { Session } from '../../models/Session';
import { Target } from '../../models/Target';


export class Controller {

  currentSession: Session = new Session("unauthenticated");

  constructor(public api: Api, private serviceName: string) {
  }



  sendRequest(method: string, params?: any): Observable<any> {
    console.log(method);

    return this.api.sendRequest(new ApiRequest(this.currentSession, new Target(this.serviceName, method, params)))
      .switchMap((response, index) => {

        console.log(response);

        this.currentSession = response.session;

        if (!response.error) {

          if (response.result instanceof Array) {
            return response.result.map(item => new CoreObject(item));
          }
          else {
            return new Array(new CoreObject(response.result));
          }
        }
        else {
          return new Array(new CoreObject(response.error));
        }
      })
      .catch(this.handleError);
  }

  entityGroupBy(entity: Observable<CoreObject>, groupName: string) {
    return entity
      .groupBy<CoreObject, string>(item => item[groupName])
      .flatMap((group) => group.reduce((acc, cur) => [...acc, cur], ["" + group.key]))
      .map(arr => ({ 'group': arr[0], isVisible: true, 'values': arr.slice(1) }))
  }


  private store(response: ApiResponse) {
    response.result.elements.forEach(element => {
      console.log(new CoreObject(element));
    });;
  }

  private handleError(error: any) {
    console.log('Yup an error occurred', error);
    return Observable.throw(error.message || error);
  }
}
