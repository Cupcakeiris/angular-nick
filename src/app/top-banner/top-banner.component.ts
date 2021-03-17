import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  imgSRC = 'assets/img/logo.png';
  page(url: string){
    window.open(url, "_blank");
  } 







  constructor() { }

  ngOnInit(): void {
  }

}
