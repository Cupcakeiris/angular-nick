import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post'; 
import {AdminPostService} from '../service/admin-post.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  p: number =1;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: ' ',
      nextLabel: ' ',
  };

  search!:string;
  receiveMessage($event: string) {
    this.search = $event
  }


  isOn = false;
  posts!: Post[];

  post: Post = {
    title: '',
    description:'',
    date:new Date(),
    username:'',
    id:'',
    file:''
  }

  constructor(private aPostS: AdminPostService,  public authService: AuthService ) { }


  //onSubmit, with ready component it works wrong way, so needed to copy paste its codes to this component
  
  onSubmit(){
    if(this.post.title !='' && this.post.username != '' && this.post.description !=''){
      this.aPostS.addPost(this.post);
      this.post.title='';
      this.post.username='';
      this.post.description='';
      this.post.date=new Date();
      this.post.file='';
    }
  }

  ngOnInit() {
    this.aPostS.getPost().subscribe(post=>{
      this.posts = post;
    })
  }
  delete(event:any, post:any){
    this.aPostS.deletePost(post);
  }

}
