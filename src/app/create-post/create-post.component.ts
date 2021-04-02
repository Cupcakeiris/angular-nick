import { Component, OnInit } from '@angular/core';
import {UserPostService} from '../service/user-post.service';
import {Post} from '../interface/post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post: Post = {
    title: '',
    description:'',
    date:new Date(),
    username:'',
    id:''
  }

  constructor(private uPostS: UserPostService){

  }

  ngOnInit(){}
  //submits data to db
  onSubmit(){
    if(this.post.title !='' && this.post.username != '' && this.post.description !=''){
      this.uPostS.addPost(this.post);
      this.post.title='';
      this.post.username='';
      this.post.description='';
      this.post.date=new Date();
    }
  }

}

