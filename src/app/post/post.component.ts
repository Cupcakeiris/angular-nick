import { Component, OnInit } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UserPostService } from '../service/user-post.service';
import {AuthService} from '../service/auth.service';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import { Post } from '../interface/post';    
var filter = require('leo-profanity');


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})



export class PostComponent implements OnInit {
  //pagination's custom properties
  p: number =1;


  public responsive: boolean = true;
  public labels: any = {
      previousLabel: ' ',
      nextLabel: ' ',
  };

  imgBorder='assets/img/brownborder.png';
  isOn = false;
  

  posts!: Post[];

  constructor(private uPostS: UserPostService, public authService: AuthService ) { }
  search!:string;
  //gets variable from search-bar.component
  receiveMessage($event: string) {
    this.search = $event
  }


  ngOnInit() {
    //gets all posts from db when site is just initialized
    this.uPostS.getPost().subscribe(post=>{
      //console.log(post);
      this.posts = post;
    })

    console.log(filter.check('I have boob'))

  }



  delete(event:any, post:any){
    this.uPostS.deletePost(post);
  }
  

}
