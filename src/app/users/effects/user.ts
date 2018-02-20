import { Actions, Effect } from '@ngrx/effects';
import { UserService } from '../../services/user';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as user from '../actions/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
    .ofType<user.Select>(user.UserActionTypes.Select)
    .map(action => action.payload)
    .switchMap(id =>
        this.userService.getUser(id)
        .map(data => new user.Selected(data))
    );

    constructor(private actions$: Actions, private userService: UserService) {}
}
