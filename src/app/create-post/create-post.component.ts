import { Component, OnInit } from '@angular/core';
import {UserPostService} from '../service/user-post.service';
import {AdminPostService} from '../service/admin-post.service';
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
    id:'',
    file:''
  }

  constructor(private uPostS: UserPostService, private aPostS: AdminPostService){

  }

  ngOnInit(){}
  //same principle as userpost
  onSubmit(){
    if(this.post.title !='' && this.post.username != '' && this.post.description !=''){
      this.uPostS.addPost(this.post);
      this.post.title='';
      this.post.username='';
      this.post.description='';
      this.post.date=new Date();
      this.post.file='';
    }
  }


}

