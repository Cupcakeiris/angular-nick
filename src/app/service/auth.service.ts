import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import app from 'firebase';
import 'firebase/auth';
import { User } from '../interface/auth';
import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  user!: any
  constructor(public auth: AngularFireAuth) {  
    app.initializeApp(auth)
  }

  login() {
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
    //return this.user = app.auth().currentUser!.uid //currently it gives error: Cannot define 'uid' of null
  }
  logout() {
    this.auth.signOut();
  }
}     


