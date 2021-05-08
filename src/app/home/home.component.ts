import { Component, OnInit } from '@angular/core';
import {ChangelogComponent} from '../changelog/changelog.component';
import { UserPostService } from '../service/user-post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numb!: any;


  constructor(private uPostS: UserPostService) { }

  ngOnInit(): void {
    console.log('ah looking for easter eggs? there r bunch of them, like try to resize ur screen haha')

    this.uPostS.getPost().subscribe(post => {
     // console.log(post);
      for (var n in post){
          this.numb = n
          //console.log(n)
      }
      this.numb = Number(this.numb) + 1    
    })
  }

}
