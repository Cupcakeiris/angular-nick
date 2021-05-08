import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  postCollection!: AngularFirestoreCollection<Post>;
  post!: Observable<any[]>;
  postDoc!: AngularFirestoreDocument<Post>;

  constructor(public cPost: AngularFirestore) {
    
    this.postCollection = this.cPost.collection('comments', ref => ref.where('user', '==', ''));

//if user enters values and presses submit button this code sends entered values directly to firestore.
//rather than using valueChanges() it gets all properties of our collection
this.post = this.postCollection.snapshotChanges().pipe(map(changes => {
  return changes.map(a => {
    const data = a.payload.doc.data() as Post
    data.id = a.payload.doc.id;
    return data;
  });
}))
  }}


