import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './contact/contact.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { VideoComponent } from './video/video.component';
import {AdminComponent} from './admin/admin.component';
import {environment} from '../environments/environment.prod';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'post', component: PostComponent},
  { path:'comment', component: CommentComponent},
  { path:'video', component: VideoComponent},
  { path:'blog', component: BlogComponent},
  { path:'contact', component: ContactComponent},
  { path:'changelog', component: ChangelogComponent},
  { path:environment.path, component: AdminComponent},
  { path:'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
