import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';

import { ErrorService } from '../errors/error.service';
import { User } from './user.model';

@Injectable()
export class AuthService {

    constructor(private errorService: ErrorService, private http: Http) {}

    signup(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('/user', body, { headers: headers})
            .map((response: Response) => 
                response.json()
            )
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('/user/signin', body, { headers: headers})
            .map((response: Response) => 
                response.json()
            )
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

}