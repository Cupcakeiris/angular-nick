import { AngularFirestore} from '@angular/fire/firestore';

export interface Post{
    id: string,
    date?: Date,
    description?: string,
    title?: string,
    username?: string;
  }