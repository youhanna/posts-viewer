import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import * as fromRoot from '../../../reducers';
import * as fromPosts from '../../actions/post';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pv-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.posts$ = store.select(fromRoot.getPosts);
  }

  ngOnInit() {
    this.store.dispatch(new fromPosts.UpdateAll());
  }
}
