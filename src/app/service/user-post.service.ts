import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  postCollection!: AngularFirestoreCollection<Post>;
  post!: Observable<any[]>;
  postDoc!: AngularFirestoreDocument<Post>;

  constructor(public uPost: AngularFirestore) { 
    //this.post = this.uPost.collection('userPost').valueChanges();

    this.postCollection=this.uPost.collection('userPost', ref => ref.orderBy('date', 'desc'));

    //if user enters values and presses submit button this code sends entered values directly to firestore.
    //rather than using valueChanges() it gets all properties of our collection
    this.post = this.postCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Post
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  }

  getPost(){
    return this.post; //gets all data from db
  }

  addPost(post: Post){
    this.postCollection.add(post); //stores user's datas 
  }

  deletePost(post: Post){
    this.postDoc = this.uPost.doc(`userPost/${post.id}`); //deletes data in db
    this.postDoc.delete();
  }

}



