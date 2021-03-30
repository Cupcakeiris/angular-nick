import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import app from 'firebase';
import 'firebase/auth';
import { User } from '../interface/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  user!: any
  constructor(public auth: AngularFireAuth) {  
    
  }

  login() {
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
    this.user = app.auth().currentUser!.uid //AND THIS TOOK ME WHOLE DAY, PROBLEM WAS TO ADD ! NEXT TO currentUser. JUST BRUH
  }
  logout() {
    this.auth.signOut();
  }
}     


