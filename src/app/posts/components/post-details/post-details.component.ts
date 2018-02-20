import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../reducers';
import * as fromPosts from '../../actions/post';

import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pv-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  selectedPostId: number;
  public post$: Observable<Post>;

  constructor(public store: Store<fromRoot.State>, private route: ActivatedRoute) {
    this.selectedPostId = +this.route.snapshot.paramMap.get('id');
    this.post$ = store.select(fromRoot.getSelectedPost);
  }

  ngOnInit() {
    this.store.dispatch(new fromPosts.Selected(this.selectedPostId));
  }

}
