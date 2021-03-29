import { Component, OnInit } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UserPostService } from '../service/user-post.service';

//fire goes brr
import { AngularFirestore } from "@angular/fire/firestore";
import { Post } from '../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})



export class PostComponent implements OnInit {

  p: number =1;

  public responsive: boolean = true;
  public labels: any = {
      previousLabel: ' ',
      nextLabel: ' ',
  };


  imgBorder='assets/img/brownborder.png';
  isOn = false;

  posts!: Post[];

  constructor(private uPostS: UserPostService) { }
  
  ngOnInit() {
    this.uPostS.getPost().subscribe(post=>{
      //console.log(post);
      this.posts = post;
    })
  }
  deletePost(event:any, post:any){
    this.uPostS.deletePost(post);
  }
}
