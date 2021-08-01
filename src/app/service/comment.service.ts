import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Post } from '../interface/post';
import { map } from "rxjs/operators";
import { Comment } from '../interface/comment';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  cCollection!: AngularFirestoreCollection<Post>;
  cpost!: Observable<any[]>;
  cpostDoc!: AngularFirestoreDocument<Post>;
  postid!: string;
  constructor(public cPost: AngularFirestore, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.postid = params['id'];
      console.log(this.postid) //gets post's id from
  });

    this.cCollection = this.cPost.collection('comments', ref => ref.orderBy('date', 'desc'));

//if user enters values and presses submit button this code sends entered values directly to firestore.
//rather than using valueChanges() it gets all properties of our collection
this.cpost = this.cCollection.snapshotChanges().pipe(map(changes => {
  return changes.map(a => {
    const data = a.payload.doc.data() as Post
    data.id = a.payload.doc.id;
    return data;
  });
}))
  }


  deleteComment(comment:Comment){
    this.cpostDoc = this.cPost.doc(`comments/${comment.id}`); //deletes data in db
    this.cpostDoc.delete();
  }

  addComment(comment: Comment){
    this.cCollection.add(comment); //stores user's datas 
  }

  getComment(){
    return this.cpost; //gets all data from db
  }

}


