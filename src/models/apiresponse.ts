import {Session} from './Session'
import {Error} from './Error'


export class ApiResponse {

  constructor(public session:Session, public error: Error, public result: any) {
    // Quick and dirty extend/assign fields to this model
    if(error)
        console.log(error.toString());
    else
        console.log("Result = " + result);
  }
}
