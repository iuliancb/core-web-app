import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequest } from '../../models/apirequest';
import { ApiResponse } from '../../models/ApiResponse';



/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api{
  
  url: string = '/assets/data';


  constructor(private http:HttpClient) {
  }

  sendRequest(request : ApiRequest ) {
    var path = request.target.serviceName + '/' + request.target.methodName.replace("get", "");
      
    
    return this.http.get<ApiResponse>(this.url + '/' + path + '.json');
  }
}
