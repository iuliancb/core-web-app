import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Api } from '../providers';


import { Controller } from '../generic/Controller';
import { CoreObject } from '../../models/CoreObject';
import { User } from '../../models/User';



@Injectable()
export class AccountsController extends Controller {

    user: CoreObject;

    constructor(public api: Api) {
        super(api, "AccountsService");
    }

    public register(username: string, fullname: string, birthdate: string, password: string, refferalCode: string = '') {
        super.sendRequest("register", [username, fullname, birthdate, password, refferalCode]);
    }

    public activate(activationToken: string) {
        super.sendRequest("register", [activationToken]);
    }
    public login(username: string, password: string) {
        return super.sendRequest("login", [username, password]).map((response => this.user = response));
    }

    public validateUsername(username: string) {
        return super.sendRequest("validateUsername", [username])
    }

    public validateEmail(email: string) {
        return super.sendRequest("validateEmail", [email])
    }

    public logout() {
        this.user = null;
    }


    public  isAuthenticated(): boolean{
        return this.user!=null;
    }
}
