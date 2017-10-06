import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { webapibaseurl } from "../app.model";
@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  login(username: string, password: string) {
    var url = `${webapibaseurl}selfservice/authenticateLogin`;
    // var url = "api/selfservice/authenticateLogin";

    return this.http
      .post(url, { userid: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let ret = response.json();
        //   alert(JSON.stringify(user));
        if (ret && ret.issuccessfull) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", ret.payload);
        } else {
          let errormsg: string = ret ? ret.errormsg : "Error While Login";
          throw new Error(errormsg);
        }
      });
  }

  getsubordinates(staffid) {
    var url = "api/employees";

    return this.http
      .get(url + `?supervisorstaffid=${staffid}`)
      .map(response => response.json());
  } //getsubordinates

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
