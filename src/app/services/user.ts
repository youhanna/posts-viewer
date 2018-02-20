import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../users/models/user';

import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
    getUser(id: number): Observable<User> {
        const user = {
            id: id,
            name: `User Name${id}`
        };

        return Observable.of(user);
    }
}
