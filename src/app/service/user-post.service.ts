import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  postCollection!: AngularFirestoreCollection<Post>;

  constructor(public uPost: AngularFirestore) { }
}

interface Post{
  date: Date,
  description: string,
  title: string,
  username: string;
}