import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post; 

  constructor() { }

  ngOnInit() {
    this.post = {
      id: 5,
      title: 'post title',
      userId: 3,
      body: 'this is the body'
    }
  }

}
