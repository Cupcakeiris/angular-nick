import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import app from 'firebase';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new app.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider: app.auth.GoogleAuthProvider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
        console.log('You have been successfully logged in')
    }).catch((error) => {
        console.log(error)
    })
  }

  signOut() {
    this.afAuth.signOut()
  }
}     


