import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isAdmin = false;
  id!: string
  constructor(public authService: AuthService) {  
    this.id = authService.user;
  }

  ngOnInit() { 
    
  }

}
