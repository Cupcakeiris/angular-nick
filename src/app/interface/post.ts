import { AngularFirestore} from '@angular/fire/firestore';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Post{
    id: string,
    date?: any,
    description?: string,
    title?: string,
    username?: string;
  }