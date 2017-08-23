import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {webapibaseurl} from '../app.model';
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        var url = `${webapibaseurl}selfservice/authenticateLogin`;
        //var url = 'http://localhost:1167/api/selfservice/authenticateLogin';
       
        return this.http.post(url, { userid: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
             //   alert(JSON.stringify(user));
                if (user && user.isvalid) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
         
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}