import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../reducers';
import * as fromUser from '../../actions/user';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  @Input() userId: number;
  public user$: Observable<User>;

  constructor(public store: Store<fromRoot.State>) {
    this.user$ = store.select(fromRoot.getUser);
  }

  ngOnInit() {
    this.store.dispatch(new fromUser.Select(this.userId));
  }
}
