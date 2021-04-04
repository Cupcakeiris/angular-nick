import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

  postCollection!: AngularFirestoreCollection<Post>;
  post!: Observable<any[]>;
  postDoc!: AngularFirestoreDocument<Post>;

  constructor(public aPost: AngularFirestore) {
    this.postCollection=this.aPost.collection('adminPost', ref => ref.orderBy('date', 'desc'));

    //same principle as user post
    this.post = this.postCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Post
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  }

  getPost(){
    return this.post;
  }

  addPost(post: Post){
    this.postCollection.add(post);
  }

  deletePost(post: Post){
    this.postDoc = this.aPost.doc(`adminPost/${post.id}`);
    this.postDoc.delete();
  }
  }