import { Component, OnInit } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { newPost } from 'src/newPost';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})



export class PostComponent implements OnInit {

  imgBorder='assets/img/brownborder.png';
  isOn = false;

  constructor() { }

  ngOnInit() {}

}
