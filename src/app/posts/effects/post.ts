import { Actions, Effect } from '@ngrx/effects';
import { PostService } from '../../services/post';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as post from '../actions/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostEffects {
    @Effect()
    load$: Observable<Action> = this.actions$
    .ofType(post.PostActionTypes.UpdateAll)
    .switchMap(() =>
        this.postsService.loadPosts()
        .map(data => new post.UpdatedAll(data))
    );

    constructor(private actions$: Actions, private postsService: PostService) {}
}
