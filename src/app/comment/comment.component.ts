import { Component, OnInit } from '@angular/core';
import {CommentService} from '../service/comment.service'
import {UserPostService} from '../service/user-post.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  id: any;

  constructor(private uPostS: UserPostService, private commentS: CommentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getid() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.id = params.id;
      console.log(this.id)
    },
    )
}
}
