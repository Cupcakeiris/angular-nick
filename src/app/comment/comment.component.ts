import { Component, OnInit } from '@angular/core';
import {CommentService} from '../service/comment.service'
import {UserPostService} from '../service/user-post.service'
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../interface/comment';
import { AuthService } from '../service/auth.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  p: number =1;

  public responsive: boolean = true;
  public labels: any = {
      previousLabel: ' ',
      nextLabel: ' ',
  };


  id: any;
  comments!:Comment[];
  
  posts!: Post[];
  postId!: string

  comment: Comment = {
    id: '',
    date:new Date(),
    message: '',
    user: '',
    postID: '',
    file:'',
  }

  constructor(private uPostS: UserPostService, private commentS: CommentService, private activatedRoute: ActivatedRoute, public authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.commentS.getComment().subscribe(cpost=>{
      console.log(cpost);
      this.comments = cpost;
    })

    this.uPostS.getPost().subscribe(post=>{
      //console.log(post);
      this.posts = post;
    })

    this.postId = this.commentS.postid
    this.comment.postID = this.postId  //direct gets post's id when page loads
  }

  delete(event:any, post:any){
    this.commentS.deleteComment(post);
  }

  //submit comment
  onSubmit(){
    if(this.comment.user != '' && this.comment.message !=''){
      this.commentS.addComment(this.comment);
      this.comment.user='';
      this.comment.message='';
      this.comment.date=new Date();
      this.comment.file='';
      this.comment.postID = this.postId.toString();
      //console.log(this.comment.postID)
    }
  }


  /*getid() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.id = params.id;
      console.log(this.id)
    },
    )
}*/
}
