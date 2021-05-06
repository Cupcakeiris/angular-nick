import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchWord!: string; //user's searching word in input
  amog=false
  
  amogus(){
    if(this.searchWord == "amogus"){
      this.amog=true;
    }
  }

  @Output() messageEvent = new EventEmitter<string>();
  //@Output is used send input data to another components
  sendMessage() {
    this.messageEvent.emit(this.searchWord)
  }

}
