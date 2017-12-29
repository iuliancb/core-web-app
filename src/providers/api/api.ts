import { HttpClient, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiRequest } from '../../models/apirequest';
import { ApiResponse } from '../../models/ApiResponse';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  
  url: string = 'http://hermes.lb.opfx.org/index.php';
	
  constructor(public http: HttpClient) {
  }

  sendRequest(request : ApiRequest ) {
      console.log(request);
	    return this.http.post<ApiResponse>( this.url, JSON.stringify(request)); 
	  }
}
